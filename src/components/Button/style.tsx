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
    loading?: PropsType['compact'];
    flat?: PropsType['flat'];
    variant: PropsType['variant'];
    icon?: PropsType['icon'];
};

const StyledButton = withProps<ButtonPropsType>(styled.button)`
    border: none;
    outline: none;
    line-height: 1;
    cursor: pointer;
    appearance: none;
    user-select: none;
    position: relative;
    text-decoration: none;
    display: inline-block;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, box-shadow 0.1s, border 0.3s;
    padding: ${({ compact }): string => (compact ? '11px 12px' : '11px 24px')};
    font-family: ${({ theme }): string => theme.Button.common.fontFamily};
    font-size: ${({ theme }): string => theme.Button.common.fontSize};
    border-radius: ${({ theme }): string => theme.Button.common.borderRadius};
    border-width: ${({ theme }): string => theme.Button.common.borderWidth};
    font-weight: ${({ theme }): string => theme.Button.common.fontWeight};
    border-style: solid;

    ${({ icon }): string => (icon !== undefined ? 'display: flex; align-items: center;' : '')}

    ${({ variant, flat, theme, color, loading }): string => {
        const subVariant = flat ? 'flat' : 'regular';

        return `
            color: ${color ? color : theme.Button[variant][subVariant].idle.color};
            background-color: ${theme.Button[variant][subVariant].idle.backgroundColor};
            text-decoration: ${theme.Button[variant][subVariant].idle.textDecoration};
            ${!flat && !loading ? `border-color: ${theme.Button[variant].regular.hover.borderColor}` : ''};
            ${!flat ? `box-shadow: ${theme.Button[variant].regular.idle.boxShadow}` : ''};

            &:hover {
                color: ${color ? color : theme.Button[variant][subVariant].hover.color};
                text-decoration: ${theme.Button[variant][subVariant].hover.textDecoration};
                ${!loading ? `background-color: ${theme.Button[variant][subVariant].hover.backgroundColor}` : ''};
                ${!flat && !loading ? `border-color: ${theme.Button[variant].regular.hover.borderColor}` : ''};
                ${!flat && !loading ? `box-shadow: ${theme.Button[variant].regular.hover.boxShadow}` : ''};
            }

            &:focus {
                ${
                    !flat && !loading
                        ? `
                            color: ${color ? color : theme.Button[variant].regular.focus.color};
                            background-color: ${theme.Button[variant].regular.focus.backgroundColor};
                            text-decoration: ${theme.Button[variant].regular.focus.textDecoration};
                            border-color: ${theme.Button[variant].regular.focus.borderColor};
                            box-shadow: ${theme.Button[variant].regular.focus.boxShadow};
                        `
                        : ''
                }
            }

            &:active {
                color: ${color ? color : theme.Button[variant][subVariant].active.color};
                text-decoration: ${theme.Button[variant][subVariant].active.textDecoration};
                ${!flat && !loading ? `border-color: ${theme.Button[variant].regular.active.borderColor}` : ''};
                ${!flat && !loading ? `box-shadow: ${theme.Button[variant].regular.active.boxShadow}` : ''};
                ${!loading ? `background-color: ${theme.Button[variant][subVariant].active.backgroundColor}` : ''};
            }

            ${!loading ? '&:active {transform: translateY(2px);}' : ''}
        `;
    }}

    &::before {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        z-index: -2;
        content: '';
        display: block;
        position: absolute;
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
        opacity: 0.7;
        cursor: default;
        transform: none;
        box-shadow: none;
        border-color: transparent;
        color: ${({ theme }): string => theme.Button.disabled.regular.color};
        background: ${({ theme, flat }): string =>
            !flat ? theme.Button.disabled.regular.backgroundColor : theme.Button.disabled.flat.backgroundColor};

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
