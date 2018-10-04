import React, { Component } from 'react';
import InputRange, { Range as RangeType } from 'react-input-range';
import StyledWrapper from './style';
import 'react-input-range/lib/css/index.css';
import trbl from '../../utility/trbl';
import Box from '../Box';
import TextField from '../TextField';

type PropsType = {
    value: RangeType;
    minLimit: number;
    maxLimit: number;
    label?: string;
    disabled?: boolean;
    onChange?(value: RangeType): void;
};

type StateType = {
    rangeValues: RangeType;
    inputValues: RangeType;
    inputFocus: boolean;
    error: { min: boolean; max: boolean };
};

class Range extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);
        this.state = {
            rangeValues: props.value,
            inputValues: props.value,
            inputFocus: false,
            error: { min: false, max: false },
        };
    }

    private onChangeMinimumValue = (min: number): void => {
        const { inputValues, error } = this.state;
        this.setState({ inputValues: { ...inputValues, min } });

        if (this.isWithinRange(this.props.minLimit, this.getMaxLowValue(), min)) {
            this.setState({
                rangeValues: { ...inputValues, min },
                error: { ...error, min: false },
            });
            if (this.props.onChange !== undefined) this.props.onChange({ ...inputValues, min });
        } else {
            this.setState({ error: { ...error, min: true } });
        }
    };

    private onChangeMaximumValue = (max: number): void => {
        const { inputValues, error } = this.state;
        this.setState({ inputValues: { ...inputValues, max } });

        if (this.isWithinRange(this.getMinHighValue(), this.props.maxLimit, max)) {
            this.setState({
                rangeValues: { ...inputValues, max },
                error: { ...error, max: false },
            });
            if (this.props.onChange !== undefined) this.props.onChange({ ...inputValues, max });
        } else {
            this.setState({ error: { ...error, max: true } });
        }
    };

    private onBlurMinimumValue = (): void => {
        const { min, max } = this.state.inputValues;
        let newValues;

        if (min < this.props.minLimit) newValues = { ...this.state.inputValues, min: this.props.minLimit };
        else if (min >= max) newValues = { ...this.state.inputValues, min: this.getMaxLowValue() };
        else newValues = { ...this.state.inputValues, min };

        this.setState({
            inputValues: newValues,
            rangeValues: newValues,
            inputFocus: false,
            error: { ...this.state.error, min: false },
        });
        if (this.props.onChange !== undefined) this.props.onChange(newValues);
    };

    private onBlurMaximumValue = (): void => {
        const { min, max } = this.state.inputValues;
        let inputValues;

        if (max >= this.props.maxLimit) inputValues = { ...this.state.inputValues, max: this.props.maxLimit };
        else if (max <= min) inputValues = { ...this.state.inputValues, max: this.getMinHighValue() };
        else inputValues = { ...this.state.inputValues, max };

        this.setState({
            inputValues,
            rangeValues: inputValues,
            inputFocus: false,
            error: { ...this.state.error, max: false },
        });
        if (this.props.onChange !== undefined) this.props.onChange(inputValues);
    };

    private isWithinRange = (min: number, max: number, value: number): boolean => {
        return value <= max && value >= min;
    };

    private getMaxLowValue = (): number => {
        return this.state.inputValues.max - 1;
    };

    private getMinHighValue = (): number => {
        return this.state.inputValues.min + 1;
    };

    public render(): JSX.Element {
        return (
            <Box padding={trbl(12)} direction="column">
                <Box justifyContent="space-between">
                    <Box width="125px">
                        <TextField.Number
                            feedback={this.state.error.min ? { severity: 'error', message: '' } : undefined}
                            value={this.state.inputValues.min}
                            suffix={this.props.label}
                            disabled={this.props.disabled}
                            name="minimum"
                            onBlur={this.onBlurMinimumValue}
                            onChange={(value): void => {
                                this.setState({ inputFocus: true });
                                this.onChangeMinimumValue(value);
                            }}
                        />
                    </Box>
                    <Box width="125px">
                        <TextField.Number
                            onBlur={this.onBlurMaximumValue}
                            suffix={this.props.label}
                            value={this.state.inputValues.max}
                            disabled={this.props.disabled}
                            name="maximum"
                            feedback={this.state.error.max ? { severity: 'error', message: '' } : undefined}
                            onChange={(value): void => {
                                this.setState({ inputFocus: true });
                                this.onChangeMaximumValue(value);
                            }}
                        />
                    </Box>
                </Box>
                <StyledWrapper
                    focus={this.state.inputFocus}
                    disabled={this.props.disabled ? this.props.disabled : false}
                >
                    <InputRange
                        value={this.state.rangeValues}
                        disabled={this.props.disabled}
                        onChange={(values): void => {
                            this.setState({
                                inputFocus: false,
                                rangeValues: values as RangeType,
                                inputValues: values as RangeType,
                            });
                            if (this.props.onChange !== undefined) this.props.onChange(values as RangeType);
                        }}
                        minValue={this.props.minLimit}
                        maxValue={this.props.maxLimit}
                    />
                </StyledWrapper>
            </Box>
        );
    }
}

export default Range;
export { PropsType };
