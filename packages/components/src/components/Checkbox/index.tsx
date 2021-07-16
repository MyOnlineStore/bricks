import React, { ReactNode, Component, MouseEvent } from 'react';
import Icon from '../Icon';
import { StyledCheckbox, StyledCheckboxSkin } from './style';
import Box from '../Box';
import Text from '../Text';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean | 'indeterminate';
    disabled?: boolean;
    error?: boolean;
    value: string;
    name: string;
    label?: ReactNode;
    id?: string;
    'data-testid'?: string;
    onChange(change: { checked: boolean | 'indeterminate'; event: MouseEvent<HTMLDivElement> }): void;
};

class Checkbox extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);
        this.state = {
            focus: false,
        };
    }

    private changeHandler = (event: MouseEvent<HTMLDivElement>): void => {
        if (!this.props.disabled) {
            this.props.onChange({
                checked: !(this.props.checked === true),
                event,
            });
        }
    };

    public toggleFocus = (): void => {
        this.setState({ focus: !this.state.focus });
    };

    public render(): JSX.Element {
        const htmlChecked = this.props.checked === true;

        return (
            <Box
                style={{ cursor: 'pointer' }}
                onClick={this.changeHandler}
                data-testid={this.props['data-testid']}
                alignItems="flex-start"
                grow={1}
            >
                <Box margin={[3, this.props.label ? 12 : 0, 0, 0]}>
                    <StyledCheckboxSkin
                        checkedState={this.props.checked}
                        elementFocus={this.state.focus}
                        disabled={this.props.disabled}
                        error={this.props.error}
                    >
                        <Box justifyContent="center" alignItems="center" height="100%">
                            {this.props.checked === true && <Icon size="small" color="#fff" icon="checkmark-small" />}
                            {this.props.checked === 'indeterminate' && (
                                <Icon size="small" color="#fff" icon="partial-checkmark" />
                            )}
                        </Box>
                        <StyledCheckbox
                            onFocus={this.toggleFocus}
                            onBlur={this.toggleFocus}
                            readOnly
                            name={this.props.name}
                            value={this.props.value}
                            id={this.props.id}
                            checked={htmlChecked}
                            type="checkbox"
                        />
                    </StyledCheckboxSkin>
                </Box>
                <Box inline direction="row" align-items="center">
                    <Text>
                        {/* force a line-height if there is no label for proper vertical alignment */}
                        <label htmlFor={this.props.name}>{this.props.label ? this.props.label : '\u00A0'}</label>
                    </Text>
                </Box>
            </Box>
        );
    }
}

export default Checkbox;
export { PropsType, StateType };
