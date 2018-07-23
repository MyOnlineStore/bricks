import styled, { withProps } from '../../../src/utility/styled';
import _T from '../../types/ThemeType';
import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';

type SelectThemeType = {
    common: {
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
            boxShadow: string;
        };
    };
    placeholder: {
        color: string;
    };
};

type WrapperProps = {
    isOpen: boolean;
};

const StyledWrapper = withProps<WrapperProps, HTMLDivElement>(styled.div)`
    transition: all .3s;
    outline: none;
    display: inline-block;
    border: ${({ theme, isOpen }): string =>
        isOpen
            ? `solid 1px ${theme.Select.wrapper.common.borderColor}`
            : `solid 0px ${theme.Select.common.secondaryColor}`};
    margin: ${({ theme, isOpen }): string => (isOpen ? '-7px' : '0')};
    padding: ${({ theme, isOpen }): string => (isOpen ? '6px' : '0')};
    background: ${({ theme }): string => theme.Select.common.secondaryColor};
    border-bottom: none;
    position: relative;
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
    ${({ isOpen }): string =>
        isOpen
            ? `
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            `
            : ''}

    &:focus {
        box-shadow: ${({ theme }): string => theme.Select.wrapper.focus.boxShadow}
    }
`;

type WindowProps = {
    isOpen: boolean;
};

const StyledWindow = withProps<WindowProps, HTMLDivElement>(styled.div)`
    transition: border .3s, width .3s, left .3s;
    position: absolute;
    max-height: 240px;
    overflow: hidden;
    width: ${({ isOpen }): string => (isOpen ? '100%' : 'calc(100% - 4px)')};
    top: 100%;
    left: ${({ isOpen }): string => (isOpen ? '-1px' : '0')};
    border: ${({ theme, isOpen }): string =>
        isOpen ? `solid 1px ${theme.Select.wrapper.common.borderColor}` : 'solid 2px transparent'};
    border-top: none;
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    ${({ isOpen }): string => (!isOpen ? 'cursor: pointer' : '')};
`;

const StyledInput = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0 0 0 12px;
    border: solid 1px ${({ theme }): string => theme.Select.input.borderColor};
    background: ${({ theme }): string => theme.Select.input.background};
    border-radius: ${({ theme }): string => theme.Select.common.borderRadius};

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

export { StyledWrapper, StyledInput, StyledWindow, SelectThemeType };
