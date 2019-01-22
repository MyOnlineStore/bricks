import { Component } from 'react';
import { MediumIcons } from '../Icon';
import SeverityType from '../../types/_SeverityType';
declare type PropsType = {
    title: string;
    icon?: keyof typeof MediumIcons;
    isOpen: boolean;
    message?: string;
    buttonTitle?: string;
    buttonSeverity?: ButtonVariant;
    severity: SeverityType;
    autoDismiss?: boolean;
    closeAction?(): void;
    onClick?(): void;
};
declare type ButtonVariant = 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
declare class Toaster extends Component<PropsType> {
    private handleClose;
    private handleClick;
    private expectedVariant;
    componentDidMount: () => void;
    render(): JSX.Element;
}
export default Toaster;
export { PropsType, ButtonVariant };
