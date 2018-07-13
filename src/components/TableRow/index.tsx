import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Icon from '../Icon';
import TableCell from '../TableCell';
import StyledRow from './style';

type PropsType = {
    index?: number;
    draggable?: boolean;
};

type StateType = {
    focus: boolean;
    hover: boolean;
};

class TableRow extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            focus: false,
            hover: false,
        };
    }

    public handleMouseEnter = (): void => {
        this.setState({
            hover: true,
        });
    };

    public handleMouseLeave = (): void => {
        this.setState({
            hover: false,
        });
    };

    public handleFocus = (): void => {
        this.setState({
            focus: true,
        });
    };

    public handleBlur = (): void => {
        this.setState({
            focus: false,
            hover: false,
        });
    };

    public render(): JSX.Element {
        if (this.props.draggable && this.props.index !== undefined) {
            return (
                <Draggable draggableId={`id-${this.props.index}`} index={this.props.index}>
                    {(provided, snapshot): JSX.Element => (
                        <StyledRow
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                            onFocusCapture={this.handleFocus}
                            onBlurCapture={this.handleBlur}
                            {...provided.draggableProps}
                            isDragging={snapshot.isDragging}
                            innerRef={provided.innerRef}
                            focus={this.state.focus}
                        >
                            <TableCell width="18px" provided={provided.dragHandleProps}>
                                <Icon color={this.state.hover ? '#000' : '#A6AAB3'} size="medium" flat icon="bars" />
                            </TableCell>
                            {this.props.children}
                        </StyledRow>
                    )}
                </Draggable>
            );
        }

        return (
            <StyledRow focus={false}>
                <TableCell width={this.props.draggable ? '18px' : '0'} />
                {this.props.children}
            </StyledRow>
        );
    }
}

export default TableRow;
export { PropsType, StateType, StyledRow };
