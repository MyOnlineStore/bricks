import { ReactNode, Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
declare type SortDirectionType = 'ascending' | 'descending' | 'none';
declare type BaseRowType = {
    id: string;
    selected?: boolean;
    [key: string]: string | number | boolean | undefined;
};
declare type ColumnType<GenericCellType, GenericRowType> = {
    order?: number;
    header?: ReactNode;
    align?: 'start' | 'center' | 'end';
    sort?(cellA: GenericCellType, cellB: GenericCellType): number;
    render?(cell: GenericCellType, row: GenericRowType): JSX.Element;
};
declare type PropsType<GenericRowType extends BaseRowType> = {
    rows: Array<GenericRowType>;
    columns: {
        [GenericColumnType in keyof Partial<GenericRowType>]: ColumnType<GenericRowType[GenericColumnType], GenericRowType>;
    };
    onSelection?(rows: Array<GenericRowType>): void;
    onDragEnd?(rows: Array<GenericRowType>, dropResult: DropResult): void;
};
declare type StateType = {
    selectionStart: number;
    toggleAction: boolean;
    sorting?: {
        column: string;
        direction: SortDirectionType;
    };
};
declare class Table<GenericRowType extends BaseRowType> extends Component<PropsType<GenericRowType>, StateType> {
    constructor(props: PropsType<GenericRowType>);
    private dragEndHandler;
    private handleSelection;
    private handleHeaderCheck;
    private getHeaderState;
    private handleSort;
    private sortRows;
    render(): JSX.Element;
}
export default Table;
export { PropsType, DragDropContext, ColumnType, BaseRowType, SortDirectionType };
