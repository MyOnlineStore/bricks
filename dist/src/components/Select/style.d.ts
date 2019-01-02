import _T from '../../types/ThemeType';
import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
declare type SelectThemeType = {
    common: {
        backgroundColor: string;
        secondaryColor: string;
        borderRadius: string;
    };
    input: {
        borderColor: string;
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        background: string;
    };
    wrapper: {
        common: {
            borderColor: string;
        };
        focus: {
            borderColor: string;
            boxShadow: string;
        };
    };
    placeholder: {
        color: string;
    };
    disabled: {
        chevron: string;
        color: string;
        background: string;
    };
};
declare type WrapperProps = {
    isOpen: boolean;
    isDisabled?: boolean;
};
declare const StyledPlaceholder: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
declare const StyledWrapper: _S<WrapperProps & _R.HTMLProps<HTMLDivElement>, _T, WrapperProps & _R.HTMLProps<HTMLDivElement>>;
declare type WindowProps = {
    isOpen: boolean;
    rect?: ClientRect;
    inputHeight?: number;
};
declare const StyledWindow: _S<WindowProps & _R.HTMLProps<HTMLDivElement>, _T, WindowProps & _R.HTMLProps<HTMLDivElement>>;
declare type InputProps = {
    isOpen: boolean;
    hasFocus: boolean;
    disabled: boolean;
};
declare const StyledInput: _S<InputProps & _R.HTMLProps<HTMLElement>, _T, InputProps & _R.HTMLProps<HTMLElement>>;
export { StyledWrapper, StyledInput, StyledWindow, SelectThemeType, StyledPlaceholder };
