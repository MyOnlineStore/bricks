import styled from '../../utility/_styled';
import SeverityType from '../../types/_SeverityType';

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
    default: {
        color: string;
    };
    variant: {
        small: TextVariantStyleType;
        regular: TextVariantStyleType;
        large: TextVariantStyleType;
        extraLarge: TextVariantStyleType;
        display: TextVariantStyleType;
    };
    strong: {
        fontWeight: string;
    };
    severity: {
        error: string;
        success: string;
        info: string;
        warning: string;
    };
};

type PropsType = {
    variant?: 'small' | 'regular' | 'large' | 'extraLarge' | 'display';
    severity?: SeverityType;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    compact?: boolean;
    strong?: boolean;
};

const Text = styled.p<PropsType>`
    color: ${({ severity, theme }): string => (severity ? theme.Text.severity[severity] : theme.Text.default.color)};
    font-family: ${({ variant, theme }): string =>
        !variant ? theme.Text.variant.regular.fontFamily : theme.Text.variant[variant].fontFamily};
    font-size: ${({ variant, theme }): string =>
        !variant ? theme.Text.variant.regular.fontSize : theme.Text.variant[variant].fontSize};
    font-weight: ${({ variant, strong, theme }): string => {
        if (strong) {
            return theme.Text.strong.fontWeight;
        } else if (variant && !strong) {
            return theme.Text.variant[variant].fontWeight;
        }

        return theme.Text.variant.regular.fontWeight;
    }};
    line-height: ${({ variant, compact, theme }): string => {
        if (compact && variant) {
            return theme.Text.variant[variant].lineHeight.compact;
        } else if (!compact && variant) {
            return theme.Text.variant[variant].lineHeight.default;
        } else if (compact && !variant) {
            return theme.Text.variant.regular.lineHeight.compact;
        }

        return theme.Text.variant.regular.lineHeight.default;
    }};
    text-align: ${({ textAlign }): string => (textAlign ? textAlign : '')};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export default Text;
export { TextThemeType, TextVariantStyleType, PropsType };
