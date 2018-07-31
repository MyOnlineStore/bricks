import React, { SFC } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import StyledCell from './style';

type PropsType = {
    header?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: string;
    dragHandler?: boolean;
    provided?: DraggableProvided['dragHandleProps'];
    onFocus?(): void;
    onBlur?(): void;
};

const TableCell: SFC<PropsType> = (props): JSX.Element => {
    const extraProps = props.provided !== undefined ? props.provided : {};

    /* tslint:disable:no-unbound-method */
    return (
        <StyledCell
            {...extraProps}
            elementWidth={props.width}
            header={props.header}
            align={props.align}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        >
            {props.children}
        </StyledCell>
    );
    /* tslint:enable:no-unbound-method */
};

export default TableCell;
export { PropsType };
