import React, { ReactNode, Component } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable from './style';
import Row from './Row';
import Branch from '../../utility/Branch';
import Header from './Header';
import { SubscriptionProvider, SubscriptionConsumer } from '../../utility/SubscriptionContext';

type PropsType = {
    rows: Array<{ id: string; cells: Array<ReactNode> }>;
    headers?: Array<ReactNode>;
    alignments?: Array<'left' | 'center' | 'right'>;
    draggable?: boolean;
    selectable?: boolean;
    onDragEnd?(result: DropResult): void;
    onSelection?(selectedIds: Array<string>): void;
};

class Table extends Component<PropsType> {
    private selectedRows: Array<string> = [];

    public constructor(props: PropsType) {
        super(props);
    }

    private dragEndHandler = (result: DropResult): void => {
        (this.props.onDragEnd as Function)(result);
    };

    public render(): JSX.Element {
        const { alignments, draggable, selectable, headers, rows, onSelection } = this.props;

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
                ifTrue={(children): JSX.Element => (
                    <SubscriptionProvider>
                        <SubscriptionConsumer>
                            {({ items }): ReactNode => {
                                const selectedRows = items.filter(item => item.payload).map(item => item.id);

                                if (
                                    onSelection !== undefined &&
                                    JSON.stringify(selectedRows) !== JSON.stringify(this.selectedRows)
                                ) {
                                    onSelection(selectedRows);
                                }

                                this.selectedRows = selectedRows;

                                return children;
                            }}
                        </SubscriptionConsumer>
                    </SubscriptionProvider>
                )}
            >
                <Branch
                    condition={isDraggable}
                    ifTrue={(children): JSX.Element => (
                        <DragDropContext onDragEnd={this.dragEndHandler}>
                            <Droppable droppableId="droppable">
                                {({ innerRef }): JSX.Element => (
                                    <StyledTable innerRef={innerRef}>{children}</StyledTable>
                                )}
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
                        {rows.map(({ id, cells }, rowIndex) => {
                            return (
                                <Row
                                    key={id}
                                    alignments={mappedAlignment}
                                    cells={cells}
                                    draggable={isDraggable}
                                    selectable={isSelectable}
                                    index={rowIndex}
                                    identifier={id}
                                />
                            );
                        })}
                    </tbody>
                </Branch>
            </Branch>
        );
    }
}

export default Table;
export { PropsType, DragDropContext };
