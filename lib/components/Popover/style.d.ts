import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PlacementType } from '.';
import _T from '../../types/ThemeType';
declare type PopoverThemeType = {
    background: string;
    borderRadius: string;
};
declare type PopoverAnchorPropsType = {
    stretch?: boolean;
};
declare const PopoverAnchor: _S<PopoverAnchorPropsType & _R.HTMLProps<HTMLDivElement>, _T, PopoverAnchorPropsType & _R.HTMLProps<HTMLDivElement>>;
declare const PopoverBackground: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare const PopoverContent: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare const PopoverWindow: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare type PopoverArrowPropsType = {
    placement: PlacementType;
    shadow?: boolean;
};
declare const PopoverArrow: _S<PopoverArrowPropsType & _R.HTMLProps<HTMLDivElement>, _T, PopoverArrowPropsType & _R.HTMLProps<HTMLDivElement>>;
export { PopoverAnchor, PopoverArrow, PopoverBackground, PopoverContent, PopoverWindow, PopoverThemeType };
