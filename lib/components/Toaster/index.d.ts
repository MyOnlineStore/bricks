import { SFC } from 'react';
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
    closeAction?(): void;
    action?(): void;
};
declare type ButtonVariant = 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
declare const Toaster: SFC<PropsType>;
export default Toaster;
export { PropsType, ButtonVariant };
