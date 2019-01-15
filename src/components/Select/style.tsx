import styled from '../../../src/utility/_styled';

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
    isOpen: boolean;
    isDisabled?: boolean;
};

const INNER_OFFSET: number = 6;

const StyledPlaceholder = styled.span`
    color: ${({ theme }): string => theme.Select.disabled.color};
`;

const StyledWrapper = styled.div<WrapperPropsType>`
    transition: all .3s;
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
        border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
        ${({ isOpen }): string =>
            isOpen
                ? `
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                `
                : ''}
        border: ${({ theme, isOpen }): string =>
            isOpen
                ? `solid 1px ${theme.Select.wrapper.common.borderColor}`
                : `solid 0px ${theme.Select.common.secondaryColor}`};
        border-bottom: none;
        background: ${({ theme }): string => theme.Select.common.secondaryColor};
        position: absolute;
        top: ${({ isOpen }): string => (isOpen ? `-${INNER_OFFSET}px` : '0')};
        left: ${({ isOpen }): string => (isOpen ? `-${INNER_OFFSET}px` : '0')};
        right: ${({ isOpen }): string => (isOpen ? `-${INNER_OFFSET}px` : '0')};
        bottom: ${({ isOpen }): string => (isOpen ? `-${INNER_OFFSET}px` : '0')};
    }

    ${({ theme, isDisabled, isOpen }): string => {
        return !isDisabled || !isOpen
            ? `&:focus {
                box-shadow: ${theme.Select.wrapper.focus.boxShadow};
            }`
            : '';
    }}
    `;

type WindowPropsType = {
    isOpen: boolean;
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
    padding-top: ${({ isOpen }): string => (isOpen ? '6px' : '0')};
    background: ${({ theme }): string => theme.Select.common.backgroundColor};
    border: ${({ theme, isOpen }): string =>
        isOpen ? `solid 1px ${theme.Select.wrapper.common.borderColor}` : 'solid 0px transparent'};
    border-top: none;
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    ${({ isOpen }): string => (!isOpen ? 'cursor: pointer' : '')};
    z-index: 1000;
`;

type InputPropsType = {
    isOpen: boolean;
    hasFocus: boolean;
    disabled: boolean;
};

const StyledInput = styled.div<InputPropsType>`
    transition: all 0.3s;
    box-sizing: border-box;
    width: 100%;
    border: solid 1px
        ${({ theme, hasFocus, isOpen }): string =>
            hasFocus && !isOpen ? theme.Select.wrapper.focus.borderColor : theme.Select.input.borderColor};
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
        color: ${({ theme }): string => theme.Select.input.fontFamily};

        &::placeholder {
            color: ${({ theme }): string => theme.Select.placeholder.color};
        }
    }
`;

export { StyledWrapper, StyledInput, StyledWindow, SelectThemeType, StyledPlaceholder };
