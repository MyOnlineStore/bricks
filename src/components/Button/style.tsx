import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type ButtonStylesType = {
    idle: ButtonVariantStylesType;
    active: ButtonVariantStylesType;
    focus: ButtonVariantStylesType;
    hover: ButtonVariantStylesType;
};

type ButtonVariantStylesType = {
    backgroundColor: string;
    borderColor: string;
    color: string;
    boxShadow: string;
    textDecoration: string;
};

type ButtonThemeType = {
    common: {
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
        borderWidth: string;
        borderRadius: string;
    };
    primary: ButtonStylesType;
    destructive: ButtonStylesType;
    warning: ButtonStylesType;
    secondary: ButtonStylesType;
    flat: ButtonStylesType;
    disabled: {
        color: string;
        backgroundColor: string;
        stripingColor: string;
    };
};

type ButtonPropsType = {
    compact?: PropsType['compact'];
    variant: PropsType['variant'];
};

const StyledButton = withProps<ButtonPropsType>(styled.button)`
    position: relative;
    appearance: none;
    border: none;
    line-height: 1;
    padding: ${({ theme, compact }): string => (compact !== undefined && compact ? '11px 12px' : '11px 24px')};
    cursor: pointer;
    display: inline-block;
    outline: none;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, color 0.3s, box-shadow 0.1s,
        border 0.3s;
    user-select: none;
    text-decoration: none;
    font-family: ${({ theme }): string => theme.Button.common.fontFamily};
    font-size: ${({ theme }): string => theme.Button.common.fontSize};
    border-radius: ${({ theme }): string => theme.Button.common.borderRadius};
    border-width: ${({ theme }): string => theme.Button.common.borderWidth};
    font-weight: ${({ theme }): string => theme.Button.common.fontWeight};
    border-style: solid;

    ${({ variant, theme }): string => {
        return `
            background-color: ${theme.Button[variant].idle.backgroundColor};
            border-color: ${theme.Button[variant].idle.borderColor};
            color: ${theme.Button[variant].idle.color};
            box-shadow: ${theme.Button[variant].idle.boxShadow};
            text-decoration: ${theme.Button[variant].idle.textDecoration};

            &:hover {
                background-color: ${theme.Button[variant].hover.backgroundColor};
                border-color: ${theme.Button[variant].hover.borderColor};
                color: ${theme.Button[variant].hover.color};
                box-shadow: ${theme.Button[variant].hover.boxShadow};
                text-decoration: ${theme.Button[variant].hover.textDecoration};
            }

            &:focus {
                background-color: ${theme.Button[variant].focus.backgroundColor};
                border-color: ${theme.Button[variant].focus.borderColor};
                color: ${theme.Button[variant].focus.color};
                box-shadow: ${theme.Button[variant].focus.boxShadow};
                text-decoration: ${theme.Button[variant].focus.textDecoration};
            }

            &:active {
                background-color: ${theme.Button[variant].active.backgroundColor};
                border-color: ${theme.Button[variant].active.borderColor};
                color: ${theme.Button[variant].active.color};
                box-shadow: ${theme.Button[variant].active.boxShadow};
                text-decoration: ${theme.Button[variant].active.textDecoration};
            }
        `;
    }} &:active {
        transform: translateY(2px);
    }

    &::before {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -2;
        content: '';
        opacity: 0;
        transition: opacity 0.3s;
        background: ${({ theme }): string => `
            ${theme.Button.disabled.backgroundColor}
            repeating-linear-gradient(
                -45deg,
                ${theme.Button.disabled.stripingColor},
                ${theme.Button.disabled.stripingColor} 10px,
                transparent 10px,
                transparent 20px
            );
        `};
        box-shadow: ${({ variant, theme }): string => theme.Button[variant].idle.boxShadow};
        border-radius: ${({ variant, theme }): string => theme.Button.common.borderRadius};
    }

    &:disabled {
        background: ${({ theme }): string => theme.Button.disabled.backgroundColor};
        border-color: transparent;
        cursor: default;
        opacity: 0.7;
        transform: none;
        color: ${({ theme }): string => theme.Button.disabled.color};
        box-shadow: none;

        &::before {
            opacity: 1;
        }
    }
`;

const StyledAnchor = StyledButton.withComponent('a');

export default StyledButton;
export { ButtonStylesType, ButtonVariantStylesType, ButtonThemeType, StyledAnchor };
