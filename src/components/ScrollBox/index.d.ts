import { Component } from 'react';
import { StyledType } from '../../utility/styled';
declare type PropsType = StyledType & {
    autoHideScrollBar?: boolean;
    showInsetShadow?: boolean;
    onScroll?(eventData: {
        scrollTop: number;
        scrollBottom: number;
        scrollDirection: StateType['scrollDirection'];
    }): void;
};
declare type StateType = {
    scrollPosition: number;
    scrollDirection: 'up' | 'down' | 'idle';
    showInsetShadow: boolean;
};
declare class ScrollBox extends Component<PropsType, StateType> {
    private scrollbar;
    private contentRef;
    constructor(props: PropsType);
    private handleScroll;
    private hasOverflow;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default ScrollBox;
export { StateType, PropsType };
