import React, { FunctionComponent, ReactNode } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import StyledCell from './style';
import Text from '../../Text';

type PropsType = {
    label?: ReactNode;
    align: 'start' | 'center' | 'end';
    width?: string;
    dragHandler?: boolean;
    provided?: DraggableProvided['dragHandleProps'];
    onFocus?(): void;
    onBlur?(): void;
};

const DataCardCell: FunctionComponent<PropsType> = ({
    label,
    align,
    provided,
    width,
    onFocus,
    onBlur,
    children,
}): JSX.Element => {
    const extraProps = provided !== undefined ? provided : {};

    /* tslint:disable:no-unbound-method */
    return (
        <StyledCell align={align} {...extraProps} elementWidth={width} onFocus={onFocus} onBlur={onBlur}>
            <td className="label">
                <Text>{label}</Text>
            </td>
            <td className="value">{children}</td>
        </StyledCell>
    );
    /* tslint:enable:no-unbound-method */
};

export default DataCardCell;
export { PropsType };
