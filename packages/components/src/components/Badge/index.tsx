import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import React, { FC } from 'react';

type PropsType = {
    variant?: 'primary' | 'secondary' | 'warning' | 'info' | 'error';
};

type BadgeThemeType = {
    primary: VariantStyleType;
    secondary: VariantStyleType;
    error: VariantStyleType;
    warning: VariantStyleType;
    info: VariantStyleType;
};

type VariantStyleType = {
    backgroundColor: string;
    color: string;
    fontFamily: string;
};

const StyledBadge = styled.div<PropsType>`
    display: inline-block;
    box-sizing: border-box;
    min-width: 24px;
    min-height: 24px;
    padding: 0px 12px;
    border-radius: 12px;
    ${({ theme, variant }): string => {
        const badgeVariant = variant === undefined ? 'error' : variant;

        return `
            background: ${theme.Badge[badgeVariant].backgroundColor};
            font-family: ${theme.Badge[badgeVariant].fontFamily};
            color: ${theme.Badge[badgeVariant].color};
        `;
    }};
    font-size: 15px;
    line-height: 1.6; //leads to 24px line-height
    white-space: nowrap;
`;

const composeBadgeTheme = (themeTools: ThemeTools): BadgeThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        primary: {
            backgroundColor: colors.severity.success,
            color: themeTools.calculateContrastTextColor(colors.severity.success),
            fontFamily: text.primaryFont,
        },
        secondary: {
            backgroundColor: colors.silver.base,
            color: themeTools.calculateContrastTextColor(colors.severity.success),
            fontFamily: text.primaryFont,
        },
        warning: {
            backgroundColor: colors.severity.warning,
            color: themeTools.calculateContrastTextColor(colors.severity.warning),
            fontFamily: text.primaryFont,
        },
        error: {
            backgroundColor: colors.severity.error,
            color: themeTools.calculateContrastTextColor(colors.severity.error),
            fontFamily: text.primaryFont,
        },
        info: {
            backgroundColor: colors.severity.info,
            color: themeTools.calculateContrastTextColor(colors.severity.info),
            fontFamily: text.primaryFont,
        },
    };
};

const Badge: FC<PropsType> = props => {
    return <StyledBadge {...props}>{props.children}</StyledBadge>;
};

export default Badge;
export { PropsType, BadgeThemeType, composeBadgeTheme };
