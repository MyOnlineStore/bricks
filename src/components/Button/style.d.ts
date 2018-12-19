import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
declare type ButtonStylesType = {
    idle: ButtonVariantStylesType;
    active: ButtonVariantStylesType;
    focus: ButtonVariantStylesType;
    hover: ButtonVariantStylesType;
};
declare type FlatButtonStylesType = {
    idle: FlatButtonVariantStylesType;
    active: FlatButtonVariantStylesType;
    hover: FlatButtonVariantStylesType;
};
declare type ButtonVariantStylesType = {
    backgroundColor: string;
    borderColor: string;
    color: string;
    boxShadow: string;
    textDecoration: string;
};
declare type FlatButtonVariantStylesType = {
    backgroundColor: string;
    color: string;
    textDecoration: string;
};
declare type ButtonThemeType = {
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
declare type ButtonPropsType = {
    compact?: PropsType['compact'];
    flat?: PropsType['flat'];
    variant: PropsType['variant'];
    icon?: PropsType['icon'];
};
declare const StyledButton: _S<ButtonPropsType & _R.HTMLProps<HTMLElement>, _T, ButtonPropsType & _R.HTMLProps<HTMLElement>>;
declare const StyledAnchor: _S<_R.DetailedHTMLProps<_R.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, _T, ButtonPropsType & _R.HTMLProps<HTMLElement>>;
export default StyledButton;
export { ButtonStylesType, FlatButtonStylesType, FlatButtonVariantStylesType, ButtonVariantStylesType, ButtonThemeType, StyledAnchor, };
