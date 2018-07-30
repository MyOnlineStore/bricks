import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type TableRowThemeType = {
    default: {
        backgroundColor: string;
    };

    hover: {
        backgroundColor: string;
    };
};

type StyledRowProps = {
    ref?: HTMLElement;
    draggable?: boolean;
    focus: boolean;
    header?: boolean;
};

const StyledRow = withProps<StyledRowProps>(styled.tr)`
    background-color: ${({ theme }): string => theme.TableRow.default.backgroundColor};
    text-align: left;
    border-spacing: 0 1px;
    box-sizing: border-box;
    position: relative;
    ${({ draggable, focus }): string => (draggable && !focus ? 'box-shadow: 0 0 35px rgba(0,0,0,.5);' : '')}

    &:hover {

        background-color: ${({ theme }): string => theme.TableRow.hover.backgroundColor};
        ${({ draggable }): string => (draggable ? 'box-shadow: 0 -2px 0 rgba(0,0,0,.2);' : '')}
    }

    ${({ focus }): string =>
        focus
            ? `td {
            border-top: 5px solid rgba(107,222,120,0.4);
            border-bottom: 5px solid rgba(107,222,120,0.4);
        }

        td:first-child {
            border-left: 5px solid rgba(107,222,120,0.4);
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }

        td:last-child {
            border-right: 5px solid rgba(107,222,120,0.4);
            border-bottom-right-radius: 3px;
            border-top-right-radius: 3px;`
            : ''};

    `;

export default StyledRow;
export { StyledRowProps, TableRowThemeType };
