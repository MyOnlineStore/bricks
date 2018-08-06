import React, { SFC, ReactNode } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable from './style';
import Row from './Row';
import Branch from '../../utility/Branch';
import HeaderRow from './Header';

type PropsType = {
    rows: Array<Array<ReactNode>>;
    headers?: Array<ReactNode>;
    alignments?: Array<'left' | 'center' | 'right'>;
    draggable?: boolean;
    onDragEnd?(result: DropResult): void;
};

const Table: SFC<PropsType> = ({ alignments, draggable, headers, rows, onDragEnd }): JSX.Element => {
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

    return (
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
                <HeaderRow alignments={mappedAlignment} draggable={isDraggable} headers={headers} />
            )}
            <tbody>
                {rows !== undefined &&
                    rows.map((cells: Array<ReactNode>, rowIndex: number) => (
                        <Row
                            alignments={mappedAlignment}
                            cells={cells}
                            key={`row-${rowIndex}`}
                            draggable={isDraggable}
                            index={rowIndex}
                        />
                    ))}
            </tbody>
        </Branch>
    );
};

export default Table;
export { PropsType, DragDropContext };
