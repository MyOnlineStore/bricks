import React, { ReactNode, Component } from 'react';
import InputRange, { Range as RangeType } from 'react-input-range';
import StyledWrapper from './style';
import 'react-input-range/lib/css/index.css';
import trbl from '../../utility/trbl';
import Box from '../Box';
import TextField from '../TextField';

type PropsType = {
    value: RangeType;
    label?: string;
    disabled?: boolean;
};

type StateType = {
    value: RangeType;
};

class Range extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            value: props.value,
        };
    }

    public render(): JSX.Element {
        return (
            <Box padding={trbl(12)} direction="column">
                <Box justifyContent="space-between">
                    <Box width="100px">
                        <TextField
                            value={`${this.state.value.min}`}
                            suffix={this.props.label}
                            disabled={this.props.disabled}
                            name="minimum"
                            onChange={(value): void =>
                                this.setState({
                                    value: { ...this.state.value, min: parseInt(value, 10) },
                                })
                            }
                        />
                    </Box>
                    <Box width="100px">
                        <TextField
                            value={`${this.state.value.max}`}
                            suffix={this.props.label}
                            disabled={this.props.disabled}
                            name="maximum"
                            onChange={(value): void =>
                                this.setState({
                                    value: { ...this.state.value, max: parseInt(value, 10) },
                                })
                            }
                        />
                    </Box>
                </Box>
                <StyledWrapper>
                    <InputRange
                        value={this.state.value}
                        disabled={this.props.disabled}
                        onChange={(value): void => {
                            this.setState({ value: value as RangeType });
                        }}
                    />
                </StyledWrapper>
            </Box>
        );
    }
}

export default Range;
export { PropsType };
