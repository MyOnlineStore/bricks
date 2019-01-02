import { Component } from 'react';
import { PopperChildrenProps } from 'react-popper';
import { PropsType as ButtonPropsType } from '../Button';
declare type OmittedKeys = 'action' | 'href' | 'flat' | 'compact' | 'title';
declare type PlacementType = PopperChildrenProps['placement'];
declare type OptionsType = {
    label: string;
    description: string;
    default?: boolean;
    action(): void;
};
declare type PropsType = Pick<ButtonPropsType, Exclude<keyof ButtonPropsType, OmittedKeys>> & {
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
export default MultiButton;
export { PropsType, PlacementType };
