import React, {Component} from 'react';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import lockedIcon from '../../assets/icons/locked.svg';
import StyledRadioButton, {StyledRadioButtonSkin, StyledRadioWrapper} from './style';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
    value: string;
    name: string;
    id?: string;
    label: string;
    'data-testid'?: string;
    onChange(change: {checked: boolean; value: string}): void;
};

class RadioButton extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            focus: false,
        };
    }

    public toggleFocus = (): void => {
        this.setState({focus: !this.state.focus});
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
                <Box margin={this.props.disabled ? trbl(0, 6, 0, 0) : trbl(0, 12, 0, 0)}>
                    <StyledRadioButtonSkin
                        elementFocus={this.state.focus}
                        checked={this.props.checked}
                        disabled={this.props.disabled}
                        error={this.props.error}
                    >
                        <StyledRadioButton
                            onFocus={this.toggleFocus}
                            onBlur={this.toggleFocus}
                            onChange={this.handleChange}
                            checked={this.props.checked}
                            type="radio"
                            name={this.props.name}
                            value={this.props.value}
                            id={this.props.id}
                            aria-labelledby={this.props.name}
                            data-testid={this.props['data-testid']}
                        />
                    </StyledRadioButtonSkin>
                </Box>
                <Text severity={this.props.disabled ? 'info' : undefined}>
                    <Box inline direction="row" align-items="center">
                        {this.props.disabled && (
                            <Box inline margin={trbl(0, 12, 0, 0)}>
                                <Icon size="medium" icon={lockedIcon} />{' '}
                            </Box>
                        )}
                        <label id={this.props.name} htmlFor={this.props.name}>
                            {this.props.label}
                        </label>
                    </Box>
                </Text>
            </StyledRadioWrapper>
        );
    }
}

export default RadioButton;
export {PropsType, StateType};
