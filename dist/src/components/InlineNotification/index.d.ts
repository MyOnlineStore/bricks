import { FunctionComponent } from 'react';
import SeverityType from '../../types/SeverityType';
import { MediumIcons } from '../Icon';
declare type PropsType = {
    icon?: keyof typeof MediumIcons;
    message?: string;
    severity: SeverityType;
};
declare const InlineNotification: FunctionComponent<PropsType>;
export default InlineNotification;
export { PropsType };
