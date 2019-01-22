/// <reference types="styled-components" />
import React, { Component } from 'react';
import { PopperChildrenProps } from 'react-popper';
import ThemeType from '../../types/ThemeType';
import { PropsType as ButtonPropsType } from '../Button';
declare type OmittedKeys = 'onClick' | 'href' | 'compact' | 'title';
declare type PlacementType = PopperChildrenProps['placement'];
declare type OptionsType = {
    label: string;
    description: string;
    default?: boolean;
    onClick(): void;
};
declare type PropsType = Pick<ButtonPropsType, Exclude<keyof ButtonPropsType, OmittedKeys>> & {
    theme: ThemeType;
    placement?: PlacementType;
    options: Array<OptionsType>;
    offset?: number;
    distance?: number;
};
declare type StateType = {
    isOpen: boolean;
    selectedOption: OptionsType;
    selectedIndex: number;
};
declare class MultiButton extends Component<PropsType, StateType> {
    private windowRef;
    private buttonRef;
    private defaultIndex;
    private defaultOption;
    constructor(props: PropsType);
    private open;
    private close;
    private mapOffset;
    private renderButtons;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: MouseEvent) => void;
    handleSelect: (option: OptionsType, index: number) => void;
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<ButtonPropsType, "children" | "icon" | "className" | "id" | "disabled" | "variant" | "target" | "loading"> & {
    theme: ThemeType;
    placement?: "auto" | "bottom" | "left" | "right" | "top" | "auto-start" | "auto-end" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | undefined;
    options: OptionsType[];
    offset?: number | undefined;
    distance?: number | undefined;
} & React.RefAttributes<MultiButton>, "key" | "children" | "icon" | "ref" | "className" | "id" | "disabled" | "variant" | "target" | "loading" | "placement" | "offset" | "distance" | "options"> & {
    theme?: any;
}>;
export default _default;
export { PropsType, PlacementType };
