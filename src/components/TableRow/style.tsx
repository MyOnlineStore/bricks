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
    isDragging?: boolean;
    focus: boolean;
};

const StyledRow = withProps<StyledRowProps>(styled.tr)`
    background-color: ${({ theme }): string => theme.TableRow.default.backgroundColor};
    text-align: left;
    border-spacing: 0 1px;
    box-sizing: border-box;
    position: relative;
    ${({ isDragging, focus }): string => (isDragging && !focus ? 'box-shadow: 0 0 35px rgba(0,0,0,.5);' : '')}

    &:hover {
        background-color: ${({ theme }): string => theme.TableRow.hover.backgroundColor};
        ${({ isDragging }): string => (isDragging ? 'box-shadow: 0 -2px 0 rgba(0,0,0,.2);' : '')}
    }

    &:after {
        pointer-events: none;
        ${({ focus }): string => (focus ? 'content: ""' : '')};
        box-shadow: 0 0 0 4px rgba(107,222,120,0.4);
        position: absolute;
        height: 85px;
        border-radius: 3px;
        width: calc(100vw - 16px);
        left: ${({ isDragging }): string => (isDragging ? '0' : '8px')}
        ${({ isDragging }): string => (isDragging ? 'top: 0' : '')}
    }
    `;

export default StyledRow;
export { StyledRowProps, TableRowThemeType };
