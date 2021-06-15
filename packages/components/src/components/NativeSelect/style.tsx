import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import StyledIcon from '../Icon/style';
import { flex, box } from '../../utility/box';

type NativeSelectThemeType = {
    common: {
        fontFamily: string;
        fontSize: string;
        borderRadius: string;
    };
    idle: {
        borderColor: string;
        color: string;
        background: string;
        caretColor: string;
    };
    focus: {
        borderColor: string;
        boxShadow: string;
    };
    disabled: {
        color: string;
        background: string;
        borderColor: string;
        caretColor: string;
    };
};

type SelectPropsType = {
    focus: boolean;
    disabled?: boolean;
};

const StyledSelect = styled.div<SelectPropsType>`
    position: relative;
    transition: border-color 150ms, box-shadow 150ms, background 150ms;
    box-sizing: border-box;
    width: 100%;
    border-radius: ${({ theme }): string => theme.NativeSelect.common.borderRadius};
    ${flex}
    ${box}

    ${({ theme, focus, disabled }) => {
        if (focus && !disabled) {
            return `
                background: ${theme.NativeSelect.idle.background};
                border: solid 1px ${theme.NativeSelect.focus.borderColor};
                box-shadow: ${theme.NativeSelect.focus.boxShadow};
            `;
        } else if (disabled) {
            return `
                background: ${theme.NativeSelect.disabled.background};
                border: solid 1px ${theme.NativeSelect.disabled.borderColor};
                box-shadow: none;
                cursor: not-allowed;
            `;
        } else {
            return `
                background: ${theme.NativeSelect.idle.background};
                border: solid 1px ${theme.NativeSelect.idle.borderColor};
                box-shadow: none;
            `;
        }
    }}

    select {
        padding: 5px 11px;
        line-height: 1.6; // results in 24px with 15px fontSize
        width: 100%;
        appearance: none;
        outline: none;
        border: none;
        background: transparent;
        font-size: ${({ theme }) => theme.NativeSelect.common.fontSize};
        font-family: ${({ theme }) => theme.NativeSelect.common.fontFamily};
        color: ${({ theme, disabled }) =>
            disabled ? theme.NativeSelect.disabled.color : theme.NativeSelect.idle.color};
        transition: color 150ms;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ${StyledIcon} {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);

        svg {
            fill: ${({ theme, disabled }) =>
                disabled ? theme.NativeSelect.disabled.caretColor : theme.NativeSelect.idle.caretColor};
        }
    }
`;

const composeNativeSelectTheme = (themeTools: ThemeTools): NativeSelectThemeType => {
    const { colors, forms, text } = themeTools.themeSettings;

    return {
        common: {
            borderRadius: themeTools.calculateRoundness(20),
            fontFamily: text.primaryFont,
            fontSize: text.fontSize.base,
        },
        idle: {
            background: forms.background,
            borderColor: forms.borderColor,
            color: forms.color,
            caretColor: forms.color,
        },
        focus: {
            borderColor: colors.primary.base,
            boxShadow: `0 0 0 4px ${chroma(colors.primary.base).alpha(0.4)}`,
        },
        disabled: {
            caretColor: colors.grey.lighter2,
            color: colors.grey.lighter2,
            background: colors.silver.base,
            borderColor: colors.silver.darker2,
        },
    };
};

export { StyledSelect, NativeSelectThemeType, composeNativeSelectTheme };
