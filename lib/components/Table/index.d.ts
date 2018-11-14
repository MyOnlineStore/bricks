import { ReactNode, Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
declare type PropsType = {
    rows: Array<RowType>;
    headers?: Array<ReactNode>;
    alignments?: Array<'left' | 'center' | 'right'>;
    draggable?: boolean;
    selectable?: boolean;
    onDragEnd?(result: DropResult): void;
    onSelection?(rows: Array<RowType>): void;
};
declare type RowType = {
    id: string;
    checked?: boolean;
    cells: Array<ReactNode>;
};
declare type StateType = {
    selectionStart: number;
    toggleAction: boolean;
};
declare const mapAlignment: (alignment: "center" | "right" | "left") => "flex-start" | "flex-end" | "center";
declare class Table extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    private dragEndHandler;
    private handleCheck;
    private handleHeaderCheck;
    private getHeaderState;
    render(): JSX.Element;
}
export default Table;
export { PropsType, DragDropContext, mapAlignment };
