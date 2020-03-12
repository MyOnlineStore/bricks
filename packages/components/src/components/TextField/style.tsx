import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import { InputSeverityType } from '.';

type TextFieldThemeType = {
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
        affix: {
            color: string;
            background: string;
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
    margin: 0;
    font-family: ${({ theme }): string => theme.TextField.idle.common.fontFamily};
    font-size: ${({ theme }): string => theme.TextField.idle.common.fontSize};
    padding: 6px 12px;
    line-height: 1.4667; // results in 22px which gives the input a height of 36px
    outline: none;
    min-width: 12px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-appearance: textfield;

    ${({ focus, disabled, severity, theme }): string => {
        if (severity === 'error' && !focus && !disabled) {
            return `
                background: ${theme.TextField.severity[severity].background};
                color: ${theme.TextField.idle.common.color};
                `;
        } else if (disabled) {
            return `
                background: ${theme.TextField.disabled.background};
                color: ${theme.TextField.disabled.color};
                `;
        } else {
            return `
                background: ${theme.TextField.idle.common.background};
                color: ${theme.TextField.idle.common.color};
            `;
        }
    }}

    &::placeholder {
        font-style: italic;
        opaity: 1;
        color: ${({ focus, disabled, theme }): string => {
            if (focus && !disabled) {
                return theme.TextField.focus.placeholder.color;
            } else if (disabled) {
                return theme.TextField.disabled.placeholder.color;
            } else {
                return theme.TextField.idle.placeholder.color;
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
    padding: ${({ isString }): string => (isString ? '0 12px' : '0')};
    user-select: none;
    align-items: center;
    flex-shrink: 0;
    max-width: 40%;
    background: ${({ theme }): string => theme.TextField.idle.affix.background};
    border: 0px solid;
    transition: border-color 150ms, box-shadow 150ms;
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
                border-color: ${theme.TextField.severity[severity].borderColor};
                color: ${theme.TextField.idle.common.color};
                `;
        } else if (focus && !disabled) {
            return `
                border-color: ${theme.TextField.focus.borderColor};
                color: ${theme.TextField.idle.affix.color};
                `;
        } else if (disabled) {
            return `
                border-color: ${theme.TextField.disabled.borderColor};
                color: ${theme.TextField.disabled.color};
                `;
        } else {
            return `
                border-color: ${theme.TextField.idle.common.borderColor};
                color: ${theme.TextField.idle.affix.color};
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
    transition: border-color 150ms, box-shadow 150ms;
    font-size: ${({ theme }): string => theme.TextField.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.TextField.idle.common.fontFamily};
    border-radius: ${({ theme }): string => theme.TextField.idle.common.borderRadius};
    display: flex;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;

    ${({ focus, disabled, severity, theme }): string => {
        if (severity && focus && !disabled) {
            return `
                border: solid 1px ${theme.TextField.severity[severity].borderColor};
                box-shadow: ${theme.TextField.severity[severity].boxShadow};
                `;
        } else if (severity && !focus && !disabled) {
            return `
                border: solid 1px ${theme.TextField.severity[severity].borderColor};
                box-shadow: none;
                `;
        } else if (focus && !disabled) {
            return `
                border: solid 1px ${theme.TextField.focus.borderColor};
                box-shadow: ${theme.TextField.focus.boxShadow};
                `;
        } else if (disabled) {
            return `
                border: solid 1px ${theme.TextField.disabled.borderColor};
                box-shadow: none;
                `;
        } else {
            return `
                border: solid 1px ${theme.TextField.idle.common.borderColor};
                box-shadow: none;
            `;
        }
    }}
`;

const composeTextFieldTheme = (themeTools: ThemeTools): TextFieldThemeType => {
    const { colors, text, forms } = themeTools.themeSettings;

    return {
        idle: {
            common: {
                borderRadius: forms.borderRadius,
                borderColor: forms.borderColor,
                fontSize: text.fontSize.base,
                fontFamily: text.primaryFont,
                color: forms.color,
                background: forms.background,
            },
            affix: {
                color: forms.colorContrast,
                background: forms.backgroundContrast,
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
            borderColor: colors.severity.error,
            placeholder: {
                color: colors.grey.lighter2,
            },
        },
    };
};

export { StyledWrapper, StyledInput, TextFieldThemeType, StyledAffix, StyledAffixWrapper, composeTextFieldTheme };
