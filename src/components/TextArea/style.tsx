import styled from '../../utility/styled';
import SeverityType from '../../types/SeverityType';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import chroma from 'chroma-js';

type TextAreaWrapperPropsType = {
    disabled?: boolean;
    severity?: SeverityType;
};

type TextAreaPropsType = {
    resizeable?: boolean;
    disabled?: boolean;
    characterLimit?: number;
};

type TextAreaThemeType = {
    idle: {
        common: {
            borderRadius: string;
            borderColor: string;
            fontSize: string;
            fontFamily: string;
            color: string;
            background: string;
        };
    };
    focus: {
        borderColor: string;
        boxShadow: string;
    };
    severity: {
        error: {
            borderColor: string;
            boxShadow: string;
        };
        success: {
            borderColor: string;
            boxShadow: string;
        };
        info: {
            borderColor: string;
            boxShadow: string;
        };
        warning: {
            borderColor: string;
            boxShadow: string;
        };
    };
    disabled: {
        color: string;
        background: string;
    };
};

const StyledTextAreaWrapper = styled.div<TextAreaWrapperPropsType>`
    position: relative;
    width: 100%;
    padding: 0;
    overflow: hidden;
    border: solid 1px ${({ theme }): string => theme.TextArea.idle.common.borderColor};
    border-radius: ${({ theme }): string => theme.TextArea.idle.common.borderRadius};
    background: ${({ theme, disabled }): string =>
        disabled ? theme.TextArea.disabled.background : theme.TextArea.idle.common.background};

    &:focus-within {
        ${({ severity, theme }): string =>
            `border: solid 1px ${
                severity ? theme.TextArea.severity[severity].borderColor : theme.TextArea.focus.borderColor
            }`};
        ${({ disabled, severity, theme }): string =>
            !disabled
                ? `box-shadow: ${
                      severity ? theme.TextArea.severity[severity].boxShadow : theme.TextArea.focus.boxShadow
                  }`
                : ''};
    }
`;

const StyledTextArea = styled.textarea<TextAreaPropsType>`
    padding: ${({ characterLimit }): string => (characterLimit ? '6px 12px 24px' : '6px 12px')};
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    line-height: 1.572;
    background: transparent;
    transition: border-color 100ms, box-shadow 100ms;
    font-size: ${({ theme }): string => theme.TextArea.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.TextArea.idle.common.fontFamily};
    color: ${({ theme }): string => theme.TextArea.idle.common.color};
    ${({ theme, disabled }): string => (disabled ? `color: ${theme.TextArea.disabled.color}` : '')}
    ${({ resizeable, disabled }): string => (disabled || !resizeable ? 'resize: none' : 'resize: vertical')};
`;

const composeTextAreaTheme = (themeTools: ThemeTools): TextAreaThemeType => {
    const { colors, text, forms } = themeTools.themeSettings;

    return {
        idle: {
            common: {
                borderRadius: themeTools.calculateRoundness(20),
                borderColor: forms.borderColor,
                fontSize: text.fontSize.base,
                fontFamily: text.primaryFont,
                color: forms.color,
                background: forms.background,
            },
        },
        focus: {
            borderColor: forms.focusBorderColor,
            boxShadow: `0 0 0 4px ${chroma(forms.focusBorderColor).alpha(0.4)}`,
        },
        severity: {
            error: {
                boxShadow: `0 0 0 4px ${chroma(colors.severity.error).alpha(0.4)}`,
                borderColor: colors.severity.error,
            },
            success: {
                boxShadow: `0 0 0 4px ${chroma(colors.severity.success).alpha(0.4)}`,
                borderColor: colors.severity.success,
            },
            info: {
                boxShadow: `0 0 0 4px ${chroma(colors.severity.info).alpha(0.4)}`,
                borderColor: colors.severity.info,
            },
            warning: {
                boxShadow: `0 0 0 4px ${chroma(colors.severity.warning).alpha(0.4)}`,
                borderColor: colors.severity.warning,
            },
        },
        disabled: {
            color: colors.grey.lighter2,
            background: `repeating-linear-gradient( -45deg,${colors.silver.base},${colors.silver.base} 10px,${
                colors.silver.base
            } 10px,${colors.silver.base} 20px)`,
        },
    };
};

export default StyledTextArea;
export { StyledTextArea, StyledTextAreaWrapper, TextAreaThemeType, composeTextAreaTheme };
