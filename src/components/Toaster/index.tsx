import React, { SFC } from 'react';
import StyledToaster, { StyledToasterWrapper } from './style';
import Button from '../Button';
import Box from '../Box';
import Icon, { MediumIcons } from '../Icon';
import Text from '../Text';
import SeverityType, { SeverityIcons } from '../../types/SeverityType';
import trbl from '../../utility/trbl';
import BreakpointProvider from '../BreakpointProvider';

type PropsType = {
    title: string;
    icon?: keyof typeof MediumIcons;
    show?: boolean;
    message?: string;
    buttonTitle?: string;
    buttonSeverity?: ButtonVariant;
    severity: SeverityType;
    closeAction?(): void;
    action?(): void;
};

type ButtonVariant = 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';

const Toaster: SFC<PropsType> = (props): JSX.Element => {
    const icon = props.icon !== undefined ? props.icon : SeverityIcons[props.severity];

    const closeAction = (): void => {
        if (props.closeAction !== undefined) props.closeAction();
    };

    const action = (): void => {
        if (props.action !== undefined) props.action();
    };

    const expectedVariant = (): ButtonVariant => {
        if (props.severity === 'error') return 'destructive';
        if (props.severity === 'warning') return 'warning';
        else return 'primary';
    };

    return (
        <BreakpointProvider breakpoints={{ small: 0, medium: 375, large: 800 }}>
            {(breakpoint): JSX.Element => (
                <StyledToasterWrapper>
                    <StyledToaster
                        // direction={breakpoint === 'small' ? 'column' : 'row'}
                        direction="row"
                        severity={props.severity}
                        show={props.show}
                    >
                        {breakpoint !== 'small' && (
                            <Box alignSelf="flex-start" margin={trbl(18, 6, 18, 18)}>
                                <Text inline severity={props.severity}>
                                    <Icon size="medium" icon={icon} />
                                </Text>
                            </Box>
                        )}
                        <Box direction="column" margin={trbl(18, 12)}>
                            <Text strong>{props.title}</Text>
                            <Text>{props.message}</Text>
                        </Box>
                        {props.buttonTitle && (
                            <Box direction="column" margin={trbl(0, 12)}>
                                <Button
                                    title={props.buttonTitle}
                                    action={action}
                                    variant={props.buttonSeverity ? props.buttonSeverity : expectedVariant()}
                                />
                            </Box>
                        )}
                        <Box
                            direction="column"
                            // margin={breakpoint !== 'small' ? trbl(18, 12, 18, 0) : trbl(12, 12, 0, 0)}
                            // alignSelf={breakpoint === 'small' ? 'flex-end' : 'auto'}
                            // order={breakpoint === 'small' ? -1 : 0}
                        >
                            <Button variant="plain" flat title="close" action={closeAction} compact>
                                <Icon size="small" icon="close" />
                            </Button>
                        </Box>
                    </StyledToaster>
                </StyledToasterWrapper>
            )}
        </BreakpointProvider>
    );
};

export default Toaster;
export { PropsType, ButtonVariant };
