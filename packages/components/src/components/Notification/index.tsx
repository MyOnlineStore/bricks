import React, { FunctionComponent, ReactNode } from 'react';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import Box from '../Box';
import StyledNotification from './style';
import { SeverityIcons } from '../../types/SeverityType';

type PropsType = {
    severity: keyof typeof SeverityIcons;
    message: string;
    icon?: ReactNode;
};

const Notification: FunctionComponent<PropsType> = (props): JSX.Element => {
    const icon = props.icon !== undefined ? props.icon : SeverityIcons[props.severity];

    return (
        <StyledNotification severity={props.severity}>
            <Box padding={trbl(12, 18)} alignItems={'flex-start'}>
                <Box margin={trbl(0, 12, 0, 0)}>
                    <Icon size="medium" icon={icon} />
                </Box>
                {props.message}
            </Box>
        </StyledNotification>
    );
};

export default Notification;
export { PropsType, SeverityIcons };
