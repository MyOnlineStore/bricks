import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/_styled';

type CellPropsType = {
    align: 'start' | 'center' | 'end';
    elementWidth?: string;
};

enum Alignments {
    'start' = 'left',
    'center' = 'center',
    'end' = 'right',
}

const StyledCell = withProps<CellPropsType>(styled.td)`
    width: ${({ elementWidth }): string => (elementWidth ? elementWidth : 'inherit')};
    border-bottom: ${({ theme }): string => `1px solid ${theme.Table.cell.default.borderColor}`};
    padding: 12px;
    text-align: ${({ align }): string => Alignments[align]}};

    &:focus {
        outline: none;
    }
`;

export default StyledCell;
export { CellPropsType };
