import React, { Component, ReactNode } from 'react';
import Cell from '../DataCardCell';
import Text from '../../Text';
import Box from '../../Box';
import { ColumnType, BaseRowType } from '..';
import StyledRow from './style';
import Checkbox from '../../Checkbox';
import Icon from '../../Icon';
import Branch from '../../Branch';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { ContrastThemeProvider } from '../../Contrast';

type PropsType = {
    // tslint:disable
    columns: {
        [key: string]: ColumnType<
            string | number | boolean | undefined | Array<ReactNode> | ReactNode | Array<StatusIconType>,
            any
        >;
    };
    // tsline:enable
    row: BaseRowType;
    draggable: boolean;
    selected: boolean;
    selectable: boolean;
    index: number;
    onSelection(event: React.MouseEvent<HTMLDivElement>, toggleAction: boolean): void;
};

type StatusIconType = {
    label: string;
    icon: string;
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

    public renderRow(provided: DraggableProvided | undefined): JSX.Element {
        return (
            <Box>
                <Box padding={[12, 24, 12, 12]} basis="auto" grow={1}>
                    <table>
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
                                .map(key => {
                                    const column = this.props.columns[key];
                                    const cell = this.props.row[key];
                                    const align = column.align ? column.align : 'start';

                                    if (cell !== undefined) {
                                        return (
                                            <Cell
                                                label={this.props.columns[key].header}
                                                align={align}
                                                key={`${this.props.row.id}-${key}`}
                                            >
                                                <Box justifyContent="flex-start">
                                                    {(column.render !== undefined &&
                                                        column.render(cell, this.props.row)) ||
                                                        ((typeof cell === 'string' || typeof cell === 'number') && (
                                                            <Text>{cell}</Text>
                                                        ))}
                                                </Box>
                                            </Cell>
                                        );
                                    }
                                })}
                        </tbody>
                    </table>
                </Box>
                {this.props.row.statusIcons !== undefined && (
                    <Box direction="column" width="50px" alignItems="center" padding={[9, 6]} grow={0}>
                        {this.props.row.statusIcons.map((icon, index) => (
                            <Box className="statusIcon" padding={[6]} title={icon.label}>
                                <Text severity={!icon.severity ? 'info' : icon.severity}>
                                    <Icon size="medium" icon={icon.icon} />
                                </Text>
                            </Box>
                        ))}
                    </Box>
                )}
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
                    {this.props.row.buttons !== undefined &&
                        this.props.row.buttons.map((button, index) => <Box key={`button_${index}`}>{button}</Box>)}
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
                                        <StyledRow
                                            dragging={snapshot.isDragging}
                                            selected={this.props.selected}
                                            focus={this.state.hasFocus}
                                            onMouseEnter={this.handleMouseEnter}
                                            onMouseLeave={this.handleMouseLeave}
                                            innerRef={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            {this.renderRow(provided)}
                                        </StyledRow>
                                    </ContrastThemeProvider>
                                );
                                /* tslint:enabled:no-unbound-method */
                            }}
                        </Draggable>
                    );
                }}
                ifFalse={(): JSX.Element => <StyledRow>{this.renderRow(undefined)}</StyledRow>}
            />
        );
    }
}

export default Row;
export { PropsType, StateType };
