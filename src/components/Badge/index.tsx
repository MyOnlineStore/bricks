import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';

type BadgePropsType = {
    severity?: SeverityType;
};

type BadgeThemeType = {
    default: {
        color: string;
    };
    severity: {
        error: VariantStyleType;
        success: VariantStyleType;
        warning: VariantStyleType;
        info: VariantStyleType;
    };
};

type VariantStyleType = {
    backgroundColor: string;
    color: string;
    fontFamily: string;
};

const StyledBadge = withProps<BadgePropsType>(styled.div)`
    display: inline-block;
    box-sizing: border-box;
    min-width: 18px;
    min-height: 18px;
    padding: 3px 6px;
    border-radius: 9px;
    background: ${({ theme }): string => theme.Badge.backgroundColor};
    font-family: ${({ theme }): string => theme.Badge.fontFamily};
    font-size: 12px;
    line-height: 1;
    color: ${({ theme }): string => theme.Badge.default.color};
    white-space: nowrap;
`;

export default StyledBadge;
export { BadgePropsType, BadgeThemeType };
