import React, { Component } from 'react';
import Icon from '../Icon';
import { StyledCheckbox, StyledCheckboxSkin } from './style';
import Box from '../Box';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean | 'indeterminate';
    value: string;
    name: string;
    onChange(change: { checked: boolean | 'indeterminate' }): void;
    onMount?(): void;
    onUnmount?(): void;
};

class Checkbox extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            focus: false,
        };
    }

    public componentDidMount(): void {
        if (this.props.onMount !== undefined) {
            this.props.onMount();
        }
    }

    public componentWillUnmount(): void {
        if (this.props.onUnmount !== undefined) this.props.onUnmount();
    }

    public changeHandler = (): void => {
        this.props.onChange({
            checked: !(this.props.checked === true),
        });
    };

    public toggleFocus = (): void => {
        this.setState({ focus: !this.state.focus });
    };

    public render(): JSX.Element {
        const htmlChecked = this.props.checked === true;

        return (
            <StyledCheckboxSkin
                checkedState={this.props.checked}
                onClick={this.changeHandler}
                elementFocus={this.state.focus}
            >
                <Box justifyContent="center" alignItems="center" height="100%">
                    {this.props.checked === true && <Icon size="small" color="#fff" icon="checkmark" />}
                    {this.props.checked === 'indeterminate' && <Icon size="small" color="#fff" icon="minus" />}
                </Box>
                <StyledCheckbox
                    onFocus={this.toggleFocus}
                    onBlur={this.toggleFocus}
                    name={this.props.name}
                    value={this.props.value}
                    checked={htmlChecked}
                    type="checkbox"
                    onChange={this.changeHandler}
                />
            </StyledCheckboxSkin>
        );
    }
}

export default Checkbox;
export { PropsType, StateType };
