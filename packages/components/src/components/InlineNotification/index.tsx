import React, { FunctionComponent, Children, ReactNode } from 'react';
import SeverityType, { SeverityIcons } from '../../types/SeverityType';
import Icon from '../Icon';
import Text from '../Text';
import Box from '../Box';
import trbl from '../../utility/trbl';

type PropsType = {
    icon?: ReactNode;
    message?: string;
    severity: SeverityType;
    'data-testid'?: string;
};

const InlineNotification: FunctionComponent<PropsType> = (props): JSX.Element => {
    const icon = props.icon !== undefined ? props.icon : SeverityIcons[props.severity];

    return (
        <Text variant={props.severity} data-testid={props['data-testid']}>
            <Box inline alignItems="flex-start">
                <Box inline margin={trbl(3, 6, 0, 0)}>
                    <Icon size="medium" icon={icon} />
                </Box>
                <Box inline>{(Children.count(props.children) > 0 && props.children) || props.message}</Box>
            </Box>
        </Text>
    );
};

export default InlineNotification;
export { PropsType };
