import styled from '../../utility/styled';
import SeverityType from '../../types/SeverityType';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import { box } from '../../utility/box';

type TextSizeStyleType = {
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
    size: {
        small: TextSizeStyleType;
        regular: TextSizeStyleType;
        large: TextSizeStyleType;
        extraLarge: TextSizeStyleType;
        display: TextSizeStyleType;
    };
    strong: {
        fontWeight: string;
    };
    variant: {
        error: string;
        success: string;
        info: string;
        warning: string;
        descriptive: string;
    };
};

type PropsType = typeof box.props & {
    'data-testid'?: string;
    size?: 'small' | 'regular' | 'large' | 'extraLarge' | 'display';
    variant?: SeverityType | 'descriptive';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    compact?: boolean;
    strong?: boolean;
    strikethrough?: boolean;
};

const Text = styled.p<PropsType>`
    color: ${({ variant, theme }): string => (variant ? theme.Text.variant[variant] : theme.Text.default.color)};
    font-family: ${({ size, theme }): string =>
        !size ? theme.Text.size.regular.fontFamily : theme.Text.size[size].fontFamily};
    font-size: ${({ size, theme }): string =>
        !size ? theme.Text.size.regular.fontSize : theme.Text.size[size].fontSize};
    font-weight: ${({ size, strong, theme }): string => {
        if (strong) {
            return theme.Text.strong.fontWeight;
        } else if (size && !strong) {
            return theme.Text.size[size].fontWeight;
        }

        return theme.Text.size.regular.fontWeight;
    }};
    font-style: ${({ variant }): string => (variant === 'descriptive' ? 'italic' : 'normal')};
    line-height: ${({ size, compact, theme }): string => {
        if (compact && size) {
            return theme.Text.size[size].lineHeight.compact;
        } else if (!compact && size) {
            return theme.Text.size[size].lineHeight.default;
        } else if (compact && !size) {
            return theme.Text.size.regular.lineHeight.compact;
        }

        return theme.Text.size.regular.lineHeight.default;
    }};
    text-align: ${({ textAlign }): string => (textAlign ? textAlign : '')};
    margin: 0;
    ${box}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${({ theme, strikethrough, variant }) =>
        strikethrough &&
        `
        display: inline-block;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 6px;
            bottom: 6px;
            display: block;
            background: linear-gradient(-6deg, transparent calc(50% - 2px), ${
                variant ? theme.Text.variant[variant] : theme.Text.default.color
            } calc(50% - 1px), ${
            variant ? theme.Text.variant[variant] : theme.Text.default.color
        } calc(50% + 1px), transparent calc(50% + 2px)) no-repeat 0px 0px / 100% 100%;
        }
    `}
`;

const composeTextTheme = (themeTools: ThemeTools): TextThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        default: {
            color: themeTools.calculateContrastTextColor(colors.background),
        },
        size: {
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
        variant: {
            error: colors.severity.error,
            success: colors.severity.success,
            info: colors.severity.info,
            warning: colors.severity.warning,
            descriptive: colors.severity.info,
        },
    };
};

export default Text;
export { TextThemeType, TextSizeStyleType, PropsType, composeTextTheme };
