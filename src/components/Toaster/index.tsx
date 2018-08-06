import React, { SFC } from 'react';
import StyledToaster from './style';
import Button from '../Button';
import Box from '../Box';
import Icon, { MediumIcons } from '../Icon';
import Text from '../Text';
import SeverityType, { SeverityIcons } from '../../types/SeverityType';
import trbl from '../../utility/trbl';

type PropsType = {
    title: string;
    icon?: keyof typeof MediumIcons;
    show?: boolean;
    message?: string;
    buttonTitle?: string;
    severity: SeverityType;
    closeAction?(): void;
};

const Toaster: SFC<PropsType> = (props): JSX.Element => {
    const icon = props.icon !== undefined ? props.icon : SeverityIcons[props.severity];

    const closeAction = (): void => {
        if (props.closeAction !== undefined) props.closeAction();
    };

    return (
        <StyledToaster severity={props.severity} show={props.show}>
            <Box margin={trbl(0, 6, 0)} alignSelf="flex-start">
                <Text inline severity={props.severity}>
                    <Icon size="medium" icon={icon} />
                </Text>
            </Box>
            <Box direction="column" margin={trbl(0, 12)}>
                <Text strong>{props.title}</Text>
                <Text>{props.message}</Text>
            </Box>
            {props.buttonTitle !== undefined && (
                <Box direction="column" margin={trbl(0, 12)}>
                    <Button title={props.buttonTitle} variant="primary" />
                </Box>
            )}

            <Button variant="plain" flat title="close" action={closeAction} compact>
                <Icon size="small" icon="close" />
            </Button>
        </StyledToaster>
    );
};

export default Toaster;
export { PropsType };
