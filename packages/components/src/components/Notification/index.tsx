import React, { Children, FunctionComponent } from 'react';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import Box from '../Box';
import StyledNotification from './style';
import SeverityType, { SeverityIcons } from '../../types/SeverityType';
import { IconType } from '../Icon/IconType';

type PropsType = {
    severity: SeverityType | 'default';
    message?: string;
    icon?: IconType;
    'data-testid'?: string;
};

const Notification: FunctionComponent<PropsType> = (props): JSX.Element => {
    const icon =
        props.icon !== undefined
            ? props.icon
            : props.severity === 'default'
            ? 'info-circle'
            : SeverityIcons[props.severity];

    return (
        <StyledNotification severity={props.severity} data-testid={props['data-testid']}>
            <Box padding={trbl(12, 18)} alignItems={'flex-start'}>
                <Box margin={trbl(3, 6, 0, 0)}>
                    <Icon size="medium" icon={icon} />
                </Box>
                <Box inline>{(Children.count(props.children) > 0 && props.children) || props.message}</Box>
            </Box>
        </StyledNotification>
    );
};

export default Notification;
export { PropsType, SeverityIcons };
