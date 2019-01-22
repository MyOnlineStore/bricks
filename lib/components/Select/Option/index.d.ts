import { FunctionComponent } from 'react';
declare type PropsType = {
    label: string;
    isSelected: boolean;
    isTargeted: boolean;
    content?: JSX.Element;
    onClick(): void;
    onMouseEnter(): void;
};
declare type StateType = {
    hovering: boolean;
};
declare const Option: FunctionComponent<PropsType>;
export default Option;
export { PropsType, StateType };
