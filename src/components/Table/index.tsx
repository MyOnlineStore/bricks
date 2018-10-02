import React, { ReactNode, Component, MouseEvent } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable from './style';
import Row from './Row';
import Branch from '../Branch';
import Header from './Header';

type PropsType = {
    rows: Array<RowType>;
    headers?: Array<ReactNode>;
    alignments?: Array<'left' | 'center' | 'right'>;
    draggable?: boolean;
    selectable?: boolean;
    onDragEnd?(result: DropResult): void;
    onSelection?(selectedIds: Array<RowType>): void;
};

type RowType = { id: string; checked?: boolean; cells: Array<ReactNode> };

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

        console.log('onSelection !== undefined:', this.props.onSelection !== undefined);

        this.state = {
            selectionStart: -1,
            toggleAction: true,
        };
    }

    private dragEndHandler = (result: DropResult): void => {
        (this.props.onDragEnd as Function)(result);
    };

    private handleCheck(event: MouseEvent<HTMLDivElement>, toggleAction: boolean, id: string): void {
        const { rows, onSelection, selectable } = this.props;
        const selectionStart = rows.reduce((combined, item, key) => (item.id === id ? key : combined), -1);

        if (selectable && onSelection !== undefined) {
            if (event.shiftKey) {
                window.getSelection().removeAllRanges();
                onSelection(
                    rows.map((row, key): RowType => {
                        return (key > this.state.selectionStart && key < selectionStart) ||
                            (key < this.state.selectionStart && key > selectionStart) ||
                            row.id === id
                            ? { ...row, checked: this.state.toggleAction }
                            : row;
                    }),
                );
            } else {
                this.setState({ selectionStart, toggleAction });
                onSelection(rows.map(row => (row.id === id ? { ...row, checked: toggleAction } : row)));
            }
        }
    }

    private handleHeaderCheck(checked: boolean): void {
        const { rows, onSelection, selectable } = this.props;
        if (selectable && onSelection !== undefined)
            onSelection(
                rows.map(row => ({
                    ...row,
                    checked,
                })),
            );
    }

    private getHeaderState(): boolean | 'indeterminate' {
        const { rows } = this.props;
        const checkedItems = rows.filter(row => row.checked === true);

        switch (checkedItems.length) {
            case 0:
                return false;
            case rows.length:
                return true;
            default:
                return 'indeterminate';
        }
    }

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
                        onCheck={(checked): void => this.handleHeaderCheck(checked)}
                        checked={this.getHeaderState()}
                        alignments={alignments}
                        draggable={isDraggable}
                        headers={headers}
                        selectable={isSelectable}
                    />
                )}

                <tbody>
                    {rows.map(({ id, checked, cells }, rowIndex) => (
                        <Row
                            key={id}
                            alignments={alignments}
                            cells={cells}
                            draggable={isDraggable}
                            selectable={isSelectable}
                            checked={checked !== undefined ? checked : false}
                            index={rowIndex}
                            identifier={id}
                            onCheck={(event, toggleAction): void => {
                                this.props.onSelection !== undefined && this.handleCheck(event, toggleAction, id);
                            }}
                        />
                    ))}
                </tbody>
            </Branch>
        );
    }
}

export default Table;
export { PropsType, DragDropContext, mapAlignment };
