import styled from '../../utility/styled';
import SeverityType from '../../types/SeverityType';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

type TextAreaWrapperPropsType = {
    disabled?: boolean;
    severity?: SeverityType;
    focus: boolean;
};

type TextAreaPropsType = {
    resizeable?: boolean;
    disabled?: boolean;
    focus: boolean;
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
        placeholder: {
            color: string;
        };
    };
    focus: {
        borderColor: string;
        boxShadow: string;
        placeholder: {
            color: string;
        };
    };
    severity: {
        error: {
            background: string;
            borderColor: string;
            boxShadow: string;
        };
    };
    disabled: {
        color: string;
        background: string;
        borderColor: string;
        placeholder: {
            color: string;
        };
    };
};

const StyledTextAreaWrapper = styled.div<TextAreaWrapperPropsType>`
    width: 100%;
    padding: 0;
    overflow: hidden;
    border: solid 1px;
    border-radius: ${({ theme }): string => theme.TextArea.idle.common.borderRadius};
    transition: border-color 150ms, box-shadow 150ms;

    ${({ focus, disabled, severity, theme }): string => {
        if (severity === 'error' && !focus && !disabled) {
            return `
                background: ${theme.TextArea.severity[severity].background};
                border-color: ${theme.TextArea.severity[severity].borderColor};
                box-shadow: none;
                `;
        } else if (severity === 'error' && focus && !disabled) {
            return `
                background: ${theme.TextArea.idle.common.background};
                border-color: ${theme.TextArea.severity[severity].borderColor};
                box-shadow:  ${theme.TextArea.severity[severity].boxShadow};
                `;
        } else if (focus && !disabled) {
            return `
                background: ${theme.TextArea.idle.common.background};
                border-color: ${theme.TextArea.focus.borderColor};
                box-shadow: ${theme.TextArea.focus.boxShadow};
                `;
        } else if (disabled) {
            return `
                background: ${theme.TextArea.disabled.background};
                border-color: ${theme.TextArea.disabled.borderColor};
                box-shadow: none;
                `;
        } else {
            return `
                background: ${theme.TextArea.idle.common.background};
                border-color: ${theme.TextArea.idle.common.borderColor};
                box-shadow: none;
            `;
        }
    }}
`;

const StyledTextArea = styled.textarea<TextAreaPropsType>`
    padding: 6px 12px;
    box-sizing: border-box;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-family: ${({ theme }): string => theme.TextArea.idle.common.fontFamily};
    font-size: ${({ theme }): string => theme.TextArea.idle.common.fontSize};
    line-height: 1.4; // results in 21px with 15px fontSize
    color: ${({ disabled, theme }): string =>
        disabled ? theme.TextArea.disabled.color : theme.TextArea.idle.common.color};
    resize: ${({ resizeable, disabled }): string => (disabled || !resizeable ? 'none' : 'vertical')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::placeholder {
        font-style: italic;
        opaity: 1;
        color: ${({ focus, disabled, theme }): string => {
            if (focus && !disabled) {
                return theme.TextArea.focus.placeholder.color;
            } else if (disabled) {
                return theme.TextArea.disabled.placeholder.color;
            } else {
                return theme.TextArea.idle.placeholder.color;
            }
        }};
    }

    &::-moz-placeholder {
        opacity: 1;
    }
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
            placeholder: {
                color: colors.grey.lighter1,
            },
        },
        focus: {
            borderColor: forms.focusBorderColor,
            boxShadow: `0 0 0 4px ${chroma(forms.focusBorderColor).alpha(0.4)}`,
            placeholder: {
                color: colors.grey.lighter2,
            },
        },
        severity: {
            error: {
                background: `${chroma(colors.severity.error).alpha(0.1)}`,
                boxShadow: `0 0 0 4px ${chroma(colors.severity.error).alpha(0.4)}`,
                borderColor: colors.severity.error,
            },
        },
        disabled: {
            color: colors.grey.lighter2,
            background: colors.silver.base,
            borderColor: colors.silver.darker2,
            placeholder: {
                color: colors.grey.lighter2,
            },
        },
    };
};

export default StyledTextArea;
export { StyledTextArea, StyledTextAreaWrapper, TextAreaThemeType, composeTextAreaTheme };
