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

const mapAlignment = (alignment: 'left' | 'center' | 'right'): 'flex-end' | 'center' | 'flex-start' => {
    switch (alignment) {
        case 'right':
            return 'flex-end';
        case 'center':
            return 'center';
        default:
            return 'flex-start';
    }
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
        const { headers, rows, onSelection } = this.props;

        const alignments = this.props.alignments !== undefined ? this.props.alignments : [];
        const isDraggable = this.props.draggable !== undefined ? this.props.draggable : false;
        const isSelectable = this.props.selectable !== undefined ? this.props.selectable : false;

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
                            alignments={alignments}
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
                                    alignments={alignments}
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
export { PropsType, DragDropContext, mapAlignment };
