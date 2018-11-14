import { Component } from 'react';
import { StyledType } from '../../utility/_styled';
declare type PropsType = StyledType & {
    show: boolean;
    title: string;
    size?: 'small' | 'medium' | 'large';
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
