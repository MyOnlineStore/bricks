import React, { ReactNode, Component } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable from './style';
import Row from './Row';
import Branch from '../Branch';
import Header from './Header';
// import { SubscriptionProvider, SubscriptionConsumer } from '../../utility/SubscriptionContext';

type PropsType = {
    rows: Array<RowType>;
    headers?: Array<ReactNode>;
    alignments?: Array<'left' | 'center' | 'right'>;
    draggable?: boolean;
    selectable?: boolean;
    onDragEnd?(result: DropResult): void;
    onSelection?(selectedIds: Array<RowType>): void;
};

type RowType = { id: string; checked: boolean; cells: Array<ReactNode> };

type StateType = {
    selectionStart: number;
    toggleAction: boolean;
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
            selectionStart: -1,
            toggleAction: true,
        };
    }

    private dragEndHandler = (result: DropResult): void => {
        (this.props.onDragEnd as Function)(result);
    };

    public render(): JSX.Element {
        const { headers, rows } = this.props;

        const alignments = this.props.alignments !== undefined ? this.props.alignments : [];
        const isDraggable = this.props.draggable !== undefined ? this.props.draggable : false;
        const isSelectable = this.props.selectable !== undefined ? this.props.selectable : false;

        return (
            <Branch
                condition={isDraggable}
                ifTrue={(children): JSX.Element => (
                    <DragDropContext onDragEnd={this.dragEndHandler}>
                        <Droppable droppableId="droppable">
                            {({ innerRef }): JSX.Element => <StyledTable innerRef={innerRef}>{children}</StyledTable>}
                        </Droppable>
                    </DragDropContext>
                )}
                ifFalse={(children): JSX.Element => <StyledTable>{children}</StyledTable>}
            >
                {headers !== undefined && (
                    <Header
                        onCheck={(checked): void => {
                            if (this.props.onSelection !== undefined) {
                                this.props.onSelection(
                                    this.props.rows.map(row => {
                                        return { ...row, checked };
                                    }),
                                );
                            }
                        }}
                        checked={((): 'indeterminate' | boolean => {
                            const checkedItems = rows.filter(row => row.checked === true);

                            switch (checkedItems.length) {
                                case 0:
                                    return false;
                                case rows.length:
                                    return true;
                                default:
                                    return 'indeterminate';
                            }
                        })()}
                        alignments={alignments}
                        draggable={isDraggable}
                        headers={headers}
                        selectable={isSelectable}
                    />
                )}

                <tbody>
                    {rows.map(({ id, checked, cells }, rowIndex) => {
                        return (
                            <Row
                                key={id}
                                alignments={alignments}
                                cells={cells}
                                draggable={isDraggable}
                                selectable={isSelectable}
                                checked={checked}
                                index={rowIndex}
                                identifier={id}
                                onCheck={(event, toggleAction): void => {
                                    const indexOfCheckedItem = this.props.rows.reduce((combined, item, index) => {
                                        return item.id === id ? index : combined;
                                    }, -1);

                                    if (this.props.onSelection !== undefined) {
                                        if (!event.shiftKey || this.state.selectionStart === -1) {
                                            this.setState({ selectionStart: indexOfCheckedItem, toggleAction });
                                            this.props.onSelection(
                                                this.props.rows.map(row => {
                                                    return row.id === id ? { ...row, checked: toggleAction } : row;
                                                }),
                                            );
                                        } else if (event.shiftKey) {
                                            this.props.onSelection(
                                                this.props.rows.map((row, index): RowType => {
                                                    if (
                                                        (index > this.state.selectionStart &&
                                                            index < indexOfCheckedItem) ||
                                                        (index < this.state.selectionStart &&
                                                            index > indexOfCheckedItem) ||
                                                        row.id === id
                                                    ) {
                                                        return { ...row, checked: this.state.toggleAction };
                                                    }

                                                    return row;
                                                }),
                                            );
                                            window.getSelection().removeAllRanges();
                                        }
                                    }
                                }}
                            />
                        );
                    })}
                </tbody>
            </Branch>
        );
    }
}

export default Table;
export { PropsType, DragDropContext, mapAlignment };
