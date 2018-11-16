import { FunctionComponent } from 'react';
import { StyledType } from '../../utility/_styled';
import { MediumIcons } from '../Icon';
import { SeverityIcons } from '../../types/_SeverityType';
declare type PropsType = StyledType & {
    severity: keyof typeof SeverityIcons;
    message: string;
    icon?: keyof typeof MediumIcons;
};
declare const Notification: FunctionComponent<PropsType>;
export default Notification;
export { PropsType, SeverityIcons };
