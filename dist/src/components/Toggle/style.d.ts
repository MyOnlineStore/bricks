import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type StyledToggleType = {
    checked: boolean;
    disabled: boolean;
    error: boolean;
};
declare type StyledToggleSkinType = {
    checked: boolean;
    error: boolean;
    elementFocus: boolean;
};
declare type ToggleThemeType = {
    general: {
        background: string;
    };
    idle: {
        background: string;
        border: string;
    };
    focus: {
        boxShadow: string;
    };
    checked: {
        background: string;
        border: string;
    };
    idleDisabled: {
        background: string;
    };
    checkedDisabled: {
        background: string;
    };
    error: {
        border: string;
    };
};
declare const StyledToggle: _S<StyledToggleType & _R.HTMLProps<HTMLInputElement>, _T, StyledToggleType & _R.HTMLProps<HTMLInputElement>>;
declare const StyledToggleSkin: _S<StyledToggleSkinType & _R.HTMLProps<HTMLDivElement>, _T, StyledToggleSkinType & _R.HTMLProps<HTMLDivElement>>;
declare const StyledToggleWrapper: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export default StyledToggle;
export { StyledToggleWrapper, ToggleThemeType, StyledToggleSkin, StyledToggleType };
