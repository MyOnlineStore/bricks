import React, { Component, ReactNode } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Icon from '../../Icon';
import Cell from '../Cell';
import Text from '../../Text';
import StyledRow from './style';
import Branch from '../../../utility/Branch';
import { ContrastThemeProvider } from '../../Contrast';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import { SubscriptionConsumer } from '../../../utility/SubscriptionContext';

type PropsType = {
    alignments: Array<'flex-start' | 'center' | 'flex-end'>;
    cells: Array<ReactNode>;
    draggable: boolean;
    selectable: boolean;
    selected?: boolean;
    index: number;
    identifier: string;
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
        const { cells, alignments, selectable, draggable, index, identifier } = this.props;
        const { hasFocus, hasHover } = this.state;

        return (
            <Branch
                condition={draggable}
                ifTrue={(children): JSX.Element => {
                    return (
                        <Draggable draggableId={identifier} index={index}>
                            {(provided, snapshot): JSX.Element => {
                                /* tslint:disable:no-unbound-method */
                                return (
                                    <ContrastThemeProvider enable={hasHover}>
                                        <StyledRow
                                            dragging={snapshot.isDragging}
                                            focus={hasFocus}
                                            onMouseEnter={this.handleMouseEnter}
                                            onMouseLeave={this.handleMouseLeave}
                                            innerRef={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            <Cell
                                                width="18px"
                                                provided={provided.dragHandleProps}
                                                onBlur={this.handleBlur}
                                                onFocus={this.handleFocus}
                                            >
                                                <Text descriptive={!hasHover}>
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
                {selectable && (
                    <Cell width={'18px'}>
                        <SubscriptionConsumer>
                            {({ update, remove, getPayload }): JSX.Element => {
                                return (
                                    <Checkbox
                                        checked={getPayload(identifier)}
                                        name=""
                                        value=""
                                        onChange={({ checked }): void => {
                                            update(identifier, checked);
                                        }}
                                        onMount={(): void => update(identifier, false)}
                                        onUnmount={(): void => remove(identifier)}
                                    />
                                );
                            }}
                        </SubscriptionConsumer>
                    </Cell>
                )}
                {cells.map((cell, cellIndex: number) => (
                    <Cell key={`cell-${cellIndex}`}>
                        <Box justifyContent={alignments[cellIndex]}>
                            {(typeof cell === 'string' && <Text>{cell}</Text>) || cell}
                        </Box>
                    </Cell>
                ))}
            </Branch>
        );
    }
}

export default Row;
export { PropsType, StateType };
