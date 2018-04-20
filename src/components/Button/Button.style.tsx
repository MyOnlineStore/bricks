import { StyledComponentClass } from 'styled-components';
import ButtonThemeType from '../../themes/types/ButtonThemeType';
import ThemeType from '../../themes/types/ThemeType';
import styled from '../../utility/styled';
import ButtonTemplate, { PropsType } from './Button.template';

const applyTheme = (buttonTheme:ButtonThemeType):string => {
    return `
        background-color: ${buttonTheme.backgroundColor.default};
        border-radius: ${buttonTheme.borderRadius};
        border: solid ${buttonTheme.borderWidth} ${buttonTheme.borderColor.default};
        color: ${buttonTheme.color.default};

        &:hover {
            background-color: ${buttonTheme.backgroundColor.hover};
            border-color: ${buttonTheme.borderColor.hover};
            color: ${buttonTheme.color.hover};
        }

        &:focus {
            background-color: ${buttonTheme.backgroundColor.focus};
            border-color: ${buttonTheme.borderColor.focus};
            color: ${buttonTheme.color.focus};
        }

        &:active {
            background-color: ${buttonTheme.backgroundColor.active};
            border-color: ${buttonTheme.borderColor.active};
            color: ${buttonTheme.color.active};
        }
    `;
};

const Button:StyledComponentClass<PropsType, ThemeType> = styled(ButtonTemplate)`
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
    font-family: ${({ theme }):string => theme.fontFamily};
    font-size: ${({ theme }):string => theme.fontSize};

    ${({ variant, theme }):string => {
        switch (variant) {
            case 'secondary': return applyTheme(theme.button.secondary);
            case 'destructive': return applyTheme(theme.button.destructive);
            case 'warning': return applyTheme(theme.button.warning);
            default: return applyTheme(theme.button.primary);
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
        background: repeating-linear-gradient(
            -45deg,
            ${({ theme }):string => theme.buttonDisabled.backgroundColor2},
            ${({ theme }):string => theme.buttonDisabled.backgroundColor2} 20px,
            transparent 20px,
            transparent 40px
        );
    }

    &:disabled {
        background: ${({ theme }):string => theme.buttonDisabled.backgroundColor1}
        border: 1px solid transparent;
        box-shadow: none;
        cursor: default;
        opacity: .7;
        transform: none;
        color: ${({ theme }):string => theme.buttonDisabled.color};

        &::before {
            opacity: 1;
        }
    }
`;

export default Button;
