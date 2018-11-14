import { Component, ReactNode, MouseEvent } from 'react';
declare type PropsType = {
    alignments: Array<'left' | 'center' | 'right'>;
    cells: Array<ReactNode>;
    draggable: boolean;
    checked: boolean;
    selectable: boolean;
    selected?: boolean;
    index: number;
    identifier: string;
    onCheck(event: MouseEvent<HTMLDivElement>, toggleAction: boolean): void;
};
declare type StateType = {
    hasFocus: boolean;
    hasHover: boolean;
};
declare class Row extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    handleFocus: () => void;
    handleBlur: () => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    render(): JSX.Element;
}
export default Row;
export { PropsType, StateType };
