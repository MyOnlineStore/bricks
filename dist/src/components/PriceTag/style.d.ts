import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
declare type VariantType = {
    color: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
};
declare type PriceTagThemeType = {
    default: VariantType;
    action: VariantType;
    base: VariantType;
};
declare type PriceTagPropsType = {
    displayType?: PropsType['displayType'];
};
declare const StyledPriceTag: _S<PriceTagPropsType & _R.HTMLProps<HTMLSpanElement>, _T, PriceTagPropsType & _R.HTMLProps<HTMLSpanElement>>;
export default StyledPriceTag;
export { PriceTagThemeType, VariantType };
