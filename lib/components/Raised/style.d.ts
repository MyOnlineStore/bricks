import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type RaisedLevelThemeType = {
    boxShadow: string;
};
declare type RaisedThemeType = {
    level0: RaisedLevelThemeType;
    level1: RaisedLevelThemeType;
    level2: RaisedLevelThemeType;
    [key: string]: RaisedLevelThemeType;
};
declare type RaisedPropsType = {
    level: 0 | 1 | 2;
};
declare const StyledRaised: _S<RaisedPropsType & _R.HTMLProps<HTMLElement>, _T, RaisedPropsType & _R.HTMLProps<HTMLElement>>;
export default StyledRaised;
export { RaisedLevelThemeType, RaisedThemeType, RaisedPropsType };
