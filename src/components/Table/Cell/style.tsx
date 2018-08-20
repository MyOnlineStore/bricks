import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';

type CellPropsType = {
    align: 'flex-start' | 'center' | 'flex-end';
    elementWidth?: string;
};

const StyledCell = withProps<CellPropsType>(styled.td)`
    width: ${({ elementWidth }): string => (elementWidth ? elementWidth : 'inherit')};
    border-bottom: ${({ theme }): string => `1px solid ${theme.Table.cell.default.borderColor}`};
    padding: 12px;
    text-align: ${({ align }): string => {
        switch (align) {
            case 'flex-end':
                return 'right';
            case 'center':
                return 'center';
            default:
                return 'left';
        }
    }};

    &:focus {
        outline: none;
    }
`;

export default StyledCell;
export { CellPropsType };
