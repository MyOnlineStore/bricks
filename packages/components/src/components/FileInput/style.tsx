import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import Text from '../Text';
import { box, flex } from '../../utility/box';

export type FileInputThemeType = {
    common: {
        borderRadius: string;
        fontSize: string;
        fontFamily: string;
        iconColor: string;
    };
    input: {
        idle: {
            color: string;
            borderColor: string;
            background: string;
        };
        hover: {
            borderColor: string;
            boxShadow: string;
            background: string;
            color: string;
        };
        drop: {
            borderColor: string;
            boxShadow: string;
            background: string;
        };
        focus: {
            borderColor: string;
            boxShadow: string;
            background: string;
        };
        error: {
            background: string;
            borderColor: string;
            boxShadow: string;
        };
        disabled: {
            color: string;
            iconColor: string;
            background: string;
            borderColor: string;
        };
    };
};

export const StyledPreviewImage = styled.img`
    display: block;
    margin: 12px;
    max-width: calc(100% - 24px);
`;

export const StyledFileInput = styled.input`
    opacity: 0;
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
`;

export type WrapperPropsType = {
    focus: boolean;
    hover: boolean;
    drop: boolean;
    disabled?: boolean;
    hasPreview?: boolean;
    severity?: 'error';
};

export const StyledWrapper = styled.div<WrapperPropsType & typeof box.props & typeof flex.props>`
    ${box}
    ${flex}
    transition: border-color 150ms, box-shadow 150ms, background 150ms;
    font-size: ${({ theme }) => theme.FileInput.common.fontSize};
    font-family: ${({ theme }) => theme.FileInput.common.fontFamily};
    border-radius: ${({ theme }) => theme.FileInput.common.borderRadius};
    overflow: hidden;
    box-sizing: border-box;
    position: relative;

    ${({ focus, hover, drop, disabled, severity, theme }) => {
        if (severity === 'error' && focus && !disabled) {
            return `
                background: ${theme.FileInput.input.error.background};
                border: solid 1px ${theme.FileInput.input.error.borderColor};
                box-shadow: ${theme.FileInput.input.error.boxShadow};
            `;
        }

        if (severity === 'error' && !focus && !disabled) {
            return `
                background: ${theme.FileInput.input.error.background};
                border: solid 1px ${theme.FileInput.input.error.borderColor};
                box-shadow: none;
            `;
        }

        if (hover && !disabled) {
            return `
                background-color: ${theme.FileInput.input.hover.background};
                box-shadow: ${theme.FileInput.input.hover.boxShadow};
                border: solid 1px ${theme.FileInput.input.hover.borderColor};

                u {
                    color: ${theme.FileInput.input.hover.color};
                    text-decoration: underline;
                }
            `;
        }

        if (focus && !disabled) {
            return `
                background: ${theme.FileInput.input.focus.background};
                border: solid 1px ${theme.FileInput.input.focus.borderColor};
                box-shadow: ${theme.FileInput.input.focus.boxShadow};

                u {
                    color: ${theme.FileInput.input.hover.color};
                    text-decoration: underline;
                }
            `;
        }

        if (drop && !disabled) {
            return `
                background: ${theme.FileInput.input.drop.background};
                border: solid 1px ${theme.FileInput.input.drop.borderColor};
                box-shadow: ${theme.FileInput.input.drop.boxShadow};
            `;
        }

        if (disabled) {
            return `
                background: ${theme.FileInput.input.disabled.background};
                border: solid 1px ${theme.FileInput.input.disabled.borderColor};
                box-shadow: none;

                ${Text} {
                    color: ${theme.FileInput.input.disabled.color};
                }

                input {
                    cursor: not-allowed;
                }
            `;
        }

        return `
            background: ${theme.FileInput.input.idle.background};
            border: dashed 1px ${theme.FileInput.input.idle.borderColor};
            box-shadow: none;

            ${Text} {
                color: ${theme.FileInput.input.idle.color};
            }

            u {
                color: ${theme.FileInput.input.hover.color};
                text-decoration: none;
            }
        `;
    }}
`;

export const composeFileInputTheme = (themeTools: ThemeTools): FileInputThemeType => {
    const { colors, text, forms } = themeTools.themeSettings;

    return {
        common: {
            borderRadius: forms.borderRadius,
            fontSize: text.fontSize.base,
            fontFamily: text.primaryFont,
            iconColor: forms.color,
        },
        input: {
            idle: {
                color: forms.color,
                borderColor: forms.borderColor,
                background: forms.background,
            },
            hover: {
                borderColor: forms.borderColor,
                color: forms.activeColor,
                background: `${chroma(colors.primary.lighter1).alpha(0.1)}`,
                boxShadow: `0 0 0 4px ${chroma(forms.focusBorderColor).alpha(0.4)}`,
            },
            drop: {
                borderColor: forms.focusBorderColor,
                background: forms.background,
                boxShadow: `0 0 0 4px ${chroma(forms.focusBorderColor).alpha(0.4)}`,
            },
            focus: {
                borderColor: forms.focusBorderColor,
                background: `${chroma(colors.primary.lighter1).alpha(0.1)}`,
                boxShadow: `0 0 0 4px ${chroma(forms.focusBorderColor).alpha(0.4)}`,
            },
            error: {
                borderColor: forms.focusBorderColor,
                background: forms.background,
                boxShadow: `0 0 0 4px ${chroma(colors.severity.error).alpha(0.4)}`,
            },
            disabled: {
                color: colors.grey.lighter2,
                iconColor: colors.grey.lighter2,
                background: colors.silver.base,
                borderColor: colors.severity.error,
            },
        },
    };
};
