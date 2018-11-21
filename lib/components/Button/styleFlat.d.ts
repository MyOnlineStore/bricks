import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import { PropsType as BareButtonPropsType } from './BareButton';
declare type ButtonPropsType = BareButtonPropsType & {
    variant: 'primary' | 'destructive';
};
declare const StyledFlat: _S<BareButtonPropsType & {
    variant: "primary" | "destructive";
} & _R.HTMLProps<HTMLElement>, _T, BareButtonPropsType & {
    variant: "primary" | "destructive";
} & _R.HTMLProps<HTMLElement>>;
export default StyledFlat;
export { ButtonPropsType };
