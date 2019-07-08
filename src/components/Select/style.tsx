import styled from '../../../src/utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import chroma from 'chroma-js';

type SelectThemeType = {
    common: {
        backgroundColor: string;
        secondaryColor: string;
        borderRadius: string;
    };
    input: {
        borderColor: string;
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        background: string;
    };
    wrapper: {
        common: {
            borderColor: string;
        };
        focus: {
            borderColor: string;
            boxShadow: string;
        };
    };
    placeholder: {
        color: string;
    };
    disabled: {
        chevron: string;
        color: string;
        background: string;
    };
};

type WrapperPropsType = {
    open: boolean;
    disabled?: boolean;
};

const INNER_OFFSET: number = 6;

const StyledPlaceholder = styled.span`
    color: ${({ theme }): string => theme.Select.disabled.color};
`;

const StyledWrapper = styled.div<WrapperPropsType>`
    transition: all 0.3s;
    width: 100%;
    outline: none;
    display: inline-block;
    position: relative;
    background: ${({ theme }): string => theme.Select.common.backgroundColor};
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
    box-shadow: none;
    z-index: 1;

    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        border-bottom: none;
        background: ${({ theme }): string => theme.Select.common.secondaryColor};
        border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
        top: ${({ open }): string => (open ? `-${INNER_OFFSET}px` : '0')};
        left: ${({ open }): string => (open ? `-${INNER_OFFSET}px` : '0')};
        right: ${({ open }): string => (open ? `-${INNER_OFFSET}px` : '0')};
        bottom: ${({ open }): string => (open ? `-${INNER_OFFSET}px` : '0')};

        ${({ open, theme }): string => {
            if (open) {
                return `
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: solid 1px ${theme.Select.wrapper.common.borderColor}
                `;
            }

            return `border: solid 0px ${theme.Select.common.secondaryColor}`;
        }}
    }

    ${({ theme, disabled, open }): string => {
        return !disabled || !open
            ? `&:focus {
                box-shadow: ${theme.Select.wrapper.focus.boxShadow};
            }`
            : '';
    }}
`;

type WindowPropsType = {
    open: boolean;
    zIndex?: number;
    rect?: ClientRect;
    inputHeight?: number;
};

const StyledWindow = styled.div<WindowPropsType>`
    box-sizing: border-box;
    position: fixed;
    max-height: 240px;
    top: ${({ rect, inputHeight }): string =>
        rect !== undefined && inputHeight !== undefined ? `${rect.top + INNER_OFFSET + inputHeight}px` : ''};
    left: ${({ rect }): string => (rect !== undefined ? `${rect.left - INNER_OFFSET}px` : '')};
    width: ${({ rect }): string => (rect !== undefined ? `${rect.width + INNER_OFFSET + 6}px` : '')};
    padding-top: ${({ open }): string => (open ? '6px' : '0')};
    background: ${({ theme }): string => theme.Select.common.backgroundColor};
    border: ${({ theme, open }): string =>
        open ? `solid 1px ${theme.Select.wrapper.common.borderColor}` : 'solid 0px transparent'};
    border-top: none;
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    ${({ open }): string => (!open ? 'cursor: pointer' : '')};
    z-index: ${({ zIndex }): number => (zIndex ? zIndex : 1000)};
`;

type InputPropsType = {
    open: boolean;
    hasFocus: boolean;
    disabled: boolean;
};

const StyledInput = styled.div<InputPropsType>`
    transition: all 300ms;
    box-sizing: border-box;
    width: 100%;
    border: solid 1px
        ${({ theme, hasFocus, open }): string =>
            hasFocus && !open ? theme.Select.wrapper.focus.borderColor : theme.Select.input.borderColor};
    background: ${({ theme, disabled }): string =>
        disabled ? theme.Select.disabled.background : theme.Select.input.background};
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
    opacity: ${({ disabled }): string => (disabled ? '0.7' : '1')};

    input {
        appearance: none;
        outline: none;
        border: none;
        flex-grow: 1;
        color: ${({ theme }): string => theme.Select.input.color};
        font-size: ${({ theme }): string => theme.Select.input.fontSize};
        font-family: ${({ theme }): string => theme.Select.input.fontFamily};

        &::placeholder {
            color: ${({ theme }): string => theme.Select.placeholder.color};
        }
    }
`;

const composeSelectTheme = (themeTools: ThemeTools): SelectThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        common: {
            backgroundColor: colors.silver.lighter1,
            secondaryColor: colors.silver.base,
            borderRadius: themeTools.calculateRoundness(20),
        },
        wrapper: {
            common: {
                borderColor: colors.silver.darker4,
            },
            focus: {
                borderColor: colors.primary.base,
                boxShadow: `0 0 0 4px ${chroma(colors.primary.base).alpha(0.4)}`,
            },
        },
        input: {
            background: colors.silver.lighter1,
            borderColor: colors.silver.darker4,
            color: colors.primary.base,
            fontFamily: text.primaryFont,
            fontSize: text.fontSize.base,
            fontWeight: '400',
        },
        placeholder: {
            color: colors.silver.darker4,
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

export { StyledWrapper, StyledInput, StyledWindow, SelectThemeType, StyledPlaceholder, composeSelectTheme };
