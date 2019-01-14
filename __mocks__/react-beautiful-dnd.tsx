import React from 'react';

const mock = jest.fn(() => ({
    DraggableProps: jest.fn().mockReturnValue({
        draggableId: 1,
        index: 1,
        disableInteractiveElementBlocking: false,
        children: undefined,
    }),
}));

/* tslint:disable */
const DragDropContext = jest.fn((props: any): JSX.Element => <div>{props.children}</div>);

const Draggable = jest.fn((props: any): JSX.Element =>
    props.children(
        {
            innerRef: null,
            draggableProps: {},
            dragHandleProps: {},
        },
        { isDragging: true },
    ),
);

const Droppable = jest.fn((props: any): JSX.Element => props.children({ innerRef: null }));
/* tslint:enable */

export { mock, DragDropContext, Droppable, Draggable };
