import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
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
        background: string;
    };
    active: {
        boxShadow: string;
        borderColor: string;
        background: string;
    };
    activeDisabled: {
        boxShadow: string;
        background: string;
    };
    focus: {
        boxShadow: string;
    };
    error: {
        borderColor: string;
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
    background-color: ${({ theme }): string => theme.RadioButton.idle.backgroundColor};
    background: ${({ theme, checked, disabled }): string => {
        if (checked && disabled) {
            return theme.RadioButton.activeDisabled.background;
        } else if (!checked && disabled) {
            return theme.RadioButton.idleDisabled.background;
        } else if (checked) {
            return theme.RadioButton.active.background;
        }

        return '';
    }};
    border: 1px solid
        ${({ theme, checked, error }): string =>
            error
                ? theme.RadioButton.error.borderColor
                : checked
                ? theme.RadioButton.active.borderColor
                : theme.RadioButton.idle.borderColor};

    box-shadow: ${({ theme, elementFocus }): string =>
        `
        ${elementFocus ? theme.RadioButton.focus.boxShadow : theme.RadioButton.idle.boxShadow}
    `};
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
            boxShadow: '0px 0px 0px 5.5px transparent',
            checkmarkColor: themeTools.calculateContrastColor(
                colors.primary.base,
                colors.grey.darker1,
                colors.silver.lighter1,
            ),
        },
        idleDisabled: {
            background: `repeating-linear-gradient( -45deg,${colors.silver.darker1},${colors.silver.darker1} 5px,${
                forms.background
            } 5px,${colors.silver.base} 10px )`,
        },
        focus: {
            boxShadow: `0 0 0 4px ${chroma(forms.activeBorderColor).alpha(0.4)}`,
        },
        active: {
            boxShadow: `0px 0px 0px 5.5px ${forms.activeColor}`,
            borderColor: forms.activeBorderColor,
            background: forms.activeColor,
        },
        activeDisabled: {
            boxShadow: `0px 0px 0px 5.5px ${chroma(forms.activeColor).alpha(0.5)}`,
            background: `repeating-linear-gradient( -45deg,${chroma(forms.activeColor).alpha(0.6)},${chroma(
                forms.activeColor,
            ).alpha(0.6)} 5px,${chroma(forms.activeColor).alpha(0.5)} 5px,${chroma(forms.activeColor).alpha(
                0.5,
            )} 10px )`,
        },
        error: {
            borderColor: colors.severity.error,
        },
    };
};

export default StyledRadioButton;
export { StyledRadioButton, StyledRadioButtonSkin, StyledRadioWrapper, RadioButtonThemeType, composeRadioButtonTheme };
