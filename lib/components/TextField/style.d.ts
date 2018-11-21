import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import SeverityType from '../../types/_SeverityType';
import _T from '../../types/ThemeType';
declare type TextFieldThemeType = {
    idle: {
        common: {
            borderRadius: string;
            borderColor: string;
            fontSize: string;
            fontFamily: string;
            color: string;
            background: string;
        };
        affix: {
            color: string;
            background: string;
        };
    };
    focus: {
        borderColor: string;
    };
    severity: {
        error: {
            boxShadow: string;
        };
        success: {
            boxShadow: string;
        };
        info: {
            boxShadow: string;
        };
        warning: {
            boxShadow: string;
        };
    };
    disabled: {
        color: string;
        background: string;
    };
};
declare type AffixProps = {
    disabled?: boolean;
};
declare type WrapperProps = {
    focus: boolean;
    disabled?: boolean;
    severity: SeverityType;
};
declare type InputProps = {
    disabled?: boolean;
};
declare const StyledInput: _S<InputProps & _R.HTMLProps<HTMLInputElement>, _T, InputProps & _R.HTMLProps<HTMLInputElement>>;
declare const StyledAffixWrapper: _S<AffixProps & _R.HTMLProps<HTMLDivElement>, _T, AffixProps & _R.HTMLProps<HTMLDivElement>>;
declare const StyledAffix: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
declare const StyledWrapper: _S<WrapperProps & _R.HTMLProps<HTMLDivElement>, _T, WrapperProps & _R.HTMLProps<HTMLDivElement>>;
export { StyledWrapper, StyledInput, TextFieldThemeType, StyledAffix, StyledAffixWrapper };
