import { Component } from 'react';
import { PopperChildrenProps } from 'react-popper';
declare type PlacementType = PopperChildrenProps['placement'];
declare type PropsType = {
    placement?: PlacementType;
    isOpen?: boolean;
    fixed?: boolean;
    offset?: number;
    distance?: number;
    stretch?: boolean;
    triggerOn?: 'click' | 'hover';
    onClickOutside?(): void;
    renderContent(): JSX.Element | string;
};
declare type StateType = {
    isOpen: boolean;
};
declare class Popover extends Component<PropsType, StateType> {
    private anchorRef;
    private popoverRef;
    constructor(props: PropsType);
    static getDerivedStateFromProps(props: PropsType, state: StateType): Partial<StateType>;
    private mapOffset;
    private togglePopover;
    private handleClickOutside;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Popover;
export { PropsType, PlacementType };
