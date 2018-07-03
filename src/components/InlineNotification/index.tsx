import React, { SFC } from 'react';
import SeverityType from '../../types/SeverityType';
import Icon, { MediumIcons } from '../Icon';
import StyledInlineNotification, { StyledMessage } from './style';

type PropsType = {
    icon?: keyof typeof MediumIcons;
    message: string;
    severity: SeverityType;
};

const InlineNotification: SFC<PropsType> = (props): JSX.Element => {
    return (
        <StyledInlineNotification severity={props.severity}>
            {props.icon !== undefined && <Icon size="medium" icon={props.icon} />}
            &nbsp;&nbsp;
            <StyledMessage>{props.message}</StyledMessage>
        </StyledInlineNotification>
    );
};

export default InlineNotification;
export { PropsType };
