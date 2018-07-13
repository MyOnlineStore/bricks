import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';

type TableThemeType = {
    backgroundColor: string;
};

type StyledTableProps = {
    ref: HTMLTableElement;
};

const StyledTable = styled.table`
    border-spacing: 0;
    background-color: ${({ theme }): string => theme.Table.backgroundColor};
    border-collapse: separate;
    width: 100%;
    // table-layout: fixed;
`;

export default StyledTable;
export { StyledTable, TableThemeType, StyledTableProps };
