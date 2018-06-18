import React, { Component } from 'react';
import trbl from '../../utility/trbl';
import Spacer from '../Spacer';
import StyledToggle, { StyledToggleSkin, StyledToggleWrapper } from './style';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
    value: string;
    label: string;
    name: string;
    id?: string;
    changeHandler(change: { checked: boolean }): void;
};

class Toggle extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            focus: false,
        };
    }

    public handleChange = (): void => {
        this.props.changeHandler({
            checked: this.props.disabled ? this.props.checked : !this.props.checked,
        });
    };

    public toggleFocus = (): void => {
        this.setState({ focus: !this.state.focus });
    };

    public render(): JSX.Element {
        return (
            <StyledToggleWrapper onClick={this.handleChange}>
                <Spacer offset={trbl(0, 9, 0, 0)}>
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
                </Spacer>
            </StyledToggleWrapper>
        );
    }
}

export default Toggle;
export { PropsType, StateType };
