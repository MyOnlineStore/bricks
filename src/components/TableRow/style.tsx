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

    &:hover {
        background-color: ${({ theme }): string => theme.TableRow.hover.backgroundColor};
    }

    ${({ focus, theme }): string =>
        focus
            ? `td {
            border-top: 5px solid;
            border-bottom: 5px solid;
            border-color: ${theme.TableRow.focus.borderColor};
        }

        td:first-child {
            border-left: 5px solid;
            border-color: ${theme.TableRow.focus.borderColor};
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }

        td:last-child {
            border-right: 5px solid;
            border-color: ${theme.TableRow.focus.borderColor};
            border-bottom-right-radius: 3px;
            border-top-right-radius: 3px;`
            : ''};

    `;

export default StyledTableRow;
export { StyledRowProps, TableRowThemeType };
