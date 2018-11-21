import { SFC } from 'react';
import SeverityType from '../../types/_SeverityType';
import { MediumIcons } from '../Icon';
declare type PropsType = {
    icon?: keyof typeof MediumIcons;
    message?: string;
    severity: SeverityType;
};
declare const InlineNotification: SFC<PropsType>;
export default InlineNotification;
export { PropsType };
