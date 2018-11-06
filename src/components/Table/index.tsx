import React, { ReactNode, Component, MouseEvent } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable from './style';
import Row from './Row';
import Branch from '../Branch';
import Headers from './Headers';

type BaseRowType = {
    id: string;
    selected?: boolean;
    // tslint:disable-next-line
    [key: string]: any;
};

type ColumnType<GenericCellType> = {
    order?: number;
    header?: ReactNode;
    align?: 'start' | 'center' | 'end';
    sort?(cellA: GenericCellType, cellB: GenericCellType): 0 | 1 | -1;
    render?(cell: GenericCellType): JSX.Element;
};

type PropsType<GenericRowType extends BaseRowType> = {
    rows: Array<GenericRowType>;
    columns: { [GenericColumnType in keyof Partial<GenericRowType>]: ColumnType<GenericRowType[GenericColumnType]> };
    onSelection?(rows: Array<GenericRowType>): void;
    onDragEnd?(rows: Array<GenericRowType>, dropResult: DropResult): void;
};

type StateType = {
    selectionStart: number;
    toggleAction: boolean;
};

class Table<GenericRowType extends BaseRowType> extends Component<PropsType<GenericRowType>, StateType> {
    public constructor(props: PropsType<GenericRowType>) {
        super(props);

        this.state = {
            selectionStart: -1,
            toggleAction: true,
        };
    }

    private dragEndHandler = (result: DropResult): void => {
        if (this.props.onDragEnd !== undefined && result.destination) {
            const rows = this.props.rows;
            const [removed] = rows.splice(result.source.index, 1);

            rows.splice(result.destination.index, 0, removed);

            this.props.onDragEnd(rows, result);
        }
    };

    private handleSelection(event: MouseEvent<HTMLDivElement>, toggleAction: boolean, id: string): void {
        const selectionEnd = this.props.rows.reduce((combined, item, key) => (item.id === id ? key : combined), -1);

        if (event.shiftKey) {
            window.getSelection().removeAllRanges();

            const selection = this.props.rows.map(
                (row, key): GenericRowType => {
                    if (
                        (key >= this.state.selectionStart && key <= selectionEnd) ||
                        (key <= this.state.selectionStart && key >= selectionEnd)
                    ) {
                        // tslint:disable-next-line
                        return { ...(row as any), selected: this.state.toggleAction };
                    }

                    return row;
                },
            );

            (this.props.onSelection as Required<PropsType<GenericRowType>>['onSelection'])(selection);
        } else {
            this.setState({ selectionStart: selectionEnd, toggleAction });

            const selection = this.props.rows.map(
                // tslint:disable-next-line
                row => (row.id === id ? { ...(row as any), selected: toggleAction } : row),
            );

            (this.props.onSelection as Required<PropsType<GenericRowType>>['onSelection'])(selection);
        }
    }

    private handleHeaderCheck(selected: boolean): void {
        (this.props.onSelection as Required<PropsType<GenericRowType>>['onSelection'])(
            // tslint:disable-next-line
            this.props.rows.map(row => ({ ...(row as any), selected })),
        );
    }

    private getHeaderState(): boolean | 'indeterminate' {
        const selectedItems = this.props.rows.filter(row => row.selected);

        switch (selectedItems.length) {
            case 0:
                return false;
            case this.props.rows.length:
                return true;
            default:
                return 'indeterminate';
        }
    }

    private handleSort = (direction: 'ascending' | 'descending' | 'none'): void => {};

    public render(): JSX.Element {
        const isDraggable = this.props.onDragEnd !== undefined;
        const isSelectable = this.props.onSelection !== undefined;

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
                <Headers
                    checked={this.getHeaderState()}
                    draggable={isDraggable}
                    selectable={isSelectable}
                    columns={this.props.columns}
                    onCheck={(selected): void => this.handleHeaderCheck(selected)}
                    onSort={this.handleSort}
                />
                <tbody>
                    {this.props.rows.map((row, rowIndex) => (
                        <Row
                            key={row.id}
                            columns={this.props.columns}
                            row={row}
                            draggable={isDraggable}
                            selectable={isSelectable}
                            selected={row.selected !== undefined ? row.selected : false}
                            index={rowIndex}
                            onSelection={(event, toggleAction): void => {
                                this.handleSelection(event, toggleAction, row.id);
                            }}
                        />
                    ))}
                </tbody>
            </Branch>
        );
    }
}

export default Table;
export { PropsType, DragDropContext, ColumnType, BaseRowType };
