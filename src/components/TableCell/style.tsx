import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type CellPropsType = {
    align?: 'left' | 'center' | 'right';
    tableHead?: boolean;
    elementWidth?: string;
};

type TableCellThemeType = {
    default: {
        backgroundColor: string;
        borderColor: string;
    };

    header: {
        backgroundColor: string;
    };
};

const StyledCell = withProps<CellPropsType, HTMLTableCellElement>(styled.td)`
    width: ${({ elementWidth }): string => (elementWidth ? elementWidth : 'inherit')};
    text-align: ${({ align }): string => (align ? align : 'left')};
    border-bottom: ${({ theme }): string => `1px solid ${theme.TableCell.default.borderColor}`};
    padding: ${({ tableHead }): string => (tableHead ? '12px' : '24px 12px')};
    position: relative;

    &:focus {
        outline: none;
}
`;

export default StyledCell;
export { TableCellThemeType, CellPropsType };
