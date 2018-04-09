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
    appearance: none;
    border: none;
    line-height: 1;
    padding: 11px 35px;
    box-shadow: 0 6px 3px -5px rgba(51, 55, 64 ,.3);
    cursor: pointer;
    display: inline-block;
    outline: none;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, color 0.3s, box-shadow 0.1s;
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

    &[disabled] {
        cursor: default;
        opacity: .7;
        transform: scale(1);
        color: ${({ theme }):string => theme.button.secondary.color.default};
        background:
            ${({ theme }):string => theme.button.secondary.backgroundColor.default}
            repeating-linear-gradient(
                -45deg,
                rgba(0, 0, 0, .05),
                rgba(0, 0, 0, .05) 20px,
                transparent 20px,
                transparent 40px
            );
        border: 0;
        padding: 12px 36px;
        box-shadow: none;
    }
`;

export default Button;
