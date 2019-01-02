import { Component } from 'react';
declare type StateType = {
    focus: boolean;
};
declare type PropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
    value: string;
    name: string;
    id?: string;
    label: string;
    onChange(change: {
        checked: boolean;
        value: string;
    }): void;
};
declare class RadioButton extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    toggleFocus: () => void;
    handleChange: () => void;
    render(): JSX.Element;
}
export default RadioButton;
export { PropsType, StateType };
