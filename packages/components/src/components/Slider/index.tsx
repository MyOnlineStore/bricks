import React, { FC, useState } from 'react';
import InputRange from 'react-input-range';
import StyledWrapper from './style';
import TextField from '../TextField';
import Box from '../Box';
import memoize from 'memoize-one';

type PropsType = {
    minLimit: number;
    maxLimit: number;
    disabled?: boolean;
    value?: number;
    label?: string;
    hideInputField?: boolean;
    inputFieldWidth?: string;
    onChange?(value: number): void;
    onFocus?(): void;
    onBlur?(): void;
};

const Slider: FC<PropsType> = props => {
    const [sliderFocus, setSliderFocus] = useState(false);
    const roundValue = memoize(Math.round.bind(Math));
    const [inputValue, setInputValue] = useState(props.value ? props.value : roundValue(props.value));

    const isWithinRange = (min: number, max: number, value: number): boolean => value <= max && value >= min;

    const onBlur = () => {
        if (inputValue > props.maxLimit) {
            setInputValue(props.maxLimit);
        } else if (inputValue < props.minLimit) {
            setInputValue(props.minLimit);
        }

        if (props.onBlur !== undefined) {
            props.onBlur();
        }
    };

    const onFocus = () => {
        if (props.onFocus !== undefined) {
            props.onFocus();
        }
    };

    const onInput = (value: number) => {
        if (props.disabled !== true) {
            setInputValue(roundValue(value));
            if (props.onChange !== undefined) props.onChange(value);
        }
    };

    return (
        <Box width="100%" justifyContent="center" alignItems="baseline">
            <StyledWrapper grow={1} focus={sliderFocus} disabled={props.disabled ? props.disabled : false}>
                <InputRange
                    value={inputValue}
                    disabled={props.disabled}
                    onChange={(value: number) => {
                        if (props.disabled !== true) {
                            setSliderFocus(false);
                            setInputValue(roundValue(value));
                            if (props.onChange !== undefined) props.onChange(value);
                        }
                    }}
                    minValue={Math.floor(props.minLimit)}
                    maxValue={Math.ceil(props.maxLimit)}
                    aria-label={props.label ? props.label : 'slider'}
                />
            </StyledWrapper>
            {props.hideInputField !== true && (
                <Box width={props.inputFieldWidth ? props.inputFieldWidth : '100px'} shrink={0} padding={[0, 0, 0, 18]}>
                    <TextField.Number
                        value={inputValue}
                        disabled={props.disabled}
                        name="slider-value"
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onChange={onInput}
                        feedback={
                            !isWithinRange(props.minLimit, props.maxLimit, inputValue)
                                ? { severity: 'error', message: '' }
                                : undefined
                        }
                    />
                </Box>
            )}
        </Box>
    );
};

export default Slider;
