import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import RecursivePartialType from '../../types/RecursivePartialType';
import ThemeType from '../../types/ThemeType';
declare type ContrastThemeType = {
    overides: RecursivePartialType<ThemeType>;
    default: {
        background: string;
    };
};
declare const StyledContrast: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeType, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export default StyledContrast;
export { ContrastThemeType };
