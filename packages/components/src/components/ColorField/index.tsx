/// <reference path="../../_declarations/global.d.ts" />
import TextField, { PropsType as TextFieldPropsType } from '../TextField';
import React, { FC, useState, useRef } from 'react';
import ColorDrop from '../ColorDrop';
import Box from '../Box';

type OmittedKeys = 'onChange' | 'value' | 'prefix';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: string;
    onChange(value: string): void;
};

const ColorField: FC<PropsType> = props => {
    const [displayValue, setDisplayValue] = useState(props.value);
    const inputRef = useRef<HTMLInputElement>();

    return (
        <Box alignItems="center">
            <ColorDrop color={`#${displayValue}`} style={{ marginRight: '12px' }} />
            <TextField
                {...props}
                extractRef={ref => {
                    inputRef.current = ref;
                    if (ref && props.extractRef !== undefined) props.extractRef(ref);
                }}
                value={displayValue}
                prefix="#"
                onChange={value => {
                    setDisplayValue(value);
                    props.onChange(value);
                }}
            />
        </Box>
    );
};

export default ColorField;
