import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import { InputSeverityType } from '.';

type TextFieldThemeType = {
    common: {
        borderRadius: string;
        fontSize: string;
        fontFamily: string;
    };
    affix: {
        color: string;
        background: string;
    };
    input: {
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
};

type AffixPropsType = {
    focus: boolean;
    disabled?: boolean;
    isString?: boolean;
    severity?: InputSeverityType;
};

type WrapperPropsType = {
    focus: boolean;
    disabled?: boolean;
    severity?: InputSeverityType;
};

type InputPropsType = {
    focus: boolean;
    disabled?: boolean;
    severity?: InputSeverityType;
};

const StyledInput = styled.input<InputPropsType>`
    width: 100%;
    border: none;
    background: transparent;
    margin: 0;
    font-family: ${({ theme }): string => theme.TextField.common.fontFamily};
    font-size: ${({ theme }): string => theme.TextField.common.fontSize};
    padding: 5px 11px;
    line-height: 1.6; // results in 24px which gives the input a height of 36px
    outline: none;
    min-width: 12px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-appearance: textfield;

    ${({ focus, disabled, severity, theme }): string => {
        if (severity === 'error' && !focus && !disabled) {
            return `
                color: ${theme.TextField.input.idle.color};
                `;
        } else if (disabled) {
            return `
                color: ${theme.TextField.input.disabled.color};
                cursor: not-allowed;
                `;
        } else {
            return `
                color: ${theme.TextField.input.idle.color};
            `;
        }
    }}

    &::placeholder {
        font-style: italic;
        opaity: 1;
        color: ${({ focus, disabled, theme }): string => {
            if (focus && !disabled) {
                return theme.TextField.input.focus.placeholderColor;
            } else if (disabled) {
                return theme.TextField.input.disabled.placeholderColor;
            } else {
                return theme.TextField.input.idle.placeholderColor;
            }
        }};
    }

    &::-moz-placeholder {
        opacity: 1;
    }

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &::-ms-clear {
        display: none;
    }
`;

const StyledAffixWrapper = styled.div<AffixPropsType>`
    display: flex;
    padding: ${({ isString }): string => (isString ? '5px 11px' : '0')};
    line-height: 24px;
    user-select: none;
    align-items: center;
    flex-shrink: 0;
    max-width: 40%;
    background: ${({ theme }): string => theme.TextField.affix.background};
    border: 0px solid;
    transition: border-color 150ms, color 150ms;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:first-child {
        border-right-width: 1px;
    }

    &:last-child {
        border-left-width: 1px;
    }

    ${({ focus, disabled, severity, theme }): string => {
        if (severity === 'error' && !disabled) {
            return `
                border-color: ${theme.TextField.input.error.borderColor};
                color: ${theme.TextField.affix.color};
                `;
        } else if (focus && !disabled) {
            return `
                border-color: ${theme.TextField.input.focus.borderColor};
                color: ${theme.TextField.affix.color};
                `;
        } else if (disabled) {
            return `
                border-color: ${theme.TextField.input.disabled.borderColor};
                color: ${theme.TextField.input.disabled.color};
                `;
        } else {
            return `
                border-color: ${theme.TextField.input.idle.borderColor};
                color: ${theme.TextField.affix.color};
            `;
        }
    }}
}
`;

const StyledAffix = styled.span`
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const StyledWrapper = styled.div<WrapperPropsType>`
    transition: border-color 150ms, box-shadow 150ms, background 150ms;
    font-size: ${({ theme }): string => theme.TextField.common.fontSize};
    font-family: ${({ theme }): string => theme.TextField.common.fontFamily};
    border-radius: ${({ theme }): string => theme.TextField.common.borderRadius};
    display: flex;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;

    ${({ focus, disabled, severity, theme }): string => {
        if (severity === 'error' && focus && !disabled) {
            return `
                background: ${theme.TextField.input.error.background};
                border: solid 1px ${theme.TextField.input.error.borderColor};
                box-shadow: ${theme.TextField.input.error.boxShadow};
                `;
        } else if (severity === 'error' && !focus && !disabled) {
            return `
                background: ${theme.TextField.input.error.background};
                border: solid 1px ${theme.TextField.input.error.borderColor};
                box-shadow: none;
                `;
        } else if (focus && !disabled) {
            return `
                background: ${theme.TextField.input.idle.background};
                border: solid 1px ${theme.TextField.input.focus.borderColor};
                box-shadow: ${theme.TextField.input.focus.boxShadow};
                `;
        } else if (disabled) {
            return `
                background: ${theme.TextField.input.disabled.background};
                border: solid 1px ${theme.TextField.input.disabled.borderColor};
                box-shadow: none;
                cursor: not-allowed;
                `;
        } else {
            return `
                background: ${theme.TextField.input.idle.background};
                border: solid 1px ${theme.TextField.input.idle.borderColor};
                box-shadow: none;
            `;
        }
    }}
`;

const composeTextFieldTheme = (themeTools: ThemeTools): TextFieldThemeType => {
    const { colors, text, forms } = themeTools.themeSettings;

    return {
        common: {
            borderRadius: forms.borderRadius,
            fontSize: text.fontSize.base,
            fontFamily: text.primaryFont,
        },
        affix: {
            color: forms.colorContrast,
            background: forms.backgroundContrast,
        },
        input: {
            idle: {
                color: forms.color,
                borderColor: forms.borderColor,
                background: forms.background,
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
                borderColor: colors.severity.error,
                placeholderColor: colors.grey.lighter2,
            },
        },
    };
};

export { StyledWrapper, StyledInput, TextFieldThemeType, StyledAffix, StyledAffixWrapper, composeTextFieldTheme };
