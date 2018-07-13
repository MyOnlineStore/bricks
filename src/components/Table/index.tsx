import React, { SFC } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable from './style';

type PropsType = {
    dragEndHandler(result: DropResult): void;
};

const Table: SFC<PropsType> = (props): JSX.Element => {
    const dragEndHandler = (result: DropResult): void => props.dragEndHandler(result);

    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <Droppable droppableId="droppable">
                {(provided): JSX.Element => (
                    <StyledTable innerRef={provided.innerRef}>
                        <tbody>{props.children}</tbody>
                    </StyledTable>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Table;
export { PropsType, DragDropContext };
