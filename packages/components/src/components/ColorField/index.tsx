/// <reference path="../../_declarations/global.d.ts" />
import TextField, { PropsType as TextFieldPropsType } from '../TextField';
import React, { FC, useState, useRef } from 'react';

type OmittedKeys = 'onChange' | 'value' | 'prefix';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: string;
    onChange(value: string): void;
};

const ColorField: FC<PropsType> = props => {
    const [displayValue, setDisplayValue] = useState(props.value);
    const inputRef = useRef<HTMLInputElement>();

    return (
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
    );
};

export default ColorField;
