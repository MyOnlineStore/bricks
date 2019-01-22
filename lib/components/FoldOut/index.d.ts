import { Component } from 'react';
declare type ContentProps = {
    contentHeight?: StateType['contentHeight'];
    isOpen: PropsType['isOpen'];
};
declare type StateType = {
    contentHeight?: number;
};
declare type PropsType = {
    isOpen: boolean;
};
declare class FoldOut extends Component<PropsType, StateType> {
    private contentRef;
    private resizeObserver;
    constructor(props: PropsType);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default FoldOut;
export { ContentProps, StateType, PropsType };
