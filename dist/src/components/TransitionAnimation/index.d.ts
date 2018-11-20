import { SFC } from 'react';
import { StyledPropsType } from './style';
declare type PropsType = {
    show: boolean;
    animation: StyledPropsType['animation'];
    stayMounted?: boolean;
};
declare const TransitionAnimation: SFC<PropsType>;
export default TransitionAnimation;
export { PropsType };
