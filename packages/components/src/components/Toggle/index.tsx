import React, { Component } from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Text from '../Text';
import StyledToggle, { StyledToggleSkin } from './style';

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
};

class Toggle extends Component<PropsType, StateType> {
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
            <Box onClick={this.handleChange} alignItems="center">
                <Box margin={trbl(0, 12, 0, 0)}>
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
                <Box inline direction="row" align-items="center">
                    <Text variant={this.props.disabled ? 'info' : undefined}>
                        {/* force a line-height if there is no label for proper vertical alignment */}
                        {this.props.label ? this.props.label : '\u00A0'}
                    </Text>
                </Box>
            </Box>
        );
    }
}

export default Toggle;
export { PropsType, StateType };
