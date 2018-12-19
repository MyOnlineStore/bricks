import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import SeverityType from '../../types/SeverityType';
declare type BadgePropsType = {
    severity?: SeverityType;
};
declare type BadgeThemeType = {
    default: {
        color: string;
    };
    severity: {
        error: VariantStyleType;
        success: VariantStyleType;
        warning: VariantStyleType;
        info: VariantStyleType;
    };
};
declare type VariantStyleType = {
    backgroundColor: string;
};
declare const StyledBadge: _S<BadgePropsType & _R.HTMLProps<HTMLElement>, _T, BadgePropsType & _R.HTMLProps<HTMLElement>>;
export default StyledBadge;
export { BadgePropsType, BadgeThemeType };
