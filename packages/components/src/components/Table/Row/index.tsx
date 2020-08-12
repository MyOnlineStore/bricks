import React, { Component, MouseEvent, ReactNode } from 'react';
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
import { BarsIcon } from '@myonlinestore/bricks-assets';

type PropsType = {
    // tslint:disable
    columns: {
        [key: string]: ColumnType<string | number | boolean | undefined | ReactNode, any>;
    };
    // tsline:enable
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
                                return (
                                    <ContrastThemeProvider enable={this.state.hasHover}>
                                        <StyledRow
                                            role="row"
                                            selected={this.props.selected}
                                            dragging={snapshot.isDragging}
                                            focus={this.state.hasFocus}
                                            onMouseEnter={this.handleMouseEnter}
                                            onMouseLeave={this.handleMouseLeave}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            <Cell
                                                align="start"
                                                width="18px"
                                                provided={provided.dragHandleProps}
                                                onBlur={this.handleBlur}
                                                onFocus={this.handleFocus}
                                            >
                                                <Text variant={!this.state.hasHover ? 'descriptive' : undefined}>
                                                    <Icon size="medium" icon={<BarsIcon />} />
                                                </Text>
                                            </Cell>
                                            {children}
                                        </StyledRow>
                                    </ContrastThemeProvider>
                                );
                            }}
                        </Draggable>
                    );
                }}
                ifFalse={(children): JSX.Element => <StyledRow selected={this.props.selected}>{children}</StyledRow>}
            >
                {this.props.selectable && (
                    <Cell align="start" width={'18px'}>
                        <Checkbox
                            name=""
                            value=""
                            checked={this.props.selected}
                            disabled={this.props.row.disabled}
                            onChange={({ checked, event }): void => this.props.onSelection(event, checked as boolean)}
                        />
                    </Cell>
                )}

                {Object.keys(this.props.columns)
                    .sort((a, b) => {
                        if (this.props.columns[a].order === undefined || this.props.columns[b].order === undefined) {
                            return -1;
                        }

                        return (this.props.columns[a].order as number) - (this.props.columns[b].order as number);
                    })
                    .map(key => {
                        const column = this.props.columns[key];
                        const cell = this.props.row[key];
                        const align = key === 'buttons' ? 'end' : column.align ? column.align : 'start';

                        return (
                            <Cell
                                align={align}
                                width={key === 'buttons' ? 'fit' : ''}
                                key={`${this.props.row.id}-${key}`}
                            >
                                <Box justifyContent={align !== 'center' ? (`flex-${align}` as 'flex-start') : align}>
                                    {(column.render !== undefined && column.render(cell, this.props.row)) ||
                                        ((typeof cell === 'string' || typeof cell === 'number') && <Text>{cell}</Text>)}
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
