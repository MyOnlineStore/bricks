import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type RadioButtonPropsType = {
    checked: boolean;
};
declare type RadioButtonSkinPropsType = {
    checked: boolean;
    disabled?: boolean;
    error?: boolean;
    elementFocus: boolean;
};
declare type RadioButtonThemeType = {
    idle: {
        boxShadow: string;
        borderColor: string;
        backgroundColor: string;
    };
    idleDisabled: {
        background: string;
    };
    active: {
        boxShadow: string;
        borderColor: string;
        background: string;
    };
    activeDisabled: {
        boxShadow: string;
        background: string;
    };
    focus: {
        boxShadow: string;
    };
    error: {
        borderColor: string;
    };
};
declare const StyledRadioWrapper: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare const StyledRadioButton: _S<RadioButtonPropsType & _R.HTMLProps<HTMLInputElement>, _T, RadioButtonPropsType & _R.HTMLProps<HTMLInputElement>>;
declare const StyledRadioButtonSkin: _S<RadioButtonSkinPropsType & _R.HTMLProps<HTMLDivElement>, _T, RadioButtonSkinPropsType & _R.HTMLProps<HTMLDivElement>>;
export default StyledRadioButton;
export { StyledRadioButton, StyledRadioButtonSkin, StyledRadioWrapper, RadioButtonThemeType };
