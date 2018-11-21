import { SFC } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
declare type PropsType = {
    align: 'start' | 'center' | 'end';
    width?: string;
    dragHandler?: boolean;
    provided?: DraggableProvided['dragHandleProps'];
    onFocus?(): void;
    onBlur?(): void;
};
declare const TableCell: SFC<PropsType>;
export default TableCell;
export { PropsType };