import React, { FC, useState } from 'react';
import InputRange from 'react-input-range';
import StyledWrapper from './style';
import TextField from '../TextField';
import { Box } from '../..';
import memoize from 'memoize-one';

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
    const roundValue = memoize(Math.round.bind(Math));
    const [inputValue, setInputValue] = useState(props.value ? props.value : roundValue(props.value));

    const setValidValue = (value: number) => {
        if (value > props.maxLimit) {
            setInputValue(roundValue(props.maxLimit));
        } else if (value < props.minLimit) {
            setInputValue(roundValue(props.minLimit));
        } else {
            setInputValue(roundValue(value));
        }
        if (props.onChange !== undefined) props.onChange(value);
    };

    return (
        <Box width="100%" justifyContent="center" alignItems="baseline">
            <StyledWrapper grow={1} focus={inputFocus} disabled={props.disabled ? props.disabled : false}>
                <InputRange
                    value={inputValue}
                    disabled={props.disabled}
                    onChange={(value: number) => {
                        if (props.disabled !== true) {
                            setValidValue(value);
                            setInputFocus(false);
                        }
                    }}
                    minValue={Math.floor(props.minLimit)}
                    maxValue={Math.ceil(props.maxLimit)}
                    aria-label={props.label ? props.label : 'slider'}
                />
            </StyledWrapper>
            <Box width="100px" shrink={0} padding={[0, 0, 0, 18]}>
                <TextField.Number
                    value={inputValue}
                    disabled={props.disabled}
                    name="slider-value"
                    onChange={(value: number) => {
                        if (props.disabled !== true) {
                            setValidValue(value);
                        }
                    }}
                />
            </Box>
        </Box>
    );
};

export default Slider;
