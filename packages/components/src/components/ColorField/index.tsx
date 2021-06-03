/// <reference path="../../_declarations/global.d.ts" />
import TextField, { PropsType as TextFieldPropsType } from '../TextField';
import React, { FC, useRef } from 'react';
import ColorDrop from '../ColorDrop';
import Box from '../Box';
import { UndoIcon } from '@myonlinestore/bricks-assets';
import IconButton from '../IconButton';

type OmittedKeys = 'prefix';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    initialValue: string;
    resetButtonTitle: string;
    onChange(value: string): void;
};

const ColorField: FC<PropsType> = props => {
    const inputRef = useRef<HTMLInputElement>();

    // Since the ColorField uses a prefix for the # character, it needs to strip the # from the value when
    // passing it to the TextField, and add it in the onChange call.
    const stripHashtag = (hexcode: string) => {
        return hexcode.replace('#', '');
    };

    const validHexcode = (hexcode: string) => {
        return false;
    };

    return (
        <Box alignItems="flex-start">
            <Box padding={[6, 12, 0, 0]}>
                <ColorDrop color={props.value} />
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
                    value={stripHashtag(props.value)}
                    prefix="#"
                    feedback={
                        !validHexcode(props.value)
                            ? {
                                  severity: 'error',
                                  message: "Da's nie goed jong",
                              }
                            : undefined
                    }
                    onChange={value => {
                        if (value.length < 7) {
                            const negatedValues = `[^0-9a-f]`;
                            const stripped = value.replace(new RegExp(negatedValues, 'gi'), '');

                            props.onChange(`#${stripped}`);
                        }
                    }}
                />
            </Box>
            <Box width="38px">
                {props.value !== props.initialValue && (
                    <IconButton
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
