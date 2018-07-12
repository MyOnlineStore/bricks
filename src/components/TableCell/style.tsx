import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type CellPropsType = {
    align?: 'left' | 'center' | 'right';
};

const StyledCell = withProps<CellPropsType, HTMLTableCellElement>(styled.td)`
text-align: ${({ align }): string => (align ? `${align}` : 'left')};
    padding: 1em 0.5em;
    position: relative;
    border-bottom: 2px solid #d2d7e0;
`;

const StyledHeaderCell = withProps<CellPropsType, HTMLTableCellElement>(styled.th)`
    padding: 1em 0.5em 0;
    position: relative;
    border-bottom: 2px solid #d2d7e0;
`;

export default StyledCell;
export { StyledHeaderCell };
