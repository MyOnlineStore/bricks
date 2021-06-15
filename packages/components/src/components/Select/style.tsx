import styled from '../../../src/utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';
import { box, flex } from '../../utility/box';

type SelectThemeType = {
    common: {
        fontFamily: string;
        fontSize: string;
        background: string;
        borderColor: string;
        borderRadius: string;
    };
    select: {
        idle: {
            color: string;
            caretColor: string;
            placeholderColor: string;
        };
        focus: {
            borderColor: string;
            boxShadow: string;
            placeholderColor: string;
        };
        disabled: {
            background: string;
            borderColor: string;
            color: string;
            caretColor: string;
            placeholderColor: string;
        };
    };
    option: {
        hover: {
            background: string;
        };
    };
    searchWrapper: {
        background: string;
    };
};

type WrapperPropsType = typeof flex.props &
    typeof box.props & {
        open: boolean;
        disabled?: boolean;
    };

export const INNER_OFFSET: number = 6;

type PlaceholderProps = {
    disabled?: boolean;
};

const StyledPlaceholder = styled.span<PlaceholderProps>`
    font-family: ${({ theme }) => theme.Select.common.fontFamily};
    font-size: ${({ theme }) => theme.Select.common.fontSize};
    font-style: italic;
    color: ${({ theme, disabled }) =>
        disabled ? theme.Select.select.disabled.placeholderColor : theme.Select.select.idle.placeholderColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

const StyledWrapper = styled.div<WrapperPropsType>`
    transition: all 150ms;
    outline: none;
    display: inline-block;
    position: relative;
    flex-grow: 1;
    width: 100%;
    ${flex}
    ${box}
`;

const StyledCaret = styled.div<{ inner?: boolean }>`
    position: absolute;
    top: 50%;
    right: ${({ inner }) => (inner ? 14 : 9)}px;
    transform: translateY(-50%);
    z-index: 2;
`;

type SelectionProps = {
    disabled?: boolean;
};

const StyledSelection = styled.div<SelectionProps>`
    font-family: ${({ theme }) => theme.Select.common.fontFamily};
    font-size: ${({ theme }) => theme.Select.common.fontSize};
    color: ${({ theme, disabled }) => (disabled ? theme.Select.select.disabled.color : theme.Select.select.idle.color)};
    line-height: 1.6; // results in 24px with 15px fontSize
    transition: color 150ms;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
`;

const composeSelectTheme = (themeTools: ThemeTools): SelectThemeType => {
    const { colors, text, forms } = themeTools.themeSettings;

    return {
        common: {
            fontFamily: text.primaryFont,
            fontSize: text.fontSize.base,
            background: forms.background,
            borderColor: forms.borderColor,
            borderRadius: themeTools.calculateRoundness(20),
        },
        select: {
            idle: {
                color: forms.color,
                caretColor: forms.color,
                placeholderColor: colors.grey.lighter1,
            },
            focus: {
                borderColor: colors.primary.base,
                boxShadow: `0 0 0 4px ${chroma(colors.primary.base).alpha(0.4)}`,
                placeholderColor: colors.grey.lighter2,
            },
            disabled: {
                background: colors.silver.base,
                borderColor: colors.silver.darker2,
                color: colors.grey.lighter2,
                caretColor: colors.grey.lighter2,
                placeholderColor: colors.grey.lighter2,
            },
        },
        option: {
            hover: {
                background: colors.silver.base,
            },
        },
        searchWrapper: {
            background: colors.silver.base,
        },
    };
};

export { StyledWrapper, SelectThemeType, StyledPlaceholder, StyledSelection, StyledCaret, composeSelectTheme };
