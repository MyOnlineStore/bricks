import React, { SFC } from 'react';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import StyledCell from './style';

type PropsType = {
    tableHead?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: string;
    dragHandler?: boolean;
    provided?: any;
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
