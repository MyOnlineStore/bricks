import React, { SFC } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import StyledCell from './style';

type PropsType = {
    tableHead?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: string;
    dragHandler?: boolean;
    provided?: DraggableProvided['dragHandleProps'];
};

const TableCell: SFC<PropsType> = (props): JSX.Element => {
    if (props.tableHead) {
        return (
            <StyledCell elementWidth={props.width} tableHead={props.tableHead} align={props.align}>
                {props.children}
            </StyledCell>
        );
    }

    return (
        <StyledCell elementWidth={props.width} tableHead={props.tableHead} align={props.align} {...props.provided}>
            {props.children}
        </StyledCell>
    );
};

export default TableCell;
export { PropsType };
