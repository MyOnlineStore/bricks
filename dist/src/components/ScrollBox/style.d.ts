import { default as _R } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type ScrollBoxThemeType = {
    scrollbar: {
        background: string;
    };
};
declare type effectPropsType = {
    show: boolean;
};
declare const StyledWrapper: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare const StyledScrollBox: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, _T, _R.DetailedHTMLProps<_R.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare const StyledTop: _S<effectPropsType & _R.HTMLProps<HTMLDivElement>, _T, effectPropsType & _R.HTMLProps<HTMLDivElement>>;
declare const StyledBottom: _S<effectPropsType & _R.HTMLProps<HTMLDivElement>, _T, effectPropsType & _R.HTMLProps<HTMLDivElement>>;
export default StyledScrollBox;
export { StyledWrapper, ScrollBoxThemeType, StyledBottom, StyledTop };
