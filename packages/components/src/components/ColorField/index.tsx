/// <reference path="../../_declarations/global.d.ts" />
import TextField, { PropsType as TextFieldPropsType } from '../TextField';
import React, { FC, useRef, useState } from 'react';
import ColorDrop from '../ColorDrop';
import Box from '../Box';

type OmittedKeys = 'prefix';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    initialValue: string;
};

const ColorField: FC<PropsType> = props => {
    const [showResetButton, setShowResetButton] = useState(props.value !== props.initialValue);
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
                    onChange={(value, event) => {
                        props.onChange(`#${value}`, event);
                    }}
                />
            </Box>
        </Box>
    );
};

export default ColorField;
