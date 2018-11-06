import React, { Component, MouseEvent } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Icon from '../../Icon';
import Cell from '../Cell';
import Text from '../../Text';
import StyledRow from './style';
import { ContrastThemeProvider } from '../../Contrast';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import Branch from '../../Branch';
import { ColumnType, BaseRowType } from '..';

type PropsType = {
    // tslint:disable-next-line
    columns: Array<ColumnType<any>>;
    row: BaseRowType;
    draggable: boolean;
    selected: boolean;
    selectable: boolean;
    index: number;
    onSelection(event: MouseEvent<HTMLDivElement>, toggleAction: boolean): void;
};

type StateType = {
    hasFocus: boolean;
    hasHover: boolean;
};

class Row extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            hasFocus: false,
            hasHover: false,
        };
    }

    public handleFocus = (): void => {
        this.setState({ hasFocus: true });
    };

    public handleBlur = (): void => {
        this.setState({ hasFocus: false });
    };

    public handleMouseEnter = (): void => {
        this.setState({ hasHover: true });
    };

    public handleMouseLeave = (): void => {
        this.setState({ hasHover: false });
    };

    public render(): JSX.Element {
        return (
            <Branch
                condition={this.props.draggable}
                ifTrue={(children): JSX.Element => {
                    return (
                        <Draggable draggableId={this.props.row.id} index={this.props.index}>
                            {(provided, snapshot): JSX.Element => {
                                /* tslint:disable:no-unbound-method */
                                return (
                                    <ContrastThemeProvider enable={this.state.hasHover}>
                                        <StyledRow
                                            dragging={snapshot.isDragging}
                                            focus={this.state.hasFocus}
                                            onMouseEnter={this.handleMouseEnter}
                                            onMouseLeave={this.handleMouseLeave}
                                            innerRef={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            <Cell
                                                align="start"
                                                width="18px"
                                                provided={provided.dragHandleProps}
                                                onBlur={this.handleBlur}
                                                onFocus={this.handleFocus}
                                            >
                                                <Text severity={!this.state.hasHover ? 'info' : undefined}>
                                                    <Icon size="medium" icon="bars" />
                                                </Text>
                                            </Cell>
                                            {children}
                                        </StyledRow>
                                    </ContrastThemeProvider>
                                );
                                /* tslint:enabled:no-unbound-method */
                            }}
                        </Draggable>
                    );
                }}
                ifFalse={(children): JSX.Element => <StyledRow>{children}</StyledRow>}
            >
                {this.props.selectable && (
                    <Cell align="start" width={'18px'}>
                        <Checkbox
                            name=""
                            value=""
                            checked={this.props.selected}
                            onChange={({ checked, event }): void => this.props.onSelection(event, checked as boolean)}
                        />
                    </Cell>
                )}

                {this.props.columns.map(column => {
                    const cell = this.props.row[column.key as string];
                    const align = column.align ? column.align : 'start';

                    return (
                        <Cell align={align} key={`${this.props.row.id}-${column.key as string}`}>
                            <Box justifyContent={align !== 'center' ? (`flex-${align}` as 'flex-start') : align}>
                                {((typeof cell === 'string' || typeof cell === 'number') && <Text>{cell}</Text>) ||
                                    cell}
                            </Box>
                        </Cell>
                    );
                })}
            </Branch>
        );
    }
}

export default Row;
export { PropsType, StateType };
