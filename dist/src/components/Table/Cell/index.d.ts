import { FunctionComponent } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
declare type PropsType = {
    align: 'left' | 'center' | 'right';
    width?: string;
    dragHandler?: boolean;
    provided?: DraggableProvided['dragHandleProps'];
    onFocus?(): void;
    onBlur?(): void;
};
declare const TableCell: FunctionComponent<PropsType>;
export default TableCell;
export { PropsType };