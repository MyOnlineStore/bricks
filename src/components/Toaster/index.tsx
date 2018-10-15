import React, { SFC } from 'react';
import StyledToaster, { StyledToasterWrapper } from './style';
import Button from '../Button';
import Box from '../Box';
import Icon, { MediumIcons } from '../Icon';
import Text from '../Text';
import SeverityType, { SeverityIcons } from '../../types/SeverityType';
import trbl from '../../utility/trbl';
import TransitionAnimation from '../TransitionAnimation';
import BreakpointProvider from '../BreakpointProvider';

type PropsType = {
    title: string;
    icon?: keyof typeof MediumIcons;
    isOpen: boolean;
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

        return 'primary';
    };

    return (
        <TransitionAnimation show={props.isOpen} animation="zoom">
            <BreakpointProvider breakpoints={{ small: 0, medium: 375, large: 800 }}>
                {(breakpoint): JSX.Element => (
                    <StyledToasterWrapper>
                        <Box margin={trbl(6, 24)}>
                            <StyledToaster severity={props.severity}>
                                {breakpoint !== 'small' && (
                                    <Box alignSelf="flex-start" margin={trbl(18, 6, 18, 18)}>
                                        <Text inline severity={props.severity}>
                                            <Icon size="medium" icon={icon} />
                                        </Text>
                                    </Box>
                                )}
                                <Box
                                    direction={breakpoint === 'small' ? 'column' : 'row'}
                                    justifyContent="center"
                                    alignContent="center"
                                >
                                    <Box direction="column" margin={breakpoint === 'small' ? trbl(12) : trbl(18, 12)}>
                                        <Text strong>{props.title}</Text>
                                        <Text>{props.message}</Text>
                                    </Box>
                                    {props.buttonTitle && (
                                        <Box
                                            direction="column"
                                            justifyContent="center"
                                            margin={breakpoint === 'small' ? trbl(0, 12, 12, 12) : trbl(0, 12)}
                                            alignItems="flex-start"
                                        >
                                            <Button
                                                title={props.buttonTitle}
                                                action={action}
                                                variant={
                                                    props.buttonSeverity ? props.buttonSeverity : expectedVariant()
                                                }
                                            />
                                        </Box>
                                    )}
                                </Box>
                                <Box direction="column">
                                    <Button.Plain title="close" action={closeAction} variant="primary">
                                        <Icon size="small" icon="close" />
                                    </Button.Plain>
                                </Box>
                            </StyledToaster>
                        </Box>
                    </StyledToasterWrapper>
                )}
            </BreakpointProvider>
        </TransitionAnimation>
    );
};

export default Toaster;
export { PropsType, ButtonVariant };
