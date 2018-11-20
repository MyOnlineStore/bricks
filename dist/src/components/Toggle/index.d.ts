import { Component } from 'react';
declare type StateType = {
    focus: boolean;
};
declare type PropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
    value: string;
    label?: string;
    name: string;
    id?: string;
    onChange(change: {
        checked: boolean;
    }): void;
} & Partial<DefaultPropsType>;
declare type DefaultPropsType = {
    disabledIcon: boolean;
};
declare class Toggle extends Component<PropsType, StateType> {
    static defaultProps: DefaultPropsType;
    constructor(props: PropsType);
    handleChange: () => void;
    toggleFocus: () => void;
    render(): JSX.Element;
}
export default Toggle;
export { PropsType, DefaultPropsType, StateType };
