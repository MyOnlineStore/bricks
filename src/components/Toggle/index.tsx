import React, { Component } from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import StyledToggle, { StyledToggleSkin, StyledToggleWrapper } from './style';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
    value: string;
    label?: string;
    name: string;
    id?: string;
    onChange(change: { checked: boolean }): void;
} & Partial<DefaultPropsType>;

type DefaultPropsType = {
    disabledIcon: boolean;
};

class Toggle extends Component<PropsType, StateType> {
    public static defaultProps: DefaultPropsType = {
        disabledIcon: true,
    };

    public constructor(props: PropsType) {
        super(props);

        this.state = {
            focus: false,
        };
    }

    public handleChange = (): void => {
        if (!this.props.disabled) {
            this.props.onChange({
                checked: !this.props.checked,
            });
        }
    };

    public toggleFocus = (): void => {
        this.setState({ focus: !this.state.focus });
    };

    public render(): JSX.Element {
        return (
            <StyledToggleWrapper onClick={this.handleChange}>
                <Box>
                    <Box margin={trbl(12, 9, 0, 0)}>
                        <StyledToggleSkin
                            elementFocus={this.state.focus}
                            disabled={this.props.disabled}
                            checked={this.props.checked}
                            error={this.props.error ? this.props.error : false}
                        >
                            <StyledToggle
                                id={this.props.id}
                                onFocus={this.toggleFocus}
                                onBlur={this.toggleFocus}
                                name={this.props.name}
                                value={this.props.value}
                                checked={this.props.checked}
                                disabled={this.props.disabled ? this.props.disabled : false}
                                error={this.props.error ? this.props.error : false}
                                type="checkbox"
                                onChange={this.handleChange}
                            />
                        </StyledToggleSkin>
                    </Box>
                    <Box margin={trbl(9, 0, 0, 0)}>
                        <Text severity={this.props.disabled ? 'info' : undefined}>
                            {this.props.disabledIcon && this.props.disabled && <Icon size="medium" icon="locked" />}{' '}
                            {this.props.label}
                        </Text>
                    </Box>
                </Box>
            </StyledToggleWrapper>
        );
    }
}

export default Toggle;
export { PropsType, DefaultPropsType, StateType };
