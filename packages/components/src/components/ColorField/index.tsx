/// <reference path="../../_declarations/global.d.ts" />
import TextField, { PropsType as TextFieldPropsType } from '../TextField';
import React, { FC, useRef, useState, useEffect } from 'react';
import ColorDrop from '../ColorDrop';
import Box from '../Box';
import { UndoIcon } from '@myonlinestore/bricks-assets';
import IconButton from '../IconButton';
import ColorPicker from '../ColorPicker';
import { flex, box, flexProps, boxProps } from '../../utility/box';

type OmittedKeys = 'prefix' | 'onChange';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> &
    typeof flex.props &
    typeof box.props & {
        emptyIsTransparent?: boolean;
        transparentPlaceholder: string;
        initialValue: string;
        resetButtonTitle: string;
        /* returns either a full hexcode with hashtag ór `transparent` */
        onChange(value: string): void;
    };

export enum TestIds {
    container = 'container',
    colorDrop = 'color-drop',
    reset = 'reset',
}

const ColorField: FC<PropsType> = props => {
    const [show, setShow] = useState(false);
    const inputRef = useRef<HTMLInputElement>();

    // Since the ColorField uses a prefix for the # character, it needs to strip the # from the value when
    // passing it to the TextField, and add it in the onChange call. It should also convert 'transparent' to an
    // empty string, since this equals transparancy.
    const stripHashtag = (hexcode: string) => {
        if (hexcode === 'transparent') {
            return '';
        }

        return hexcode.replace('#', '');
    };

    const isTransparent = (hexcode: string) => {
        return hexcode === '#' || hexcode === '' || hexcode === 'transparent';
    };

    /**
     * This effect adds a function to the window that will be called by other color pickers when a new one is opened.
     * Since the popover cant be closed onBlur of the textField (it blurs when using the colorpicker) it has to be
     * closed by other ColorFields on opening.
     */
    useEffect(() => {
        if (show) {
            if ((window as any).closeActiveColorPicker) {
                (window as any).closeActiveColorPicker();
            }

            (window as any).closeActiveColorPicker = () => {
                setShow(false);
                (window as any).closeActiveColorPicker = null;
            };
        }
    }, [show]);

    return (
        <ColorPicker
            transparentSwatch={props.emptyIsTransparent}
            show={show}
            color={props.value}
            onClickOutside={() => {
                setShow(false);
            }}
            onChange={color => {
                props.onChange(color.hex);
            }}
        >
            <Box
                alignItems="flex-start"
                style={props.disabled ? { cursor: 'not-allowed' } : {}}
                data-testid={`${props['data-testid']}-${TestIds.container}`}
                {...flexProps(props)}
                {...boxProps(props)}
            >
                <Box padding={[6, 12, 0, 0]}>
                    <ColorDrop
                        color={props.emptyIsTransparent && isTransparent(props.value) ? 'transparent' : props.value}
                        data-testid={`${props['data-testid']}-${TestIds.colorDrop}`}
                        onClick={() => {
                            setShow(!show);
                        }}
                    />
                </Box>
                <Box grow={1} direction="column">
                    <TextField
                        {...props}
                        extractRef={ref => {
                            inputRef.current = ref;
                            if (ref && props.extractRef !== undefined) {
                                props.extractRef(ref);
                            }
                        }}
                        placeholder={
                            props.emptyIsTransparent && isTransparent(props.value)
                                ? props.transparentPlaceholder
                                : undefined
                        }
                        value={stripHashtag(props.value)}
                        prefix="#"
                        onChange={value => {
                            if (value.length < 7) {
                                const negatedValues = `[^0-9a-f]`;
                                const stripped = value.replace(new RegExp(negatedValues, 'gi'), '');

                                props.onChange(
                                    props.emptyIsTransparent && (stripped === '#' || stripped === '')
                                        ? 'transparent'
                                        : `#${stripped}`,
                                );
                            }
                        }}
                        onFocus={() => {
                            setShow(true);
                        }}
                    />
                </Box>
                <Box width="38px">
                    {props.value !== props.initialValue && (
                        <IconButton
                            data-testid={`${props['data-testid']}-${TestIds.reset}`}
                            icon={<UndoIcon />}
                            title={props.resetButtonTitle}
                            onClick={() => {
                                props.onChange(props.initialValue);
                            }}
                        />
                    )}
                </Box>
            </Box>
        </ColorPicker>
    );
};

export default ColorField;
