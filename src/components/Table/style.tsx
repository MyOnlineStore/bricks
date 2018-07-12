import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type TableThemeType = {
    hover: {
        backgroundColor: string;
    };
};

const StyledTable = styled.table`
    border-collapse: collapse;
    position: relative;
    width: 100%;
`;

export default StyledTable;
export { StyledTable, TableThemeType };
