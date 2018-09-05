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

type StateType = {
    firstCheckbox: number;
    toggleAction: boolean | 'indeterminate';
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

class Table extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            firstCheckbox: -1,
            toggleAction: true,
        };
    }

    private dragEndHandler = (result: DropResult): void => {
        (this.props.onDragEnd as Function)(result);
    };

    private getItemsInRange = (rows: Array<{ id: string }>, idxOfClickedItem: number): Array<{ id: string }> => {
        return rows.filter((item, idx): boolean => {
            if (
                (idx > this.state.firstCheckbox && idx < idxOfClickedItem) ||
                (idx < this.state.firstCheckbox && idx > idxOfClickedItem)
            ) {
                return true;
            }

            return false;
        });
    };

    public render(): JSX.Element {
        const { headers, rows } = this.props;

        const alignments = this.props.alignments !== undefined ? this.props.alignments : [];
        const isDraggable = this.props.draggable !== undefined ? this.props.draggable : false;
        const isSelectable = this.props.selectable !== undefined ? this.props.selectable : false;

        return (
            <SubscriptionProvider
                onUpdate={(items): void => {
                    if (this.props.onSelection !== undefined)
                        this.props.onSelection(items.filter(item => item.payload).map(item => item.id));
                }}
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
                    <SubscriptionConsumer>
                        {({ update }): JSX.Element => (
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
                                            onCheck={(event, toggleAction): void => {
                                                const idxOfClickedItem = this.props.rows.reduce(
                                                    (combined, item, index) => {
                                                        return item.id === id ? index : combined;
                                                    },
                                                    -1,
                                                );

                                                if (!event.shiftKey || this.state.firstCheckbox === -1) {
                                                    this.setState({ firstCheckbox: idxOfClickedItem, toggleAction });
                                                } else {
                                                    const itemsInRange = this.getItemsInRange(
                                                        this.props.rows,
                                                        idxOfClickedItem,
                                                    );

                                                    itemsInRange.forEach((item): void => {
                                                        update(item.id, this.state.toggleAction);
                                                    });

                                                    window.getSelection().removeAllRanges();
                                                }
                                            }}
                                        />
                                    );
                                })}
                            </tbody>
                        )}
                    </SubscriptionConsumer>
                </Branch>
            </SubscriptionProvider>
        );
    }
}

export default Table;
export { PropsType, DragDropContext, mapAlignment };
