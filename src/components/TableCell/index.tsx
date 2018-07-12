import React, { StatelessComponent } from 'react';
import StyledCell, { StyledHeaderCell } from './style';

type PropsType = {
    tableHead?: boolean;
    align?: 'left' | 'center' | 'right';
};

const TableCell: StatelessComponent<PropsType> = (props): JSX.Element => {
    if (props.tableHead) {
        return <StyledHeaderCell align={props.align}>{props.children}</StyledHeaderCell>;
    }

    return <StyledCell align={props.align}>{props.children}</StyledCell>;
};

export default TableCell;
export { PropsType };
