import { Component, ReactNode } from 'react';
declare type PropsType = {
    show: boolean;
    title: string;
    size?: 'small' | 'medium' | 'large';
    buttons?: Array<ReactNode>;
    closeAction?(): void;
    renderFixed?(): JSX.Element;
};
declare class Modal extends Component<PropsType> {
    private styledModalRef;
    private styledModalWrapperRef;
    constructor(props: PropsType);
    handleClickOutside: (event: Event) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Modal;
export { PropsType };
