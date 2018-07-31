import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';

type TextVariantStyleType = {
    fontSize: string;
};

type SeverityStyleType = {
    color: string;
};

type TextThemeType = {
    default: {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
    };
    descriptive: {
        color: string;
    };
    strong: {
        fontWeight: string;
    };
    severity: {
        success: SeverityStyleType;
        warning: SeverityStyleType;
        error: SeverityStyleType;
        info: SeverityStyleType;
    };
    small: TextVariantStyleType;
    base: TextVariantStyleType;
    large: TextVariantStyleType;
};

type TextPropsType = {
    compact?: boolean;
    descriptive?: boolean;
    strong?: boolean;
    variant?: 'small' | 'base' | 'large';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    severity?: SeverityType | '';
};

const StyledParagraph = withProps<TextPropsType, HTMLParagraphElement>(styled.p)`
    color: ${({ descriptive, severity, theme }): string => {
        if (descriptive !== undefined && descriptive) {
            return theme.Text.descriptive.color;
        }

        if (severity !== undefined && severity !== '') {
            return theme.Text.severity[severity].color;
        }

        return theme.Text.default.color;
    }}
    font-family: ${({ theme }): string => theme.Text.default.fontFamily};
    font-size: ${({ variant, theme }): string => (variant ? theme.Text[variant].fontSize : theme.Text.base.fontSize)};
    font-weight: ${({ strong, theme }): string =>
        strong ? theme.Text.strong.fontWeight : theme.Text.default.fontWeight};
    line-height: ${({ compact }): string => (compact ? '1.25' : '1.5')};
    text-align: ${({ textAlign }): string => (textAlign ? textAlign : '')};
    margin: 0;
`;

const StyledSpan = StyledParagraph.withComponent('span');

export { StyledSpan, StyledParagraph, TextThemeType, TextVariantStyleType, SeverityStyleType };
