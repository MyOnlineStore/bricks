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

    return (
        <Box alignItems="center">
            <Box margin={[0, 12, 0, 0]}>
                <ColorDrop color={props.value} />
            </Box>
            <Box grow={1}>
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
                    onChange={value => {
                        props.onChange(`#${value}`);
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
