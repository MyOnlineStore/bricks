import { Component, MouseEvent } from 'react';
import { ColumnType, BaseRowType } from '..';
declare type PropsType = {
    columns: {
        [key: string]: ColumnType<string | number | boolean | undefined, any>;
    };
    row: BaseRowType;
    draggable: boolean;
    selected: boolean;
    selectable: boolean;
    index: number;
    onSelection(event: MouseEvent<HTMLDivElement>, toggleAction: boolean): void;
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
