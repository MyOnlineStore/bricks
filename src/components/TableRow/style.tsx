import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type TableRowThemeType = {
    default: {
        backgroundColor: string;
        borderColor: string;
    };

    hover: {
        backgroundColor: string;
    };

    focus: {
        borderColor: string;
    };
};

type StyledRowProps = {
    ref?: HTMLElement;
    dragging?: boolean;
    focus?: boolean;
    header?: boolean;
};

const StyledTableRow = withProps<StyledRowProps>(styled.tr)`
    background-color: ${({ theme }): string => theme.TableRow.default.backgroundColor};
    transition: background-color 300ms;
    text-align: left;
    border-spacing: 0 1px;
    box-sizing: border-box;
    position: relative;
    box-shadow: ${({ draggable, focus }): string =>
        draggable && !focus ? '0 0 35px rgba(0,0,0,.5)' : '0 0 0 rgba(0,0,0,0)'};

    ${({ focus, theme }): string => (focus ? `outline: solid 4px ${theme.TableRow.focus.borderColor}` : '')};

    &:hover {
        background-color: ${({ theme }): string => theme.TableRow.hover.backgroundColor};
`;

export default StyledTableRow;
export { StyledRowProps, TableRowThemeType };
