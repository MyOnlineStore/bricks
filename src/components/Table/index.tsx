import React, { ReactNode, Component, MouseEvent } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import StyledTable from './tableStyle';
import StyledDataCard from './datacardStyle';
import TableRow from './TableRow';
import TableHeaders from './TableHeaders';
import CompactHeaders from './CompactHeaders';
import Branch from '../Branch';
import { MediumIcons } from './../Icon/types';
import SeverityType from '../../types/_SeverityType';
import DataCard from './DataCard';

type SortDirectionType = 'ascending' | 'descending' | 'none';

type BaseRowType = {
    id: string;
    selected?: boolean;
    buttons?: Array<ReactNode>;
    statusIcons?: Array<StatusIconType>;
    // tslint:disable-next-line
    [key: string]: string | number | boolean | undefined | Array<ReactNode> | ReactNode;
};

type StatusIconType = {
    label: string;
    severity?: SeverityType;
    icon: keyof typeof MediumIcons;
};

type ColumnType<GenericCellType, GenericRowType> = {
    order?: number;
    header?: ReactNode | string | number | any;
    align?: 'start' | 'center' | 'end';
    sort?(cellA: GenericCellType, cellB: GenericCellType): number;
    render?(cell: GenericCellType, row: GenericRowType): JSX.Element;
};

type PropsType<GenericRowType extends BaseRowType> = {
    view?: 'table' | 'datacard';
    rows: Array<GenericRowType>;
    columns: {
        [GenericColumnType in keyof Partial<GenericRowType>]: ColumnType<
            GenericRowType[GenericColumnType],
            GenericRowType
        >
    };
    onSelection?(rows: Array<GenericRowType>): void;
    onDragEnd?(rows: Array<GenericRowType>, dropResult: DropResult): void;
};

type StateType = {
    selectionStart: number;
    toggleAction: boolean;
    sorting?: { column: string; direction: SortDirectionType };
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

    private getHeaderState() {
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

    private handleSort = (column: string, direction: SortDirectionType) => {
        this.setState({
            sorting: {
                column,
                direction,
            },
        });
    };

    private sortRows = (): Array<GenericRowType> => {
        // tslint:disable-next-line
        if (this.state.sorting === undefined || this.props.columns[this.state.sorting.column].sort === undefined) {
            return this.props.rows;
        }

        const sortingColumn = this.props.columns[this.state.sorting.column];
        const rows = [...this.props.rows];
        const column = this.state.sorting.column;

        // tslint:disable-next-line
        const sortRows = sortingColumn.sort as Required<ColumnType<any, any>>['sort'];

        switch (this.state.sorting.direction) {
            case 'ascending': {
                return rows.sort((a, b) => sortRows(a[column], b[column]));
            }
            case 'descending': {
                return rows.sort((a, b) => sortRows(b[column], a[column]));
            }
            default: {
                return rows;
            }
        }
    };

    public renderRow(row: BaseRowType, rowIndex: number, isSelectable: boolean, isDraggable: boolean) {
        const rowProps = {
            key: row.id,
            columns: this.props.columns,
            row,
            selectable: isSelectable,
            selected: row.selected !== undefined ? row.selected : false,
            draggable: isDraggable,
            index: rowIndex,
        };

        if (this.props.view === 'table') {
            return (
                <TableRow
                    {...rowProps}
                    onSelection={(event, toggleAction): void => {
                        this.handleSelection(event, toggleAction, row.id);
                    }}
                />
            );
        }

        return (
            <DataCard
                {...rowProps}
                onSelection={(event, toggleAction): void => {
                    this.handleSelection(event, toggleAction, row.id);
                }}
            />
        );
    }

    public render() {
        const isDraggable = this.props.onDragEnd !== undefined;
        const isSelectable = this.props.onSelection !== undefined;
        const rows = this.sortRows();

        const headerProps = {
            draggable: isDraggable,
            selectable: isSelectable,
            columns: this.props.columns,
            onCheck: (selected: boolean): void => this.handleHeaderCheck(selected),
            onSort: this.handleSort,
        };

        return (
            <Branch
                condition={this.props.view === 'table'}
                ifTrue={(children): JSX.Element => (
                    <Branch
                        condition={isDraggable}
                        ifTrue={(children): JSX.Element => (
                            <DragDropContext onDragEnd={this.dragEndHandler}>
                                <Droppable droppableId="droppable">
                                    {({ innerRef }): JSX.Element => (
                                        <StyledTable ref={innerRef}>{children}</StyledTable>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        )}
                        ifFalse={(children): JSX.Element => <StyledTable>{children}</StyledTable>}
                    >
                        <TableHeaders checked={this.getHeaderState()} {...headerProps} />
                        <tbody>{children}</tbody>
                    </Branch>
                )}
                ifFalse={(children): JSX.Element => (
                    <Branch
                        condition={isDraggable}
                        ifTrue={(children): JSX.Element => (
                            <DragDropContext onDragEnd={this.dragEndHandler}>
                                <Droppable droppableId="droppable">
                                    {({ innerRef }): JSX.Element => (
                                        <StyledDataCard ref={innerRef}>{children}</StyledDataCard>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        )}
                        ifFalse={(children): JSX.Element => <StyledDataCard>{children}</StyledDataCard>}
                    >
                        <CompactHeaders checked={this.getHeaderState()} {...headerProps} />
                        {children}
                    </Branch>
                )}
            >
                {rows.map((row, rowIndex) => this.renderRow(row, rowIndex, isSelectable, isDraggable))}
            </Branch>
        );
    }
}

export default Table;
export { PropsType, DragDropContext, ColumnType, BaseRowType, SortDirectionType };
