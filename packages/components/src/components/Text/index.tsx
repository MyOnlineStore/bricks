import styled from '../../utility/styled';
import SeverityType from '../../types/SeverityType';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';

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

const composeTextTheme = (themeTools: ThemeTools): TextThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        default: {
            color: themeTools.calculateContrastTextColor(colors.background),
        },
        variant: {
            small: {
                fontFamily: text.primaryFont,
                fontSize: text.fontSize.smaller1,
                fontWeight: text.fontWeight.regular,
                lineHeight: {
                    default: text.lineHeight.small,
                    compact: '15px',
                },
            },
            regular: {
                fontFamily: text.primaryFont,
                fontSize: text.fontSize.base,
                fontWeight: text.fontWeight.regular,
                lineHeight: {
                    default: text.lineHeight.medium,
                    compact: '18px',
                },
            },
            large: {
                fontFamily: text.primaryFont,
                fontSize: text.fontSize.larger1,
                fontWeight: text.fontWeight.regular,
                lineHeight: {
                    default: text.lineHeight.large,
                    compact: '21px',
                },
            },
            extraLarge: {
                fontFamily: text.primaryFont,
                fontSize: text.fontSize.larger2,
                fontWeight: text.fontWeight.regular,
                lineHeight: {
                    default: text.lineHeight.extralarge,
                    compact: '27px',
                },
            },
            display: {
                fontFamily: text.secondaryFont,
                fontSize: text.fontSize.display,
                fontWeight: text.fontWeight.regular,
                lineHeight: {
                    default: text.lineHeight.display,
                    compact: '75px',
                },
            },
        },
        strong: {
            fontWeight: text.fontWeight.bold,
        },
        severity: {
            error: colors.severity.error,
            success: colors.severity.success,
            info: colors.severity.info,
            warning: colors.severity.warning,
        },
    };
};

export default Text;
export { TextThemeType, TextVariantStyleType, PropsType, composeTextTheme };
