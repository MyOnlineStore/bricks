import { StyledComponentClass } from 'styled-components';
import ThemeType from '../../themes/types/ThemeType';
import styled from '../../utility/styled';
import FlatButtonTemplate, { PropsType } from './FlatButton.template';

const FlatButton:StyledComponentClass<PropsType, ThemeType> = styled(FlatButtonTemplate)`
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
    background: transparent;
    border-radius: ${({ theme }):string => theme.buttonFlat.borderRadius};
    border: solid ${({ theme }):string => theme.buttonFlat.borderWidth} ${({ theme }):string => theme.buttonFlat.borderColor.default};
    color: ${({ theme }):string => theme.buttonFlat.color.default};

    &:hover {
        background-color: transparent;
        border-color: ${({ theme }):string => theme.buttonFlat.borderColor.hover};
        color: ${({ theme }):string => theme.buttonFlat.color.hover};
        transform: translateY(-2px);
        box-shadow: 0 9px 3px -6px rgba(51, 55, 64 ,.3);
    }

    &:focus {
        background-color: transparent;
        border-color: ${({ theme }):string => theme.buttonFlat.borderColor.focus};
        color: ${({ theme }):string => theme.buttonFlat.color.focus};
        transform: translateY(-2px);
        box-shadow: 0 9px 3px -6px rgba(51, 55, 64 ,.3);
    }

    &:active {
        background-color: transparent;
        border-color: ${({ theme }):string => theme.buttonFlat.borderColor.active};
        color: ${({ theme }):string => theme.buttonFlat.color.active};
        transform: translateY(0);
        box-shadow: 0 2px 3px -2px rgba(51, 55, 64 ,.3);
    }
`;

export default FlatButton;
