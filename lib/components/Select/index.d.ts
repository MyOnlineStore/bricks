/// <reference types="styled-components" />
import React, { Component } from 'react';
import ThemeType from '../../types/ThemeType';
declare type OptionBaseType = {
    value: string;
    label: string;
};
declare type OptionStateType = {
    isSelected: boolean;
};
declare type StateType = {
    input: string;
    hasFocus: boolean;
    isOpen: boolean;
    optionPointer: number;
    inputHeight: number | undefined;
};
declare type PropsType<GenericOptionType extends OptionBaseType> = {
    theme: ThemeType;
    placeholder?: string;
    value: string;
    options: Array<GenericOptionType>;
    emptyText: string;
    disabled?: boolean;
    onChange(value: string): void;
    renderOption?(option: GenericOptionType, state: OptionStateType): JSX.Element;
    renderSelected?(option: GenericOptionType): JSX.Element;
};
declare class Select<GenericOptionType extends OptionBaseType> extends Component<PropsType<GenericOptionType>, StateType> {
    private readonly inputRef;
    private inputWrapperRef;
    private wrapperRef;
    private windowRef;
    constructor(props: PropsType<GenericOptionType>);
    private cycleUp;
    private cycleTo;
    private cycleDown;
    private close;
    private open;
    private filterOptions;
    private handleClickOutside;
    private handleChange;
    private handleChangeEvent;
    private handleInput;
    private handleFocus;
    private handleBlur;
    private handleKeyPress;
    componentDidUpdate(_: PropsType<GenericOptionType>, prevState: StateType): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<PropsType<OptionBaseType> & React.RefAttributes<Select<OptionBaseType>>, "key" | "ref" | "placeholder" | "onChange" | "disabled" | "value" | "options" | "emptyText" | "renderOption" | "renderSelected"> & {
    theme?: any;
}>;
export default _default;
export { PropsType, StateType, OptionBaseType, OptionStateType };
