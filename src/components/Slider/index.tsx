import React, { FC, useState } from 'react';
import InputRange from 'react-input-range';
import StyledWrapper from './style';
import TextField from '../TextField';
import { Box } from '../..';

type PropsType = {
    minLimit: number;
    maxLimit: number;
    disabled?: boolean;
    value?: number;
    label?: string;
    onChange?(value: number): void;
};

const Slider: FC<PropsType> = props => {
    const [inputFocus, setInputFocus] = useState(false);
    const [inputValue, setInputValue] = useState(props.value ? props.value : props.minLimit);

    const isWithinRange = (min: number, max: number, value: number): boolean => value <= max && value >= min;

    const onBlurValue = () => {
        if (inputValue > props.maxLimit) {
            setInputValue(props.maxLimit);
        } else if (inputValue < props.minLimit) {
            setInputValue(props.minLimit);
        }
    };

    return (
        <Box width="100%" justifyContent="center" alignItems="baseline">
            <StyledWrapper grow={1} focus={inputFocus} disabled={props.disabled ? props.disabled : false}>
                <InputRange
                    value={inputValue}
                    disabled={props.disabled}
                    onChange={(value: number) => {
                        setInputFocus(false);
                        setInputValue(value);
                        if (props.onChange !== undefined) props.onChange(value);
                    }}
                    minValue={Math.floor(props.minLimit)}
                    maxValue={Math.ceil(props.maxLimit)}
                    aria-label={props.label ? props.label : 'slider'}
                />
            </StyledWrapper>
            <Box width="100px" shrink={0} padding={[0, 0, 0, 18]}>
                <TextField.Number
                    value={inputValue}
                    name="slider-value"
                    onBlur={onBlurValue}
                    onChange={setInputValue}
                    feedback={
                        !isWithinRange(props.minLimit, props.maxLimit, inputValue)
                            ? { severity: 'error', message: '' }
                            : undefined
                    }
                />
            </Box>
        </Box>
    );
};

export default Slider;
