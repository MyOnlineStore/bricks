import React from 'react';
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
declare const _default: React.ComponentClass<Pick<PropsType<OptionBaseType>, "placeholder" | "onChange" | "disabled" | "value" | "options" | "emptyText" | "renderOption" | "renderSelected"> & {
    theme?: {} | undefined;
}, any>;
export default _default;
export { PropsType, StateType, OptionBaseType, OptionStateType };
