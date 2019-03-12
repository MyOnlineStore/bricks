import React, { Component } from 'react';
import InputRange, { Range as RangeType } from 'react-input-range';
import StyledWrapper from './style';
import trbl from '../../utility/trbl';
import Box from '../Box';
import TextField from '../TextField';
import memoize from 'memoize-one';

type PropsType = {
    value: RangeType;
    minLimit: number;
    maxLimit: number;
    label?: string;
    disabled?: boolean;
    onChange?(value: RangeType): void;
};

type StateType = {
    inputValues: RangeType;
    inputFocus: boolean;
    hasError: { min: boolean; max: boolean };
};

const isWithinRange = (min: number, max: number, value: number): boolean => {
    return value <= max && value >= min;
};

const floorMinValue = memoize(Math.floor);
const ceilMaxValue = memoize(Math.ceil);

class Range extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);
        this.state = {
            inputValues: {
                min: floorMinValue(this.props.value.min),
                max: ceilMaxValue(this.props.value.max),
            },
            inputFocus: false,
            hasError: { min: false, max: false },
        };
    }

    private onChangeMinimumValue = (min: number): void => {
        const { inputValues, hasError } = this.state;

        this.setState({ inputValues: { ...inputValues, min } });

        if (isWithinRange(this.props.minLimit, this.getMaxLowValue(), min)) {
            this.setState({ hasError: { ...hasError, min: false } });
            if (this.props.onChange !== undefined) this.props.onChange({ ...inputValues, min });
        } else {
            this.setState({ hasError: { ...hasError, min: true } });
        }
    };

    private onChangeMaximumValue = (max: number): void => {
        const { inputValues, hasError } = this.state;

        this.setState({ inputValues: { ...inputValues, max } });

        if (isWithinRange(this.getMinHighValue(), this.props.maxLimit, max)) {
            this.setState({ hasError: { ...hasError, max: false } });
            if (this.props.onChange !== undefined) this.props.onChange({ ...inputValues, max });
        } else {
            this.setState({ hasError: { ...hasError, max: true } });
        }
    };

    private onBlurMinimumValue = (): void => {
        const { min, max } = this.state.inputValues;
        const newValues = (): RangeType => {
            if (min < this.props.minLimit) return { ...this.state.inputValues, min: this.props.minLimit };
            else if (min >= max) return { ...this.state.inputValues, min: this.getMaxLowValue() };

            return this.state.inputValues;
        };

        this.setState({
            inputValues: newValues(),
            inputFocus: false,
            hasError: { ...this.state.hasError, min: false },
        });

        if (this.props.onChange !== undefined) this.props.onChange(newValues());
    };

    private onBlurMaximumValue = (): void => {
        const inputValues = (): RangeType => {
            if (this.state.inputValues.max >= this.props.maxLimit)
                return { ...this.state.inputValues, max: this.props.maxLimit };
            else if (this.state.inputValues.max <= this.state.inputValues.min)
                return { ...this.state.inputValues, max: this.getMinHighValue() };

            return this.state.inputValues;
        };

        this.setState({
            inputValues: inputValues(),
            inputFocus: false,
            hasError: { ...this.state.hasError, max: false },
        });
        if (this.props.onChange !== undefined) this.props.onChange(inputValues());
    };

    private getMaxLowValue(): number {
        return this.state.inputValues.max - 1;
    }

    private getMinHighValue(): number {
        return this.state.inputValues.min + 1;
    }

    public componentDidUpdate(prevProps: PropsType): void {
        if (prevProps.value !== this.props.value) {
            this.setState({
                inputValues: { min: floorMinValue(this.props.value.min), max: ceilMaxValue(this.props.value.max) },
            });
        }
    }

    public render(): JSX.Element {
        return (
            <Box direction="column">
                <Box justifyContent="space-between">
                    <Box wrap justifyContent="space-between" width="100%">
                        <Box width="136px" shrink={0} padding={trbl(0, 0, 12, 0)}>
                            <TextField.Number
                                feedback={this.state.hasError.min ? { severity: 'error', message: '' } : undefined}
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
                        <Box width="136px" shrink={0} padding={trbl(0, 0, 12, 0)}>
                            <TextField.Number
                                onBlur={this.onBlurMaximumValue}
                                suffix={this.props.label}
                                value={this.state.inputValues.max}
                                disabled={this.props.disabled}
                                name="maximum"
                                feedback={this.state.hasError.max ? { severity: 'error', message: '' } : undefined}
                                onChange={(value): void => {
                                    this.setState({ inputFocus: true });
                                    this.onChangeMaximumValue(value);
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <StyledWrapper
                    focus={this.state.inputFocus}
                    disabled={this.props.disabled ? this.props.disabled : false}
                >
                    <InputRange
                        value={{ min: floorMinValue(this.props.value.min), max: ceilMaxValue(this.props.value.max) }}
                        disabled={this.props.disabled}
                        onChange={(values): void => {
                            this.setState({
                                inputFocus: false,
                                inputValues: values as RangeType,
                            });
                            if (this.props.onChange !== undefined) this.props.onChange(values as RangeType);
                        }}
                        minValue={Math.floor(this.props.minLimit)}
                        maxValue={Math.ceil(this.props.maxLimit)}
                    />
                </StyledWrapper>
            </Box>
        );
    }
}

export default Range;
export { PropsType };
