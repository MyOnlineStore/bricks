import React, { Component, MouseEvent } from 'react';
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
    label?: string;
    id?: string;
    // tslint:disable-next-line:no-any
    onChange(change: { checked: boolean | 'indeterminate'; event: MouseEvent<any> }): void;
};

class Checkbox extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);
        this.state = {
            focus: false,
        };
    }

    // tslint:disable-next-line:no-any
    public changeHandler = (event: MouseEvent<any>): void => {
        this.props.onChange({
            checked: !(this.props.checked === true),
            event,
        });
    };

    public toggleFocus = (): void => {
        this.setState({ focus: !this.state.focus });
    };

    public render(): JSX.Element {
        const htmlChecked = this.props.checked === true;

        return (
            <Box>
                <Box shrink={0}>
                    <StyledCheckboxSkin
                        checkedState={this.props.checked}
                        onClick={(event): void => this.changeHandler(event)}
                        elementFocus={this.state.focus}
                        disabled={this.props.disabled}
                        error={this.props.error}
                    >
                        <Box justifyContent="center" alignItems="center" height="100%">
                            {this.props.checked === true && <Icon size="small" color="#fff" icon="checkmark" />}
                            {this.props.checked === 'indeterminate' && <Icon size="small" color="#fff" icon="minus" />}
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
                {this.props.label !== undefined && (
                    <Box margin={[-3, 0, 0, 12]}>
                        <Text>
                            <label onClick={this.changeHandler} htmlFor={this.props.name}>
                                {this.props.label}
                            </label>
                        </Text>
                    </Box>
                )}
            </Box>
        );
    }
}

export default Checkbox;
export { PropsType, StateType };
