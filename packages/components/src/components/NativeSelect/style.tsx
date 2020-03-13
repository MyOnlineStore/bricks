import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import StyledIcon from '../Icon/style';

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

    ${({ theme, focus, disabled }) => {
        if (focus && !disabled) {
            return `
                background: ${theme.NativeSelect.idle.background};
                border: ${`solid 1px ${theme.NativeSelect.focus.borderColor}`};
                box-shadow: ${theme.NativeSelect.focus.boxShadow};
            `;
        } else if (disabled) {
            return `
                background: ${theme.NativeSelect.disabled.background};
                border: ${`solid 1px ${theme.NativeSelect.disabled.borderColor}`};
                box-shadow: none;
            `;
        } else {
            return `
                background: ${theme.NativeSelect.idle.background};
                border: ${`solid 1px ${theme.NativeSelect.idle.borderColor}`};
                box-shadow: none;
            `;
        }
    }}

    select {
        padding: 6px 12px;
        line-height: 1.4667; // results in 22px which gives the input a height of 36px;
        width: 100%;
        appearance: none;
        outline: none;
        border: none;
        background: transparent;
        font-size: ${({ theme }) => theme.NativeSelect.common.fontSize};
        font-family: ${({ theme }) => theme.NativeSelect.common.fontFamily};
        color: ${({ theme, disabled }) =>
            disabled ? theme.NativeSelect.disabled.color : theme.NativeSelect.idle.color};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ${StyledIcon} {
        position: absolute;
        top: 50%;
        right: 9px;
        transform: translateY(-50%);
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
