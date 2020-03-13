import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import StyledIcon from '../Icon/style';

type NativeSelectThemeType = {
    idle: {
        borderRadius: string;
        borderColor: string;
        color: string;
        fontFamily: string;
        fontSize: string;
        background: string;
        caret: string;
    };
    focus: {
        borderColor: string;
        boxShadow: string;
    };
    disabled: {
        caret: string;
        color: string;
        background: string;
        borderColor: string;
    };
};

type SelectPropsType = {
    focus: boolean;
    disabled?: boolean;
};

const StyledSelect = styled.div<SelectPropsType>`
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    width: 100%;
    border-radius: ${({ theme }): string => theme.NativeSelect.idle.borderRadius};

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
        line-height: 1.572;
        width: 100%;
        appearance: none;
        outline: none;
        border: none;
        background: transparent;
        font-size: ${({ theme }) => theme.NativeSelect.idle.fontSize};
        font-family: ${({ theme }) => theme.NativeSelect.idle.fontFamily};
        color: ${({ theme, disabled }) =>
            disabled ? theme.NativeSelect.disabled.color : theme.NativeSelect.idle.color};
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
        idle: {
            borderRadius: themeTools.calculateRoundness(20),
            background: forms.background,
            borderColor: forms.borderColor,
            color: forms.color,
            fontFamily: text.primaryFont,
            fontSize: text.fontSize.base,
            caret: forms.color,
        },
        focus: {
            borderColor: colors.primary.base,
            boxShadow: `0 0 0 4px ${chroma(colors.primary.base).alpha(0.4)}`,
        },
        disabled: {
            caret: colors.grey.lighter2,
            color: colors.grey.lighter2,
            background: colors.silver.base,
            borderColor: colors.silver.darker2,
        },
    };
};

export { StyledSelect, NativeSelectThemeType, composeNativeSelectTheme };
