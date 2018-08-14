import React, { SFC, ReactNode } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable from './style';
import Row from './Row';
import Branch from '../../utility/Branch';
import Header from './Header';
import SubscriptionContext from '../../utility/SubscriptionContext';

type PropsType = {
    rows: Array<Array<ReactNode>>;
    headers?: Array<ReactNode>;
    alignments?: Array<'left' | 'center' | 'right'>;
    draggable?: boolean;
    selectable?: boolean;
    onDragEnd?(result: DropResult): void;
};

const Selection = new SubscriptionContext();

const Table: SFC<PropsType> = ({ alignments, draggable, selectable, headers, rows, onDragEnd }): JSX.Element => {
    const dragEndHandler = (result: DropResult): void => {
        (onDragEnd as Function)(result);
    };

    const mappedAlignment =
        alignments !== undefined
            ? alignments.map(item =>
                  ((): 'flex-start' | 'center' | 'flex-end' => {
                      switch (item) {
                          case 'center':
                              return 'center';
                          case 'right':
                              return 'flex-end';
                          default:
                              return 'flex-start';
                      }
                  })(),
              )
            : [];

    const isDraggable = draggable !== undefined ? draggable : false;
    const isSelectable = selectable !== undefined ? selectable : false;

    return (
        <Branch
            condition={isSelectable}
            ifTrue={(children): JSX.Element => <Selection.Provider>{children}</Selection.Provider>}
        >
            <Branch
                condition={isDraggable}
                ifTrue={(children): JSX.Element => (
                    <DragDropContext onDragEnd={dragEndHandler}>
                        <Droppable droppableId="droppable">
                            {({ innerRef }): JSX.Element => <StyledTable innerRef={innerRef}>{children}</StyledTable>}
                        </Droppable>
                    </DragDropContext>
                )}
                ifFalse={(children): JSX.Element => <StyledTable>{children}</StyledTable>}
            >
                {headers !== undefined && (
                    <Header
                        alignments={mappedAlignment}
                        draggable={isDraggable}
                        headers={headers}
                        selectable={isSelectable}
                    />
                )}
                <tbody>
                    {rows !== undefined &&
                        rows.map((cells: Array<ReactNode>, rowIndex: number) => (
                            <Row
                                alignments={mappedAlignment}
                                cells={cells}
                                key={`row-${rowIndex}`}
                                draggable={isDraggable}
                                selectable={isSelectable}
                                index={rowIndex}
                            />
                        ))}
                </tbody>
            </Branch>
        </Branch>
    );
};

export default Table;
export { PropsType, DragDropContext, Selection };
