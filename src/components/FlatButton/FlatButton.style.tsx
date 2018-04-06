import { StyledComponentClass } from 'styled-components';
import ThemeType from '../../types/ThemeType';
import styled from '../../utility/styled';
import ButtonTemplate, { PropsType } from '../Button/Button.template';

const FlatButton:StyledComponentClass<PropsType, ThemeType> = styled(ButtonTemplate)`
    appearance: none;
    border: none;
    line-height: 1;
    padding: 11px 35px;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    outline: none;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, color 0.3s, box-shadow 0.1s;
    user-select: none;
    text-decoration: underline;
    font-family: ${({ theme }):string => theme.fontFamily};
    font-size: ${({ theme }):string => theme.fontSize};
    background:  ${({ theme }):string => theme.button.flat.backgroundColor.default};
    border-radius:  ${({ theme }):string => theme.button.flat.borderRadius};
    border: solid ${({ theme }):string => theme.button.flat.borderWidth} ${({ theme }):string => theme.button.flat.borderColor.default};
    color: ${({ theme }):string => theme.button.flat.color.default};

    &:hover {
        background-color: ${({ theme }):string => theme.button.flat.backgroundColor.hover};
        border-color: ${({ theme }):string => theme.button.flat.borderColor.hover};
        color: ${({ theme }):string => theme.button.flat.color.hover};
        transform: translateY(-2px);
        box-shadow: 0 9px 3px -6px rgba(51, 55, 64 ,.3);
    }

    &:focus {
        background-color: ${({ theme }):string => theme.button.flat.backgroundColor.focus};
        border-color: ${({ theme }):string => theme.button.flat.borderColor.focus};
        color: ${({ theme }):string => theme.button.flat.color.focus};
        transform: translateY(-2px);
        box-shadow: 0 9px 3px -6px rgba(51, 55, 64 ,.3);
    }

    &:active {
        background-color: ${({ theme }):string => theme.button.flat.backgroundColor.active};
        border-color: ${({ theme }):string => theme.button.flat.borderColor.active};
        color: ${({ theme }):string => theme.button.flat.color.active};
        transform: translateY(0);
        box-shadow: 0 2px 3px -2px rgba(51, 55, 64 ,.3);
    }
`;

export default FlatButton;
