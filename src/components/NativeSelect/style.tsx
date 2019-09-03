import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import chroma from 'chroma-js';
import StyledIcon from '../Icon/style';

type NativeSelectThemeType = {
    input: {
        borderRadius: string;
        borderColor: string;
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        background: string;
        focus: {
            borderColor: string;
            boxShadow: string;
        };
    };
    disabled: {
        chevron: string;
        color: string;
        background: string;
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

    border: solid 1px
        ${({ theme, focus }): string =>
            focus ? theme.NativeSelect.input.focus.borderColor : theme.NativeSelect.input.borderColor};
    background: ${({ theme, disabled }): string =>
        disabled ? theme.NativeSelect.disabled.background : theme.NativeSelect.input.background};
    border-radius: ${({ theme }): string => theme.NativeSelect.input.borderRadius};
    box-shadow: ${({ theme, focus }): string => (focus ? theme.NativeSelect.input.focus.boxShadow : 'none')};

    select {
        padding: 6px 12px;
        line-height: 1.572;
        width: 100%;
        appearance: none;
        outline: none;
        border: none;
        background: transparent;

        color: ${({ theme }): string => theme.NativeSelect.input.color};
        font-size: ${({ theme }): string => theme.NativeSelect.input.fontSize};
        font-family: ${({ theme }): string => theme.NativeSelect.input.fontFamily};
        color: ${({ theme }): string => theme.NativeSelect.input.fontFamily};
    }

    ${StyledIcon} {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
    }
`;

const composeNativeSelectTheme = (themeTools: ThemeTools): NativeSelectThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        input: {
            borderRadius: themeTools.calculateRoundness(20),
            background: colors.silver.lighter1,
            borderColor: colors.silver.darker4,
            color: colors.primary.base,
            fontFamily: text.primaryFont,
            fontSize: text.fontSize.base,
            fontWeight: '400',
            focus: {
                borderColor: colors.primary.base,
                boxShadow: `0 0 0 4px ${chroma(colors.primary.base).alpha(0.4)}`,
            },
        },
        disabled: {
            chevron: colors.grey.lighter2,
            color: colors.grey.lighter2,
            background: `${colors.silver.base} repeating-linear-gradient( -45deg, ${colors.silver.base}, ${
                colors.silver.base
            } 10px, transparent 10px, transparent 20px )`,
        },
    };
};

export { StyledSelect, NativeSelectThemeType, composeNativeSelectTheme };
