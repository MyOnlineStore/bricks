import { default as _R } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type AnimationStateType = 'entering' | 'entered' | 'exiting' | 'exited';
declare type StyledPropsType = {
    animation: 'zoom' | 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
    state: AnimationStateType;
};
declare const StyledAnimation: _S<_R.ClassAttributes<HTMLDivElement> & _R.HTMLAttributes<HTMLDivElement> & StyledPropsType, _T, _R.ClassAttributes<HTMLDivElement> & _R.HTMLAttributes<HTMLDivElement> & StyledPropsType>;
export default StyledAnimation;
export { AnimationStateType, StyledPropsType };
