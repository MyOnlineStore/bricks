import React, { FC } from 'react';
import trbl from '../../utility/_trbl';
import Icon from '../Icon';
import Box from '../Box';
import StyledNotification from './style';
import { SeverityIcons } from '../../types/_SeverityType';

type PropsType = {
    severity: keyof typeof SeverityIcons;
    message: string;
    icon?: string;
};

const Notification: FC<PropsType> = (props): JSX.Element => {
    const icon = props.icon !== undefined ? props.icon : SeverityIcons[props.severity];

    return (
        <StyledNotification severity={props.severity}>
            <Box margin={trbl(12)} alignItems={'flex-start'}>
                <Box margin={trbl(0, 12, 0, 0)}>
                    <Icon size="medium" icon={icon as string} />
                </Box>
                {props.message}
            </Box>
        </StyledNotification>
    );
};

export default Notification;
export { PropsType, SeverityIcons };
