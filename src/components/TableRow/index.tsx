import React, { StatelessComponent } from 'react';
import StyledRow from './style';

const TableRow: StatelessComponent = (props): JSX.Element => <StyledRow>{props.children}</StyledRow>;

export default TableRow;
