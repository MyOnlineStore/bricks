import React, { Children, FunctionComponent, ReactNode } from 'react';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import Box from '../Box';
import StyledNotification from './style';
import { SeverityIcons } from '../../types/SeverityType';
import { InfoCircleIcon } from '@myonlinestore/bricks-assets';

type PropsType = {
    severity: keyof typeof SeverityIcons | 'default';
    message?: string;
    icon?: ReactNode;
    'data-testid'?: string;
};

const Notification: FunctionComponent<PropsType> = (props): JSX.Element => {
    const icon =
        props.icon !== undefined ? (
            props.icon
        ) : props.severity === 'default' ? (
            <InfoCircleIcon />
        ) : (
            SeverityIcons[props.severity]
        );

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
