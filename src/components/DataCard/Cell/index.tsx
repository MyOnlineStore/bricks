import React, { FunctionComponent } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import StyledCell from './style';

type PropsType = {
    align: 'start' | 'center' | 'end';
    width?: string;
    dragHandler?: boolean;
    provided?: DraggableProvided['dragHandleProps'];
    onFocus?(): void;
    onBlur?(): void;
};

const TableCell: FunctionComponent<PropsType> = ({ align, provided, width, onFocus, onBlur, children }): JSX.Element => {
    const extraProps = provided !== undefined ? provided : {};

    /* tslint:disable:no-unbound-method */
    return (
        <StyledCell align={align} {...extraProps} elementWidth={width} onFocus={onFocus} onBlur={onBlur}>
            {children}
        </StyledCell>
    );
    /* tslint:enable:no-unbound-method */
};

export default TableCell;
export { PropsType };
