import React, { Component, ReactNode, MouseEvent } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Icon from '../../Icon';
import Cell from '../Cell';
import Text from '../../Text';
import StyledRow from './style';
import { ContrastThemeProvider } from '../../Contrast';
import Box from '../../Box';
import Checkbox from '../../Checkbox';
import { SubscriptionConsumer } from '../../../utility/SubscriptionContext';
import { mapAlignment } from '..';
import Branch from '../../Branch';

type PropsType = {
    alignments: Array<'left' | 'center' | 'right'>;
    cells: Array<ReactNode>;
    draggable: boolean;
    selectable: boolean;
    selected?: boolean;
    index: number;
    identifier: string;
    onCheck?(event: MouseEvent<HTMLDivElement>, toggleAction: boolean | 'indeterminate'): void;
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
                                                align="left"
                                                width="18px"
                                                provided={provided.dragHandleProps}
                                                onBlur={this.handleBlur}
                                                onFocus={this.handleFocus}
                                            >
                                                <Text severity={!hasHover ? 'info' : 'default'}>
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
                    <Cell align="left" width={'18px'}>
                        <SubscriptionConsumer>
                            {({ update, remove, getPayload }): JSX.Element => {
                                return (
                                    <Checkbox
                                        checked={getPayload(identifier)}
                                        name=""
                                        value=""
                                        onChange={({ checked, event }): void => {
                                            update(identifier, checked);
                                            if (this.props.onCheck) this.props.onCheck(event, checked);
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
                    <Cell align={alignments[cellIndex]} key={`cell-${cellIndex}`}>
                        <Box justifyContent={mapAlignment(alignments[cellIndex])}>
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
