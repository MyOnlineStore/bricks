import styled from '../../utility/styled';
import SeverityType from '../../types/SeverityType';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type PropsType = {
    severity?: SeverityType;
};

type CounterThemeType = {
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

const Counter = styled.div<PropsType>`
    display: inline-block;
    box-sizing: border-box;
    min-width: 18px;
    min-height: 18px;
    padding: 3px 6px;
    border-radius: 9px;
    ${({ theme, severity }): string => {
        const counterSeverity = severity === undefined ? 'error' : severity;

        return `
            background: ${theme.Counter.severity[counterSeverity].backgroundColor};
            font-family: ${theme.Counter.severity[counterSeverity].fontFamily};
        `;
    }};
    font-size: 12px;
    line-height: 1;
    color: ${({ theme }): string => theme.Counter.severity.error.color};
    white-space: nowrap;
`;

const composeCounterTheme = (themeTools: ThemeTools): CounterThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        severity: {
            success: {
                backgroundColor: colors.severity.success,
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
        },
    };
};

export default Counter;
export { PropsType, CounterThemeType, composeCounterTheme };
