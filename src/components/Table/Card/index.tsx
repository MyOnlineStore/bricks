import React, { Component, ReactNode } from 'react';
import Text from '../../Text';
import Box from '../../Box';
import { ColumnType, BaseRowType } from '..';
import StyledCard from './style';
import Checkbox from '../../Checkbox';
import Icon from '../../Icon';
import Branch from '../../Branch';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { ContrastThemeProvider } from '../../Contrast';
import StyledTable from '../style';
import StyledRow from '../Row/style';
import StyledCell from '../Cell/style';

type PropsType = {
    // tslint:disable-next-line
    columns: {
        [key: string]: ColumnType<string | number | boolean | undefined | Array<ReactNode> | ReactNode, any>;
    };
    row: BaseRowType;
    draggable: boolean;
    selected: boolean;
    selectable: boolean;
    index: number;
    onSelection(event: React.MouseEvent<HTMLDivElement>, toggleAction: boolean): void;
};

type StateType = {
    hasFocus: boolean;
    hasHover: boolean;
};

class Card extends Component<PropsType, StateType> {
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

    public renderRow(provided: DraggableProvided | undefined): JSX.Element {
        return (
            <Box>
                <Box padding={[12, 24, 12, 12]} basis="auto" grow={1}>
                    <StyledTable>
                        <tbody>
                            {Object.keys(this.props.columns)
                                .sort((a, b) => {
                                    if (
                                        this.props.columns[a].order === undefined ||
                                        this.props.columns[b].order === undefined
                                    ) {
                                        return -1;
                                    }

                                    return (
                                        (this.props.columns[a].order as number) -
                                        (this.props.columns[b].order as number)
                                    );
                                })
                                .map((key, index) => {
                                    const column = this.props.columns[key];
                                    const cell = this.props.row[key];

                                    if (cell !== undefined) {
                                        return (
                                            <StyledRow key={`row_${index}`}>
                                                <StyledCell align="start">
                                                    <Text strong>{this.props.columns[key].header}</Text>
                                                </StyledCell>
                                                <StyledCell align="start">
                                                    {(column.render !== undefined &&
                                                        column.render(cell, this.props.row)) ||
                                                        ((typeof cell === 'string' || typeof cell === 'number') && (
                                                            <Text>{cell}</Text>
                                                        ))}
                                                </StyledCell>
                                            </StyledRow>
                                        );
                                    }
                                })}
                        </tbody>
                    </StyledTable>
                </Box>
                <Box direction="column" width="50px" alignItems="center" padding={[12, 6]} grow={0}>
                    {this.props.selectable && (
                        <Box padding={[6]}>
                            <Checkbox
                                name=""
                                value=""
                                checked={this.props.selected !== undefined ? this.props.selected : false}
                                onChange={({ checked, event }): void =>
                                    this.props.onSelection(event, checked as boolean)
                                }
                            />
                        </Box>
                    )}
                    {this.props.draggable && provided && (
                        <Box padding={[6]} {...provided.dragHandleProps}>
                            <Text severity={!this.state.hasHover ? 'info' : undefined}>
                                <Icon size="medium" icon="bars" />
                            </Text>
                        </Box>
                    )}
                    {this.props.columns.buttons !== undefined && this.props.columns.buttons.render !== undefined && (
                        <Box direction="column">
                            {this.props.columns.buttons.render(this.props.row.buttons, this.props.row)}
                        </Box>
                    )}
                </Box>
            </Box>
        );
    }

    public render(): JSX.Element {
        return (
            <Branch
                condition={this.props.draggable}
                ifTrue={(): JSX.Element => {
                    return (
                        <Draggable draggableId={this.props.row.id} index={this.props.index}>
                            {(provided, snapshot): JSX.Element => {
                                /* tslint:disable:no-unbound-method */
                                return (
                                    <ContrastThemeProvider enable={this.state.hasHover}>
                                        <StyledCard
                                            dragging={snapshot.isDragging}
                                            selected={this.props.selected}
                                            focus={this.state.hasFocus}
                                            onMouseEnter={this.handleMouseEnter}
                                            onMouseLeave={this.handleMouseLeave}
                                            innerRef={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            {this.renderRow(provided)}
                                        </StyledCard>
                                    </ContrastThemeProvider>
                                );
                                /* tslint:enabled:no-unbound-method */
                            }}
                        </Draggable>
                    );
                }}
                ifFalse={(): JSX.Element => <StyledCard>{this.renderRow(undefined)}</StyledCard>}
            />
        );
    }
}

export default Card;
export { PropsType, StateType };
