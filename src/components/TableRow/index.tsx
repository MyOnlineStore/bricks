import React, { Component, RefObject, createRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ContrastThemeProvider } from '../Contrast';
import Icon from '../Icon';
import TableCell from '../TableCell';
import Text from '../Text';
import StyledRow from './style';

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

    public handleMouseEnter = (): void => {
        this.setState({
            hasHover: true,
        });
    };

    public handleMouseLeave = (): void => {
        this.setState({
            hasHover: false,
        });
    };

    public handleFocus = (): void => {
        this.setState({
            hasFocus: true,
        });
    };

    public handleBlur = (): void => {
        this.setState({
            hasFocus: false,
        });
    };

    public render(): JSX.Element {
        if (this.props.draggable && this.props.index !== undefined) {
            /*tslint:disable*/
            return (
                <Draggable draggableId={`id-${this.props.index}`} index={this.props.index}>
                    {(provided, snapshot): JSX.Element => (
                        <ContrastThemeProvider enable={this.state.hasHover}>
                            <StyledRow
                                onMouseEnter={this.handleMouseEnter}
                                onMouseLeave={this.handleMouseLeave}
                                {...provided.draggableProps}
                                draggable={snapshot.isDragging}
                                innerRef={provided.innerRef}
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
                            </StyledRow>
                        </ContrastThemeProvider>
                    )}
                </Draggable>
            );
            /*tslint:enable*/
        }

        return <StyledRow focus={false}>{this.props.children}</StyledRow>;
    }
}

export default TableRow;
export { PropsType, StateType, StyledRow };
