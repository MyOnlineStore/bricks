import React, { Component } from 'react';
import StyledToast, { StyledToastWrapper } from './style';
import Button from '../Button';
import Box from '../Box';
import Icon, { MediumIcons } from '../Icon';
import Text from '../Text';
import SeverityType, { SeverityIcons } from '../../types/_SeverityType';
import trbl from '../../utility/trbl';
import TransitionAnimation from '../TransitionAnimation';
import BreakpointProvider from '../BreakpointProvider';
import IconButton from '../IconButton';

type PropsType = {
    title: string;
    icon?: keyof typeof MediumIcons;
    show: boolean;
    message?: string;
    buttonTitle?: string;
    buttonSeverity?: ButtonVariant;
    severity: SeverityType;
    autoDismiss?: boolean;
    onExited?(): void;
    onClose?(): void;
    onClick?(): void;
};

type ButtonVariant = 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';

class Toast extends Component<PropsType> {
    private action = (): void => {
        if (this.props.onClick !== undefined) this.props.onClick();
    };

    private closeAction = (): void => {
        if (this.props.onClose !== undefined) this.props.onClose();
    };

    private getVariant = (): ButtonVariant => {
        if (this.props.buttonSeverity !== undefined) return this.props.buttonSeverity;
        if (this.props.severity === 'error') return 'destructive';
        if (this.props.severity === 'warning') return 'warning';

        return 'primary';
    };

    private handleExit = (): void => {
        if (this.props.onExited) this.props.onExited();
    };

    public componentDidMount = (): void => {
        if (this.props.autoDismiss) setTimeout((): void => this.closeAction(), 6000);
    };

    public render(): JSX.Element {
        const icon = this.props.icon !== undefined ? this.props.icon : SeverityIcons[this.props.severity];

        return (
            <TransitionAnimation show={this.props.show} animation="zoom" onExited={this.handleExit}>
                <BreakpointProvider breakpoints={{ small: 0, medium: 375, large: 800 }}>
                    {(breakpoint): JSX.Element => (
                        <StyledToastWrapper>
                            <Box margin={trbl(6, 24)}>
                                <StyledToast severity={this.props.severity}>
                                    {breakpoint !== 'small' && (
                                        <Box alignSelf="flex-start" margin={trbl(18, 6, 18, 18)}>
                                            <Text as="span" severity={this.props.severity}>
                                                <Icon size="medium" icon={icon} />
                                            </Text>
                                        </Box>
                                    )}
                                    <Box
                                        style={{ display: breakpoint === 'small' ? 'block' : '' }}
                                        direction={breakpoint === 'small' ? 'column' : 'row'}
                                        justifyContent="center"
                                        alignContent="center"
                                    >
                                        <Box
                                            margin={breakpoint === 'small' ? trbl(12) : trbl(18, 12)}
                                            style={{ display: 'block' }}
                                        >
                                            <Text strong>
                                                <span dangerouslySetInnerHTML={{ __html: this.props.title }} />
                                            </Text>
                                            {this.props.message && (
                                                <Text>
                                                    <span dangerouslySetInnerHTML={{ __html: this.props.message }} />
                                                </Text>
                                            )}
                                        </Box>
                                        {this.props.buttonTitle && (
                                            <Box
                                                direction="column"
                                                justifyContent="center"
                                                margin={breakpoint === 'small' ? trbl(0, 12, 12, 12) : trbl(0, 12)}
                                                alignItems="flex-start"
                                            >
                                                <Button
                                                    title={this.props.buttonTitle}
                                                    onClick={this.action}
                                                    variant={this.getVariant()}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                    <Box direction="column">
                                        <IconButton variant="primary" icon="close" title="close" onClick={this.closeAction} />
                                    </Box>
                                </StyledToast>
                            </Box>
                        </StyledToastWrapper>
                    )}
                </BreakpointProvider>
            </TransitionAnimation>
        );
    }
}

export default Toast;
export { Toast, PropsType };