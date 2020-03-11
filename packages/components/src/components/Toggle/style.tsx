import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

type StyledToggleType = {
    checked: boolean;
    disabled: boolean;
    error: boolean;
};

type StyledToggleSkinType = {
    checked: boolean;
    error: boolean;
    disabled?: boolean;
    elementFocus: boolean;
};

type ToggleThemeType = {
    general: {
        backgroundColor: string;
    };
    idle: {
        backgroundColor: string;
        borderColor: string;
        boxShadow: string;
    };
    checked: {
        backgroundColor: string;
        borderColor: string;
        boxShadow: string;
    };
    idleDisabled: {
        backgroundColor: string;
        borderColor: string;
    };
    checkedDisabled: {
        backgroundColor: string;
    };
    error: {
        borderColor: string;
        boxShadow: string;
    };
};

const StyledToggle = styled.input<StyledToggleType>`
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledToggleSkin = styled.div<StyledToggleSkinType>`
    width: 30px;
    height: 12px;
    border-radius: 18px;
    position: relative;
    transition: all 100ms;
    box-sizing: border-box;
    cursor: pointer;

    ${({ theme, elementFocus, disabled, error, checked }): string => {
        if (elementFocus && !disabled) {
            if (error) {
                return `box-shadow: ${theme.Toggle.error.boxShadow};`;
            }

            if (checked) {
                return `box-shadow: ${theme.Toggle.checked.boxShadow};`;
            }

            return `box-shadow: ${theme.Toggle.idle.boxShadow};`;
        }

        return '';
    }}

    background-color: ${({ theme, checked, disabled }): string => {
        if (checked) {
            if (checked && disabled) {
                return theme.Toggle.checkedDisabled.backgroundColor;
            }

            return theme.Toggle.checked.backgroundColor;
        }

        if (disabled) {
            return theme.Toggle.idleDisabled.backgroundColor;
        }

        return theme.Toggle.idle.backgroundColor;
    }};

    border: 1px solid ${({ theme, error, checked, disabled }): string => {
        if (error) {
            return theme.Toggle.error.borderColor;
        }

        if (checked) {
            if (checked && disabled) {
                return theme.Toggle.idle.borderColor;
            }

            return theme.Toggle.checked.borderColor;
        }

        if (disabled) {
            return theme.Toggle.idleDisabled.borderColor;
        }

        return theme.Toggle.idle.borderColor;
    }};

    &::after {
        transition: background-color 100ms, transform 100ms, border 100ms;
        content: "";
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        top: 50%;
        margin-top: -9px;
        left: 50%;
        margin-left: -9px;
        position: absolute;
        border-radius: 100%;
        background-color: ${({ theme, disabled }): string =>
            disabled ? theme.Toggle.idleDisabled.backgroundColor : theme.Toggle.general.backgroundColor};
        transform: ${({ checked }): string => (checked ? 'translateX(9px)' : 'translateX(-9px)')};
        border: 1px solid ${({ theme, error }): string =>
            error ? theme.Toggle.error.borderColor : theme.Toggle.idle.borderColor};
    }
    `;

const composeToggleTheme = (themeTools: ThemeTools): ToggleThemeType => {
    const { colors, forms } = themeTools.themeSettings;

    return {
        general: {
            backgroundColor: forms.background,
        },
        idle: {
            borderColor: forms.borderColor,
            backgroundColor: forms.background,
            boxShadow: `0 0 0 4px ${chroma(forms.borderColor).alpha(0.2)}`,
        },
        checked: {
            borderColor: forms.activeBorderColor,
            backgroundColor: forms.activeColor,
            boxShadow: `0 0 0 4px ${chroma(forms.activeBorderColor).alpha(0.2)}`,
        },
        idleDisabled: {
            backgroundColor: colors.silver.base,
            borderColor: colors.silver.darker1,
        },
        checkedDisabled: {
            backgroundColor: colors.silver.darker1,
        },
        error: {
            borderColor: colors.severity.error,
            boxShadow: `0 0 0 4px ${chroma(colors.severity.error).alpha(0.2)}`,
        },
    };
};

export default StyledToggle;
export { ToggleThemeType, StyledToggleSkin, composeToggleTheme };
