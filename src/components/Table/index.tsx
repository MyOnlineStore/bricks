import React, { SFC } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable from './style';

type PropsType = {
    dragEndHandler(result: DropResult): void;
};

const Table: SFC<PropsType> = (props): JSX.Element => {
    const dragEndHandler = (result: DropResult): void => props.dragEndHandler(result);

    /* tslint:disable:no-unbound-method */
    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <Droppable droppableId="droppable">
                {({ innerRef }): JSX.Element => (
                    <StyledTable innerRef={innerRef}>
                        <tbody>{props.children}</tbody>
                    </StyledTable>
                )}
            </Droppable>
        </DragDropContext>
    );
    /* tslint:enable:no-unbound-method */
};

export default Table;
export { PropsType, DragDropContext };
