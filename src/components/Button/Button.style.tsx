import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import ButtonTemplate from './Button.template';

type ButtonStylesType = {
    idle:{
        fontFamily:string;
        fontSize:string;
        backgroundColor:string;
        borderRadius:string;
        borderWidth:string;
        borderColor:string;
        color:string;
    };
    active:ButtonVariantStylesType;
    focus:ButtonVariantStylesType;
    hover:ButtonVariantStylesType;
};

type ButtonVariantStylesType = {
    backgroundColor:string;
    borderColor:string;
    color:string;
};

type ButtonThemeType = {
    primary:ButtonStylesType;
    secondary:ButtonStylesType;
    destructive:ButtonStylesType;
    warning:ButtonStylesType;
    disabled:{
        color:string;
        backgroundColor:string;

        lines:{
            background:string;
        };
    };
};

const applyTheme = (buttonTheme:ButtonStylesType):string => {
    return `
        font-family: ${buttonTheme.idle.fontFamily};
        font-size: ${buttonTheme.idle.fontSize};
        background-color: ${buttonTheme.idle.backgroundColor};
        border-radius: ${buttonTheme.idle.borderRadius};
        border: solid ${buttonTheme.idle.borderWidth} ${buttonTheme.idle.borderColor};
        color: ${buttonTheme.idle.color};

        &:hover {
            background-color: ${buttonTheme.hover.backgroundColor};
            border-color: ${buttonTheme.hover.borderColor};
            color: ${buttonTheme.hover.color};
        }

        &:focus {
            background-color: ${buttonTheme.focus.backgroundColor};
            border-color: ${buttonTheme.focus.borderColor};
            color: ${buttonTheme.focus.color};
        }

        &:active {
            background-color: ${buttonTheme.active.backgroundColor};
            border-color: ${buttonTheme.active.borderColor};
            color: ${buttonTheme.active.color};
        }
    `;
};

const Button = styled(ButtonTemplate)`
    position: relative;
    appearance: none;
    border: none;
    line-height: 1;
    padding: 11px 35px;
    box-shadow: 0 6px 3px -5px rgba(51, 55, 64, .3);
    cursor: pointer;
    display: inline-block;
    outline: none;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform .1s, background .3s, color .3s, box-shadow .1s, border .3s;
    user-select: none;
    text-decoration: none;

    ${({ variant, theme }):string => {
        switch (variant) {
            case 'secondary': return applyTheme(theme.Button.secondary);
            case 'destructive': return applyTheme(theme.Button.destructive);
            case 'warning': return applyTheme(theme.Button.warning);
            default: return applyTheme(theme.Button.primary);
        }
    }}

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 9px 3px -6px rgba(51, 55, 64 ,.3);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 3px -2px rgba(51, 55, 64 ,.3);
    }

    &:focus {
        transform: translateY(-2px);
        box-shadow: 0 9px 3px -6px rgba(51, 55, 64 ,.3);
    }

    &::before {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        content: '';
        opacity: 0;
        transition: opacity .3s;
        background: ${({ theme }):string => theme.Button.disabled.lines.background}
    }

    &:disabled {
        background: ${({ theme }):string => theme.Button.disabled.backgroundColor}
        border: 1px solid transparent;
        box-shadow: none;
        cursor: default;
        opacity: .7;
        transform: none;
        color: ${({ theme }):string => theme.Button.disabled.color};

        &::before {
            opacity: 1;
        }
    }
`;

export default Button;
export {
    ButtonStylesType,
    ButtonVariantStylesType,
    ButtonThemeType,
};
