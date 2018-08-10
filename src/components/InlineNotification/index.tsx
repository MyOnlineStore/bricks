import React, { SFC, Children } from 'react';
import SeverityType, { SeverityIcons } from '../../types/SeverityType';
import Icon, { MediumIcons } from '../Icon';
import Text from '../Text';
import Box from '../Box';
import trbl from '../../utility/trbl';

type PropsType = {
    icon?: keyof typeof MediumIcons;
    message?: string;
    severity: SeverityType;
};

const InlineNotification: SFC<PropsType> = (props): JSX.Element => {
    const icon = props.icon !== undefined ? props.icon : SeverityIcons[props.severity];

    return (
        <Text variant="small" severity={props.severity}>
            <Box inline>
                <Box inline margin={trbl(0, 6, 0, 0)}>
                    <Icon size="medium" icon={icon} />
                </Box>
                <Box inline>{(Children.count(props.children) > 0 && props.children) || props.message}</Box>
            </Box>
        </Text>
    );
};

export default InlineNotification;
export { PropsType };
