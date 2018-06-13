import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';

type BadgeThemeType = {
    backgroundColor: string;
    color: string;
};

const StyledBadge = styled.div`
    display: inline-block;
    box-sizing: border-box;
    min-width: 18px;
    min-height: 18px;
    padding: 3px 6px;
    border-radius: 9px;
    background: ${({ theme }): string => theme.Badge.backgroundColor};
    font-family: ${({ theme }): string => theme.Text.default.fontFamily};
    font-size: 12px;
    line-height: 1;
    color: ${({ theme }): string => theme.Badge.color};
    white-space: nowrap;
`;

export default StyledBadge;
export { BadgeThemeType };
