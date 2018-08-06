import React, { SFC } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import StyledCell from './style';

type PropsType = {
    width?: string;
    dragHandler?: boolean;
    provided?: DraggableProvided['dragHandleProps'];
    onFocus?(): void;
    onBlur?(): void;
};

const TableCell: SFC<PropsType> = ({ provided, width, onFocus, onBlur, children }): JSX.Element => {
    const extraProps = provided !== undefined ? provided : {};

    /* tslint:disable:no-unbound-method */
    return (
        <StyledCell {...extraProps} elementWidth={width} onFocus={onFocus} onBlur={onBlur}>
            {children}
        </StyledCell>
    );
    /* tslint:enable:no-unbound-method */
};

export default TableCell;
export { PropsType };
