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

type FlatButtonStylesType = {
    idle: FlatButtonVariantStylesType;
    active: FlatButtonVariantStylesType;
    hover: FlatButtonVariantStylesType;
};

type ButtonVariantStylesType = {
    backgroundColor: string;
    borderColor: string;
    color: string;
    boxShadow: string;
    textDecoration: string;
};

type FlatButtonVariantStylesType = {
    backgroundColor: string;
    color: string;
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
    primary: {
        regular: ButtonStylesType;
        flat: FlatButtonStylesType;
    };
    destructive: {
        regular: ButtonStylesType;
        flat: FlatButtonStylesType;
    };
    warning: {
        regular: ButtonStylesType;
        flat: FlatButtonStylesType;
    };
    secondary: {
        regular: ButtonStylesType;
        flat: FlatButtonStylesType;
    };
    plain: {
        regular: ButtonStylesType;
        flat: FlatButtonStylesType;
    };
    disabled: {
        regular: {
            color: string;
            backgroundColor: string;
            stripingColor: string;
        };
        flat: {
            color: string;
            backgroundColor: string;
            textDecoration: string;
        };
    };
};

type ButtonPropsType = {
    compact?: PropsType['compact'];
    flat?: PropsType['flat'];
    variant: PropsType['variant'];
    icon?: PropsType['icon'];
};

const StyledButton = withProps<ButtonPropsType>(styled.button)`
    position: relative;
    appearance: none;
    border: none;
    line-height: 1;
    padding: ${({ compact }): string => (compact ? '11px 12px' : '11px 24px')};
    cursor: pointer;
    display: inline-block;
    outline: none;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, color 0.3s, box-shadow 0.1s, border 0.3s;
    user-select: none;
    text-decoration: none;
    font-family: ${({ theme }): string => theme.Button.common.fontFamily};
    font-size: ${({ theme }): string => theme.Button.common.fontSize};
    border-radius: ${({ theme }): string => theme.Button.common.borderRadius};
    border-width: ${({ theme }): string => theme.Button.common.borderWidth};
    font-weight: ${({ theme }): string => theme.Button.common.fontWeight};
    border-style: solid;

    ${({ icon }): string => (icon !== undefined ? 'display: flex; align-items: center;' : '')}

    ${({ variant, flat, theme, color }): string => {
        const subVariant = flat ? 'flat' : 'regular';

        return `
            color: ${color ? color : theme.Button[variant][subVariant].idle.color};
            background-color: ${theme.Button[variant][subVariant].idle.backgroundColor};
            text-decoration: ${theme.Button[variant][subVariant].idle.textDecoration};
            ${!flat ? `border-color: ${theme.Button[variant].regular.hover.borderColor}` : ''};
            ${!flat ? `box-shadow: ${theme.Button[variant].regular.idle.boxShadow}` : ''};

            &:hover {
                color: ${theme.Button[variant][subVariant].hover.color};
                background-color: ${theme.Button[variant][subVariant].hover.backgroundColor};
                text-decoration: ${theme.Button[variant][subVariant].hover.textDecoration};
                ${flat ? 'transform: scale(1.1);' : ''}
                ${!flat ? `border-color: ${theme.Button[variant].regular.hover.borderColor}` : ''};
                ${!flat ? `box-shadow: ${theme.Button[variant].regular.hover.boxShadow}` : ''};
            }

            &:focus {

                ${
                    !flat
                        ? `
                            color: ${theme.Button[variant].regular.focus.color};
                            background-color: ${theme.Button[variant].regular.focus.backgroundColor};
                            text-decoration: ${theme.Button[variant].regular.focus.textDecoration};
                            border-color: ${theme.Button[variant].regular.focus.borderColor};
                            box-shadow: ${theme.Button[variant].regular.focus.boxShadow};
                        `
                        : ''
                }
            }

            &:active {
                color: ${theme.Button[variant][subVariant].active.color};
                background-color: ${theme.Button[variant][subVariant].active.backgroundColor};
                text-decoration: ${theme.Button[variant][subVariant].active.textDecoration};
                ${!flat ? `border-color: ${theme.Button[variant].regular.active.borderColor}` : ''};
                ${!flat ? `box-shadow: ${theme.Button[variant].regular.active.boxShadow}` : ''};
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
        background: ${({ theme, flat }): string =>
            !flat
                ? `
            ${theme.Button.disabled.regular.backgroundColor}
            repeating-linear-gradient(
                -45deg,
                ${theme.Button.disabled.regular.stripingColor},
                ${theme.Button.disabled.regular.stripingColor} 10px,
                transparent 10px,
                transparent 20px
            );
        `
                : theme.Button.disabled.flat.backgroundColor};
        box-shadow: ${({ variant, theme, flat }): string =>
            !flat ? theme.Button[variant].regular.idle.boxShadow : ''};
        border-radius: ${({ theme }): string => theme.Button.common.borderRadius};
    }

    &:disabled {
        background: ${({ theme, flat }): string =>
            !flat ? theme.Button.disabled.regular.backgroundColor : theme.Button.disabled.flat.backgroundColor};
        border-color: transparent;
        cursor: default;
        opacity: 0.7;
        transform: none;
        color: ${({ theme }): string => theme.Button.disabled.regular.color};
        box-shadow: none;

        &::before {
            opacity: 1;
        }
    }
`;

const StyledAnchor = StyledButton.withComponent('a');

export default StyledButton;
export {
    ButtonStylesType,
    FlatButtonStylesType,
    FlatButtonVariantStylesType,
    ButtonVariantStylesType,
    ButtonThemeType,
    StyledAnchor,
};
