import React, { ReactNode } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable, { StyledTableBody } from './style';
import TableRow from '../TableRow';
import TableCell from '../TableCell';

type PropsType<GenericRowType, GenericCellType> = {
    children?: ReactNode;
    data?: ReadonlyArray<GenericRowType>;
    draggable?: boolean;
    dragEndHandler?(result: DropResult): void;
    renderCell?(cell: GenericCellType): JSX.Element;
};

type CellBaseType = {
    text?: string;
};

const Table = <GenericCellType extends CellBaseType, GenericRowType extends Array<GenericCellType>>(
    props: PropsType<GenericRowType, GenericCellType>,
): JSX.Element => {
    const dragEndHandler = (result: DropResult): void => {
        if (props.dragEndHandler !== undefined) props.dragEndHandler(result);
    };

    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <Droppable droppableId="droppable">
                {({ innerRef }): JSX.Element => (
                    <StyledTable innerRef={innerRef}>
                        <StyledTableBody>
                            {props.children !== undefined && props.children}
                            {props.data !== undefined &&
                                props.data.map((row: GenericRowType, j: number) => (
                                    <TableRow key={`row-${j}`} index={j} draggable={props.draggable}>
                                        {row.map((cell, i: number) => (
                                            <TableCell key={`cell-${i}`}>
                                                {(props.renderCell !== undefined && props.renderCell(cell)) ||
                                                    cell.text}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                        </StyledTableBody>
                    </StyledTable>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Table;
export { PropsType, DragDropContext };
