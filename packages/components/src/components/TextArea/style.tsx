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
    common: {
        borderRadius: string;
        fontSize: string;
        fontFamily: string;
    };
    idle: {
        color: string;
        borderColor: string;
        background: string;
        placeholderColor: string;
    };
    focus: {
        borderColor: string;
        boxShadow: string;
        placeholderColor: string;
    };
    error: {
        background: string;
        borderColor: string;
        boxShadow: string;
    };
    disabled: {
        color: string;
        background: string;
        borderColor: string;
        placeholderColor: string;
    };
};

const StyledTextAreaWrapper = styled.div<TextAreaWrapperPropsType>`
    width: 100%;
    padding: 0;
    overflow: hidden;
    border: solid 1px;
    border-radius: ${({ theme }): string => theme.TextArea.common.borderRadius};
    transition: border-color 150ms, box-shadow 150ms, background 150ms;

    ${({ focus, disabled, severity, theme }): string => {
        if (severity === 'error' && !focus && !disabled) {
            return `
                background: ${theme.TextArea.error.background};
                border-color: ${theme.TextArea.error.borderColor};
                box-shadow: none;
                `;
        } else if (severity === 'error' && focus && !disabled) {
            return `
                background: ${theme.TextArea.idle.background};
                border-color: ${theme.TextArea.error.borderColor};
                box-shadow:  ${theme.TextArea.error.boxShadow};
                `;
        } else if (focus && !disabled) {
            return `
                background: ${theme.TextArea.idle.background};
                border-color: ${theme.TextArea.focus.borderColor};
                box-shadow: ${theme.TextArea.focus.boxShadow};
                `;
        } else if (disabled) {
            return `
                background: ${theme.TextArea.disabled.background};
                border-color: ${theme.TextArea.disabled.borderColor};
                box-shadow: none;
                cursor: not-allowed;
                -webkit-text-fill-color: currentColor;
                opacity: 1;
                `;
        } else {
            return `
                background: ${theme.TextArea.idle.background};
                border-color: ${theme.TextArea.idle.borderColor};
                box-shadow: none;
            `;
        }
    }}
`;

const StyledTextArea = styled.textarea<TextAreaPropsType>`
    margin: 0;
    padding: 5px 11px;
    box-sizing: border-box;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-family: ${({ theme }): string => theme.TextArea.common.fontFamily};
    font-size: ${({ theme }): string => theme.TextArea.common.fontSize};
    line-height: 1.6; // results in 24px with 15px fontSize
    color: ${({ disabled, theme }): string => (disabled ? theme.TextArea.disabled.color : theme.TextArea.idle.color)};
    resize: ${({ resizeable, disabled }): string => (disabled || !resizeable ? 'none' : 'vertical')};
    transition: color 150ms;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::placeholder {
        font-style: italic;
        opacity: 1;
        color: ${({ focus, disabled, theme }): string => {
            if (focus && !disabled) {
                return theme.TextArea.focus.placeholderColor;
            } else if (disabled) {
                return theme.TextArea.disabled.placeholderColor;
            } else {
                return theme.TextArea.idle.placeholderColor;
            }
        }};
    }

    ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : '')}
`;

const composeTextAreaTheme = (themeTools: ThemeTools): TextAreaThemeType => {
    const { colors, text, forms } = themeTools.themeSettings;

    return {
        common: {
            borderRadius: themeTools.calculateRoundness(20),
            fontSize: text.fontSize.base,
            fontFamily: text.primaryFont,
        },
        idle: {
            background: forms.background,
            borderColor: forms.borderColor,
            color: forms.color,
            placeholderColor: colors.grey.lighter1,
        },
        focus: {
            borderColor: forms.focusBorderColor,
            boxShadow: `0 0 0 4px ${chroma(forms.focusBorderColor).alpha(0.4)}`,
            placeholderColor: colors.grey.lighter2,
        },
        error: {
            background: `${chroma(colors.severity.error).alpha(0.1)}`,
            boxShadow: `0 0 0 4px ${chroma(colors.severity.error).alpha(0.4)}`,
            borderColor: colors.severity.error,
        },
        disabled: {
            color: colors.grey.lighter2,
            background: colors.silver.base,
            borderColor: colors.silver.darker2,
            placeholderColor: colors.grey.lighter2,
        },
    };
};

export default StyledTextArea;
export { StyledTextArea, StyledTextAreaWrapper, TextAreaThemeType, composeTextAreaTheme };
