import React, { Component, RefObject, createRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Icon from '../Icon';
import TableCell from '../TableCell';
import Text from '../Text';
import Row from './Row';

type PropsType = {
    index?: number;
    draggable?: boolean;
};

type StateType = {
    hasFocus: boolean;
    hasHover: boolean;
};

class TableRow extends Component<PropsType, StateType> {
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
        if (this.props.draggable && this.props.index !== undefined) {
            return (
                <Draggable draggableId={`id-${this.props.index}`} index={this.props.index}>
                    {(provided, snapshot): JSX.Element => (
                        <Row
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                            draggable={snapshot.isDragging}
                            draggableProps={provided.draggableProps}
                            innerRef={provided.innerRef}
                            hasHover={this.state.hasHover}
                            focus={this.state.hasFocus}
                        >
                            <TableCell
                                width="18px"
                                provided={provided.dragHandleProps}
                                onBlur={this.handleBlur}
                                onFocus={this.handleFocus}
                            >
                                <Text descriptive={!this.state.hasHover}>
                                    <Icon size="medium" icon="bars" />
                                </Text>
                            </TableCell>
                            {this.props.children}
                        </Row>
                    )}
                </Draggable>
            );
            /*tslint:enable*/
        }

        return <Row>{this.props.children}</Row>;
    }
}

export default TableRow;
export { PropsType, StateType };
