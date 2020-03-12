import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import { rgba } from '../..';

type StyledCheckboxSkinType = {
    checkedState: boolean | 'indeterminate';
    elementFocus: boolean;
    disabled?: boolean;
    error?: boolean;
};

type CheckboxThemeType = {
    idle: {
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
        boxShadow: string;
    };
    checked: {
        checkmarkColor: string;
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
        backgroundColor: string;
        boxShadow: string;
    };
};

const StyledCheckbox = styled.input`
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledCheckboxSkin = styled.div<StyledCheckboxSkinType>`
    width: 16px;
    height: 16px;
    border-radius: ${({ theme }): string => theme.Checkbox.idle.borderRadius};
    position: relative;
    outline: none;
    transition: box-shadow 100ms, border 100ms, background-color 100ms;
    cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};

    svg {
        fill: ${({ theme }): string => theme.Checkbox.checked.checkmarkColor};
    }

    ${({ theme, elementFocus, disabled, checkedState, error }): string => {
        if (elementFocus && !disabled) {
            if (error) {
                return `box-shadow: ${theme.Checkbox.error.boxShadow};`;
            }

            if (checkedState === 'indeterminate' || checkedState) {
                return `box-shadow: ${theme.Checkbox.checked.boxShadow};`;
            }

            return `box-shadow: ${theme.Checkbox.idle.boxShadow};`;
        }

        return '';
    }}

    ${({ theme, disabled, checkedState, error }): string => {
        if (checkedState === 'indeterminate' || checkedState) {
            if (disabled && checkedState) {
                return `background-color: ${theme.Checkbox.checkedDisabled.backgroundColor};`;
            }

            return `background-color: ${theme.Checkbox.checked.backgroundColor};`;
        }

        if (disabled) {
            return `background-color: ${theme.Checkbox.idleDisabled.backgroundColor};`;
        }

        if (error) {
            return `background-color: ${theme.Checkbox.error.backgroundColor};`;
        }

        return `
                background-color: ${theme.Checkbox.idle.backgroundColor};
        `;
    }}

    border: 1px solid ${({ theme, checkedState, disabled, error }): string => {
        if (error) {
            return theme.Checkbox.error.borderColor;
        }

        if (checkedState === 'indeterminate' || checkedState) {
            if (disabled && checkedState) {
                return theme.Checkbox.idle.borderColor;
            }

            return theme.Checkbox.checked.borderColor;
        }

        if (disabled) {
            return theme.Checkbox.idleDisabled.borderColor;
        }

        return theme.Checkbox.idle.borderColor;
    }}
`;

const composeCheckboxTheme = (themeTools: ThemeTools): CheckboxThemeType => {
    const { colors, forms } = themeTools.themeSettings;
    const chromaActiveColor = chroma(forms.activeColor);

    return {
        idle: {
            borderColor: forms.borderColor,
            backgroundColor: forms.background,
            borderRadius: themeTools.calculateRoundness(5),
            boxShadow: `0 0 0 4px ${chromaActiveColor.alpha(0.4)}`,
        },
        checked: {
            checkmarkColor: themeTools.calculateContrastColor(
                forms.activeColor,
                colors.grey.darker1,
                colors.silver.lighter1,
            ),
            borderColor: forms.activeBorderColor,
            backgroundColor: forms.activeColor,
            boxShadow: `0 0 0 4px ${chromaActiveColor.alpha(0.4)}`,
        },
        idleDisabled: {
            backgroundColor: colors.silver.base,
            borderColor: colors.silver.darker1,
        },
        checkedDisabled: {
            backgroundColor: colors.silver.darker2,
        },
        error: {
            borderColor: colors.severity.error,
            backgroundColor: rgba(colors.severity.error, 0.1),
            boxShadow: `0 0 0 4px ${chromaActiveColor.alpha(0.4)}`,
        },
    };
};

export { StyledCheckbox, StyledCheckboxSkin, CheckboxThemeType, composeCheckboxTheme };
