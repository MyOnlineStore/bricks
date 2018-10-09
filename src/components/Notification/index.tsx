import React, { SFC } from 'react';
import { StyledType } from '../../utility/styled';
import trbl from '../../utility/trbl';
import Icon, { MediumIcons } from '../Icon';
import Box from '../Box';
import StyledNotification from './style';
import { SeverityIcons } from '../../types/SeverityType';

type PropsType = StyledType & {
    severity: keyof typeof SeverityIcons;
    message: string;
    icon?: keyof typeof MediumIcons;
};

const Notification: SFC<PropsType> = (props): JSX.Element => {
    const icon = props.icon !== undefined ? props.icon : SeverityIcons[props.severity];

    return (
        <StyledNotification severity={props.severity}>
            <Box margin={trbl(12)} alignItems={'flex-start'} >
                <Box margin={trbl(0,12,0,0)}>
                    <Icon size="medium" icon={icon} />
                </Box>
                {props.message}
            </Box>
        </StyledNotification>
    );
};

export default Notification;
export { PropsType, SeverityIcons };
