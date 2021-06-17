import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

export type ImageRadioPropsType = {
    checked: boolean;
};

export type ImageRadioSkinPropsType = {
    checked: boolean;
    elementFocus: boolean;
    disabled?: boolean;
    error?: boolean;
};

export type ImageRadioThemeType = {
    idle: {
        boxShadow: string;
        focusBoxShadow: string;
        border: string;
        fill: string;
        backgroundColor: string;
        checkmarkColor: string;
    };
    idleDisabled: {
        backgroundColor: string;
        fill: string;
        boxShadow: string;
        border: string;
    };
    active: {
        boxShadow: string;
        focusBoxShadow: string;
        fill: string;
        border: string;
        backgroundColor: string;
    };
    activeDisabled: {
        fill: string;
        boxShadow: string;
        backgroundColor: string;
    };
    error: {
        fill: string;
        border: string;
        boxShadow: string;
        focusBoxShadow: string;
        backgroundColor: string;
    };
};

export const StyledImageRadio = styled.input<ImageRadioPropsType>`
    position: relative;
    opacity: 0;
    height: 0;
    width: 0;
`;

export const StyledLabel = styled.label<{ checked: boolean }>`
    color: ${({ theme, checked }): string => (checked ? theme.ImageRadio.active.fill : theme.ImageRadio.idle.fill)};
`;

export const StyledImageRadioSkin = styled.div<ImageRadioSkinPropsType>`
    img {
        display: block;
    }

    margin-bottom: 12px;
    border-radius: 3px;
    padding: 16px;
    transition: box-shadow 100ms, border 100ms;
    cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};

    color: ${({ theme, checked, disabled, error }): string => {
        if (checked) {
            if (checked && disabled) {
                return theme.ImageRadio.activeDisabled.fill;
            }

            return theme.ImageRadio.active.fill;
        }

        if (disabled) {
            return theme.ImageRadio.idleDisabled.fill;
        }

        if (error) {
            return theme.ImageRadio.error.fill;
        }

        return theme.ImageRadio.idle.fill;
    }};

    background-color: ${({ theme, checked, disabled, error }): string => {
        if (checked) {
            if (checked && disabled) {
                return theme.ImageRadio.activeDisabled.backgroundColor;
            }

            return theme.ImageRadio.active.backgroundColor;
        }

        if (disabled) {
            return theme.ImageRadio.idleDisabled.backgroundColor;
        }

        if (error) {
            return theme.ImageRadio.error.backgroundColor;
        }

        return theme.ImageRadio.idle.backgroundColor;
    }};

    box-shadow: ${({ theme, checked, disabled, error }): string => {
        if (error) {
            return theme.ImageRadio.error.boxShadow;
        }

        if (checked) {
            if (disabled && checked) {
                return theme.ImageRadio.idle.boxShadow;
            }

            return theme.ImageRadio.active.boxShadow;
        }

        if (disabled) {
            return theme.ImageRadio.idleDisabled.boxShadow;
        }

        return theme.ImageRadio.idle.boxShadow;
    }};

    position: relative;

    ${({ theme, elementFocus, disabled, checked, error }): string => {
        if (elementFocus && !disabled) {
            if (error) {
                return `box-shadow: ${theme.ImageRadio.error.focusBoxShadow}`;
            }

            if (checked) {
                return `box-shadow: ${theme.ImageRadio.active.focusBoxShadow}`;
            }

            return `box-shadow: ${theme.ImageRadio.idle.focusBoxShadow}`;
        }

        return '';
    }};
`;

export const composeImageRadioTheme = (themeTools: ThemeTools): ImageRadioThemeType => {
    const { colors, forms } = themeTools.themeSettings;

    return {
        idle: {
            backgroundColor: forms.background,
            border: `none`,
            fill: forms.borderColor,
            boxShadow: `0px 0px 0px 1px ${chroma(forms.borderColor).alpha(0.1)}`,
            focusBoxShadow: `0px 0px 0px 1px ${chroma(forms.borderColor).alpha(0.1)}`,
            checkmarkColor: themeTools.calculateContrastColor(
                colors.primary.base,
                colors.grey.darker1,
                colors.silver.lighter1,
            ),
        },
        idleDisabled: {
            backgroundColor: colors.silver.darker1,
            fill: forms.activeColor,
            boxShadow: `0px 0px 0px 2px ${forms.activeColor}`,
            border: `none`,
        },
        active: {
            boxShadow: `0px 0px 0px 2px ${forms.activeColor}`,
            focusBoxShadow: `0px 0px 0px 2px ${forms.activeColor}`,
            fill: forms.activeColor,
            border: `none`,
            backgroundColor: forms.activeColor,
        },
        activeDisabled: {
            boxShadow: `0px 0px 0px 2px ${chroma(forms.activeColor).alpha(0.5)}`,
            fill: forms.activeColor,
            backgroundColor: `${chroma(forms.activeColor).alpha(0.6)}`,
        },
        error: {
            border: `none`,
            fill: colors.severity.error,
            backgroundColor: `${chroma(colors.severity.error).alpha(0.2)}`,
            boxShadow: `0 0 0 1px ${chroma(colors.severity.error).alpha(0.2)}`,
            focusBoxShadow: `0 0 0 1px ${chroma(colors.severity.error).alpha(0.2)}`,
        },
    };
};

export default StyledImageRadio;
