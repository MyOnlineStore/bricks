import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

type RadioButtonPropsType = {
    checked: boolean;
};

type RadioButtonSkinPropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
    elementFocus: boolean;
};

type RadioButtonThemeType = {
    idle: {
        boxShadow: string;
        borderColor: string;
        backgroundColor: string;
        checkmarkColor: string;
    };
    idleDisabled: {
        backgroundColor: string;
        borderColor: string;
    };
    active: {
        boxShadow: string;
        borderColor: string;
        backgroundColor: string;
    };
    activeDisabled: {
        boxShadow: string;
        backgroundColor: string;
    };
    error: {
        borderColor: string;
        boxShadow: string;
        backgroundColor: string;
    };
};

const StyledRadioWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledRadioButton = styled.input<RadioButtonPropsType>`
    position: relative;
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledRadioButtonSkin = styled.div<RadioButtonSkinPropsType>`
    width: 16px;
    height: 16px;
    border-radius: 100%;
    transition: box-shadow 100ms, border 100ms;
    cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};

    background-color: ${({ theme, checked, disabled, error }): string => {
        if (checked) {
            if (checked && disabled) {
                return theme.RadioButton.activeDisabled.backgroundColor;
            }

            return theme.RadioButton.active.backgroundColor;
        }

        if (disabled) {
            return theme.RadioButton.idleDisabled.backgroundColor;
        }

        if (error) {
            return theme.RadioButton.error.backgroundColor;
        }

        return theme.RadioButton.idle.backgroundColor;
    }};

    border: 1px solid
        ${({ theme, checked, disabled, error }): string => {
            if (error) {
                return theme.RadioButton.error.borderColor;
            }

            if (checked) {
                if (disabled && checked) {
                    return theme.RadioButton.idle.borderColor;
                }

                return theme.RadioButton.active.borderColor;
            }

            if (disabled) {
                return theme.RadioButton.idleDisabled.borderColor;
            }

            return theme.RadioButton.idle.borderColor;
        }};

    ${({ theme, elementFocus, disabled, checked, error }): string => {
        if (elementFocus && !disabled) {
            if (error) {
                return `box-shadow: ${theme.RadioButton.error.boxShadow}`;
            }

            if (checked) {
                return `box-shadow: ${theme.RadioButton.active.boxShadow}`;
            }

            return `box-shadow: ${theme.RadioButton.idle.boxShadow}`;
        }

        return '';
    }};

    position: relative;

    ${({ theme, checked }): string =>
        checked
            ? `&::after {
                    border-radius: 100%;
                    width: 6px;
                    height: 6px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    content: '';
                    background-color: ${theme.RadioButton.idle.checkmarkColor};
                }`
            : ''}
`;

const composeRadioButtonTheme = (themeTools: ThemeTools): RadioButtonThemeType => {
    const { colors, forms } = themeTools.themeSettings;

    return {
        idle: {
            backgroundColor: forms.background,
            borderColor: forms.borderColor,
            boxShadow: `0px 0px 0px 4px ${chroma(forms.borderColor).alpha(0.1)}`,
            checkmarkColor: themeTools.calculateContrastColor(
                colors.primary.base,
                colors.grey.darker1,
                colors.silver.lighter1,
            ),
        },
        idleDisabled: {
            backgroundColor: colors.silver.darker1,
            borderColor: forms.borderColor,
        },
        active: {
            boxShadow: `0px 0px 0px 5.5px ${forms.activeColor}`,
            borderColor: forms.activeBorderColor,
            backgroundColor: forms.activeColor,
        },
        activeDisabled: {
            boxShadow: `0px 0px 0px 5.5px ${chroma(forms.activeColor).alpha(0.5)}`,
            backgroundColor: `${chroma(forms.activeColor).alpha(0.6)}`,
        },
        error: {
            borderColor: colors.severity.error,
            backgroundColor: `${chroma(colors.severity.error).alpha(0.2)}`,
            boxShadow: `0 0 0 4px ${chroma(colors.severity.error).alpha(0.2)}`,
        },
    };
};

export default StyledRadioButton;
export { StyledRadioButton, StyledRadioButtonSkin, StyledRadioWrapper, RadioButtonThemeType, composeRadioButtonTheme };
