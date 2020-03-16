import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import React, { FC } from 'react';

type PropsType = {
    variant: 'grow' | 'pro' | 'premium' | 'new';
    'data-testid'?: string;
};

type PromotionBadgeThemeType = {
    grow: VariantStyleType;
    pro: VariantStyleType;
    premium: VariantStyleType;
    new: VariantStyleType;
};

type VariantStyleType = {
    color: string;
    fontFamily: string;
};

const StyledPromotionBadge = styled.div<PropsType>`
    ${({ theme, variant }): string => {
        return `
            font-family: ${theme.PromotionBadge[variant].fontFamily};
            color: ${theme.PromotionBadge[variant].color};
        `;
    }};
    font-size: 12px;
    font-weight: 200;
    line-height: 1.5;
`;

const PromotionBadge: FC<PropsType> = props => {
    return (
        <StyledPromotionBadge data-testid={props['data-testid']} variant={props.variant}>
            {props.children}
        </StyledPromotionBadge>
    );
};

const composePromotionBadgeTheme = (themeTools: ThemeTools): PromotionBadgeThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        pro: {
            color: themeTools.calculateContrastTextColor(colors.severity.success),
            fontFamily: text.primaryFont,
        },
        premium: {
            color: themeTools.calculateContrastTextColor(colors.severity.success),
            fontFamily: text.primaryFont,
        },
        grow: {
            color: themeTools.calculateContrastTextColor(colors.severity.warning),
            fontFamily: text.primaryFont,
        },
        new: {
            color: themeTools.calculateContrastTextColor(colors.severity.info),
            fontFamily: text.primaryFont,
        },
    };
};

export default PromotionBadge;
export { PropsType, PromotionBadgeThemeType, composePromotionBadgeTheme };
