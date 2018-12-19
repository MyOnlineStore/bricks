import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type StyledCheckboxSkinType = {
    checkedState: boolean | 'indeterminate';
    elementFocus: boolean;
    disabled?: boolean;
    error?: boolean;
};
declare type CheckboxThemeType = {
    idle: {
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
    };
    focus: {
        boxShadow: string;
    };
    checked: {
        backgroundColor: string;
        borderColor: string;
    };
    idleDisabled: {
        background: string;
    };
    checkedDisabled: {
        background: string;
    };
    error: {
        borderColor: string;
    };
};
declare const StyledCheckbox: _S<_R.HTMLProps<HTMLInputElement>, _T, _R.HTMLProps<HTMLInputElement>>;
declare const StyledCheckboxSkin: _S<StyledCheckboxSkinType & _R.HTMLProps<HTMLDivElement>, _T, StyledCheckboxSkinType & _R.HTMLProps<HTMLDivElement>>;
export { StyledCheckbox, StyledCheckboxSkin, CheckboxThemeType };
