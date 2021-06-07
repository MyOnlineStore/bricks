/// <reference path="../../_declarations/global.d.ts" />
import TextField, { PropsType as TextFieldPropsType } from '../TextField';
import React, { FC, useRef } from 'react';
import ColorDrop from '../ColorDrop';
import Box from '../Box';
import { UndoIcon } from '@myonlinestore/bricks-assets';
import IconButton from '../IconButton';

type OmittedKeys = 'prefix';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    emptyIsTransparent?: boolean;
    transparentPlaceholder: string;
    initialValue: string;
    resetButtonTitle: string;
    /* returns either a full hexcode with hashtag ór `transparent` */
    onChange(value: string): void;
};

export enum TestIds {
    colorInputContainer = 'color-input-container',
    colorInputField = 'color-input-field',
    colorDrop = 'color-drop',
    resetButton = 'reset-button',
}

const ColorField: FC<PropsType> = props => {
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

    return (
        <Box
            alignItems="flex-start"
            style={props.disabled ? { cursor: 'not-allowed' } : {}}
            data-testid={TestIds.colorInputContainer}
        >
            <Box padding={[6, 12, 0, 0]}>
                <ColorDrop
                    color={props.emptyIsTransparent && isTransparent(props.value) ? 'transparent' : props.value}
                    data-testid={TestIds.colorDrop}
                />
            </Box>
            <Box grow={1} direction="column">
                <TextField
                    {...props}
                    data-testid={TestIds.colorInputField}
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
                />
            </Box>
            <Box width="38px">
                {props.value !== props.initialValue && (
                    <IconButton
                        data-testid={TestIds.resetButton}
                        icon={<UndoIcon />}
                        title={props.resetButtonTitle}
                        onClick={() => {
                            props.onChange(props.initialValue);
                        }}
                    />
                )}
            </Box>
        </Box>
    );
};

export default ColorField;
