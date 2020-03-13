import styled from '../../../src/utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

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

type WrapperPropsType = {
    open: boolean;
    disabled?: boolean;
};

const INNER_OFFSET: number = 6;

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
    width: 100%;
    outline: none;
    display: inline-block;
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        z-index: -1;
        border-radius: ${({ theme }) => theme.Select.common.borderRadius};
        ${({ open }) =>
            open
                ? `
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                `
                : ''}
        border: solid ${({ theme }) => theme.Select.common.borderColor};
        border-width: ${({ open }) => (open ? `1px 1px 0` : `0`)};
        background: ${({ theme }) => theme.Select.searchWrapper.background};
        position: absolute;
        top: ${({ open }) => (open ? `-${INNER_OFFSET}px` : '0')};
        left: ${({ open }) => (open ? `-${INNER_OFFSET}px` : '0')};
        right: ${({ open }) => (open ? `-${INNER_OFFSET}px` : '0')};
        bottom: ${({ open }) => (open ? `-${INNER_OFFSET}px` : '0')};
    }
`;

const StyledCaret = styled.div`
    position: absolute;
    top: 50%;
    right: 9px;
    transform: translateY(-50%);
    z-index: 2;
`;

type WindowPropsType = {
    open: boolean;
    rect?: ClientRect;
    inputHeight?: number;
};

const StyledWindow = styled.div<WindowPropsType>`
    box-sizing: border-box;
    position: fixed;
    max-height: 240px;
    top: ${({ rect, inputHeight }) =>
        rect !== undefined && inputHeight !== undefined ? `${rect.top + INNER_OFFSET + inputHeight}px` : ''};
    left: ${({ rect }) => (rect !== undefined ? `${rect.left - INNER_OFFSET}px` : '')};
    width: ${({ rect }) => (rect !== undefined ? `${rect.width + INNER_OFFSET + 6}px` : '')};
    padding-top: ${({ open }) => (open ? '6px' : '0')};
    background: ${({ theme }) => theme.Select.common.background};
    border: ${({ theme, open }) => (open ? `solid 1px ${theme.Select.common.borderColor}` : 'solid 0px transparent')};
    border-top: none;
    border-radius: ${({ theme }) => theme.Select.common.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    ${({ open }) => (!open ? 'cursor: pointer' : '')};
    z-index: 1000;
`;

type InputPropsType = {
    open: boolean;
    focus: boolean;
    disabled: boolean;
};

const StyledInput = styled.div<InputPropsType>`
    transition: all 150ms;
    box-sizing: border-box;
    width: 100%;
    border-radius: ${({ theme }) => theme.Select.common.borderRadius};
    line-height: 1.4667; // results in 22px which gives the input a height of 36px

    ${({ theme, focus, open, disabled }) => {
        if (focus && !open && !disabled) {
            return `
                background: ${theme.Select.common.background};
                border: ${`solid 1px ${theme.Select.select.focus.borderColor}`};
                box-shadow: ${theme.Select.select.focus.boxShadow};
            `;
        } else if (disabled) {
            return `
                background: ${theme.Select.select.disabled.background};
                border: ${`solid 1px ${theme.Select.select.disabled.borderColor}`};
                box-shadow: none;
            `;
        } else {
            return `
                background: ${theme.Select.common.background};
                border: ${`solid 1px ${theme.Select.common.borderColor}`};
                box-shadow: none;
            `;
        }
    }}

    input {
        appearance: none;
        outline: none;
        border: none;
        padding: 0;
        background: transparent;
        font-size: ${({ theme }) => theme.Select.common.fontSize};
        font-family: ${({ theme }) => theme.Select.common.fontFamily};
        color: ${({ theme }) => theme.Select.select.idle.color};
        line-height: 1.4667; // results in 22px which gives the input a height of 36px
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::placeholder {
            font-style: italic;
            color: ${({ theme }) => theme.Select.select.focus.placeholderColor};
            opacity: 1;
        }

        &::-moz-placeholder {
            opacity: 1;
        }
    }
`;

type SelectionProps = {
    disabled?: boolean;
};

const StyledSelection = styled.div<SelectionProps>`
    font-family: ${({ theme }) => theme.Select.common.fontFamily};
    font-size: ${({ theme }) => theme.Select.common.fontSize};
    color: ${({ theme, disabled }) => (disabled ? theme.Select.select.disabled.color : theme.Select.select.idle.color)};
    line-height: 1.4667; // results in 22px which gives the input a height of 36px
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

export {
    StyledWrapper,
    StyledInput,
    StyledWindow,
    SelectThemeType,
    StyledPlaceholder,
    StyledSelection,
    StyledCaret,
    composeSelectTheme,
};
