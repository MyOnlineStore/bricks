import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import { PropsType } from '.';

type TextVariantStyleType = {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: {
        default: string;
        compact: string;
    };
};

type TextThemeType = {
    variant: {
        small: TextVariantStyleType;
        regular: TextVariantStyleType;
        large: TextVariantStyleType;
        XL: TextVariantStyleType;
        display: TextVariantStyleType;
    };
    strong: {
        fontWeight: string;
    };
    severity: {
        default: string;
        error: string;
        success: string;
        info: string;
        warning: string;
    };
};

const StyledParagraph = withProps<PropsType, HTMLParagraphElement>(styled.p)`
    color: ${({ severity, theme }): string =>
        !severity ? theme.Text.severity.default : theme.Text.severity[severity]};
    font-family: ${({ variant, theme }): string =>
        !variant ? theme.Text.variant.regular.fontFamily : theme.Text.variant[variant].fontFamily};
    font-size: ${({ variant, theme }): string =>
        !variant ? theme.Text.variant.regular.fontSize : theme.Text.variant[variant].fontSize};
    font-weight: ${({ variant, strong, theme }): string => {
        if (strong) {
            return theme.Text.strong.fontWeight;
        } else if (variant && !strong) {
            return theme.Text.variant[variant].fontWeight;
        } else {
            return theme.Text.variant.regular.fontWeight;
        }
    }};
    line-height: ${({ variant, compact, theme }): string => {
        if (compact && variant) {
            return theme.Text.variant[variant].lineHeight.compact;
        } else if (!compact && variant) {
            return theme.Text.variant[variant].lineHeight.default;
        } else if (compact && !variant) {
            return theme.Text.variant.regular.lineHeight.compact;
        } else {
            return theme.Text.variant.regular.lineHeight.default;
        }
    }};
    text-align: ${({ textAlign }): string => (textAlign ? textAlign : '')};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // This makes sure text wraps in IE:
    flex: 1;
    `;

const StyledSpan = StyledParagraph.withComponent('span');

export { StyledSpan, StyledParagraph, TextThemeType, TextVariantStyleType };
