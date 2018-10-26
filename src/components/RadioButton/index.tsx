import React, { Component } from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Text from '../Text';
import StyledRadioButton, { StyledRadioButtonSkin, StyledRadioWrapper } from './style';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean;
    disabled?: boolean;
    value: string;
    name: string;
    id?: string;
    label: string;
    onChange(change: { checked: boolean; value: string }): void;
};

class RadioButton extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            focus: false,
        };
    }

    public toggleFocus = (): void => {
        this.setState({ focus: !this.state.focus });
    };

    public handleChange = (): void => {
        this.props.onChange({
            checked: !this.props.checked,
            value: this.props.value,
        });
    };

    public render(): JSX.Element {
        return (
            <StyledRadioWrapper onClick={this.handleChange}>
                <Box margin={trbl(0, 9, 0, 0)}>
                    <StyledRadioButtonSkin
                        elementFocus={this.state.focus}
                        checked={this.props.checked}
                        disabled={this.props.disabled}
                    >
                        <StyledRadioButton
                            onFocus={this.toggleFocus}
                            onBlur={this.toggleFocus}
                            onChange={this.handleChange}
                            checked={this.props.checked}
                            type="radio"
                            name={this.props.name}
                            value={this.props.value}
                            disabled={this.props.disabled}
                            id={this.props.id}
                        />
                    </StyledRadioButtonSkin>
                </Box>
                <Text>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                </Text>
            </StyledRadioWrapper>
        );
    }
}

export default RadioButton;
export { PropsType, StateType };
