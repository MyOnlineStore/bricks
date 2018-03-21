import { StyledComponentClass } from 'styled-components';
import { ThemeType } from '../../themes';
import styled from '../../utility/styled/styled';
import ButtonTemplate, { PropsType } from './Button.template';

const applyTheme = (
    backgroundColor:string,
    borderRadius:string,
    borderWidth:string,
    borderColor:string,
    color:string
):string => {
    return `
        background-color: ${backgroundColor};
        border-radius: ${borderRadius};
        border: solid ${borderWidth} ${borderColor};
        color: ${color};

        &:hover {
            color: ${color};
        }
    `;
};

const Button:StyledComponentClass<PropsType, ThemeType> = styled(ButtonTemplate)`
    appearance: none;
    border: none;
    line-height: 1;
    padding: 11px 35px;
    box-shadow: 0 9px 3px -5px rgba(51, 55, 64 ,.3);
    cursor: pointer;
    display: inline-block;
    outline: none;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, color 0.3s, box-shadow 0.1s;
    user-select: none;
    text-decoration: none;
    font-family: ${({ theme }):string => theme.fontFamily}
    font-size: ${({ theme }):string => theme.fontSize}

    ${({ variant, theme }):string => {
        switch (variant) {
            case 'secondary': return applyTheme(
                theme.buttonSecondaryBackgroundColor,
                theme.buttonSecondaryBorderRadius,
                theme.buttonSecondaryBorderWidth,
                theme.buttonSecondaryBorderColor,
                theme.buttonSecondaryColor,
            );
            case 'destructive': return applyTheme(
                theme.buttonDestructiveBackgroundColor,
                theme.buttonDestructiveBorderRadius,
                theme.buttonDestructiveBorderWidth,
                theme.buttonDestructiveBorderColor,
                theme.buttonDestructiveColor,
            );
            case 'warning': return applyTheme(
                theme.buttonWarningBackgroundColor,
                theme.buttonWarningBorderRadius,
                theme.buttonWarningBorderWidth,
                theme.buttonWarningBorderColor,
                theme.buttonWarningColor,
            );
            default: return applyTheme(
                theme.buttonPrimaryBackgroundColor,
                theme.buttonPrimaryBorderRadius,
                theme.buttonPrimaryBorderWidth,
                theme.buttonPrimaryBorderColor,
                theme.buttonPrimaryColor,
            );
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
`;

export default Button;
