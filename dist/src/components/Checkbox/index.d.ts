import React, { Component, MouseEvent } from 'react';
declare type StateType = {
    focus: boolean;
};
declare type PropsType = {
    checked: boolean | 'indeterminate';
    disabled?: boolean;
    error?: boolean;
    value: string;
    name: string;
    id?: string;
    onChange(change: {
        checked: boolean | 'indeterminate';
        event: MouseEvent<HTMLDivElement>;
    }): void;
};
declare class Checkbox extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    changeHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
    toggleFocus: () => void;
    render(): JSX.Element;
}
export default Checkbox;
export { PropsType, StateType };
