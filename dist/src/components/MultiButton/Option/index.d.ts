import { SFC } from 'react';
declare type PropsType = {
    isSelected: boolean;
    onClick(): void;
};
declare type StateType = {
    hovering: boolean;
};
declare const Option: SFC<PropsType>;
export default Option;
export { PropsType, StateType };
