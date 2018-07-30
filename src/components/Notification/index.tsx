import React, { StatelessComponent } from 'react';
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

const Notification: StatelessComponent<PropsType> = (props): JSX.Element => {
    const icon = props.icon !== undefined ? props.icon : SeverityIcons[props.severity];

    return (
        <StyledNotification severity={props.severity}>
            <Box margin={trbl(12)} alignItems={'center'}>
                <Icon size="medium" icon={icon} />
                &nbsp;&nbsp;&nbsp;
                {props.message}
            </Box>
        </StyledNotification>
    );
};

export default Notification;
export { PropsType, SeverityIcons };
