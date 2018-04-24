import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import FlatButtonTemplate from './FlatButton.template';

type FlatButtonThemeType = {
    idle:{
        borderColor:string;
        borderRadius:string;
        borderWidth:string;
        color:string;
        fontFamily:string;
        fontSize:string;
    };
    hover:{
        borderColor:string;
        color:string;
    };
    focus:{
        borderColor:string;
        color:string;
    };
    active:{
        borderColor:string;
        color:string;
    };
};

const FlatButton = styled(FlatButtonTemplate)`
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
    font-family: ${({ theme }):string => theme.FlatButton.idle.fontFamily};
    font-size: ${({ theme }):string => theme.FlatButton.idle.fontSize};
    background: transparent;
    border-radius: ${({ theme }):string => theme.FlatButton.idle.borderRadius};
    border: solid ${({ theme }):string => theme.FlatButton.idle.borderWidth} ${({ theme }):string => theme.FlatButton.idle.borderColor};
    color: ${({ theme }):string => theme.FlatButton.idle.color};

    &:hover {
        background-color: transparent;
        border-color: ${({ theme }):string => theme.FlatButton.hover.borderColor};
        color: ${({ theme }):string => theme.FlatButton.hover.color};
        transform: translateY(-2px);
        box-shadow: 0 9px 3px -6px rgba(51, 55, 64 ,.3);
    }

    &:focus {
        background-color: transparent;
        border-color: ${({ theme }):string => theme.FlatButton.focus.borderColor};
        color: ${({ theme }):string => theme.FlatButton.hover.color};
        transform: translateY(-2px);
        box-shadow: 0 9px 3px -6px rgba(51, 55, 64 ,.3);
    }

    &:active {
        background-color: transparent;
        border-color: ${({ theme }):string => theme.FlatButton.active.borderColor};
        color: ${({ theme }):string => theme.FlatButton.active.color};
        transform: translateY(0);
        box-shadow: 0 2px 3px -2px rgba(51, 55, 64 ,.3);
    }
`;

export default FlatButton;
export {
    FlatButtonThemeType,
};
