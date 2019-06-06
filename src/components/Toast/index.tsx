import React, { Component } from 'react';
import StyledToast, { StyledToastWrapper } from './style';
import Button from '../Button';
import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import SeverityType, { SeverityIcons } from '../../types/SeverityType';
import trbl from '../../utility/trbl';
import TransitionAnimation from '../TransitionAnimation';
import IconButton from '../IconButton';
import close from '../../assets/icons/close-small.svg';
import Measure from 'react-measure';

type PropsType = {
    title: string;
    icon?: string;
    show: boolean;
    message?: string;
    buttonTitle?: string;
    buttonSeverity?: ButtonVariant;
    severity: SeverityType;

    /** This determines if the toast disappears automatically */
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
        const icon =
            this.props.icon !== undefined
                ? this.props.icon
                : ((SeverityIcons[this.props.severity] as unknown) as string);

        return (
            <TransitionAnimation show={this.props.show} animation="zoom" onExited={this.handleExit}>
                <Measure bounds>
                    {({ measureRef, contentRect }) => {
                        const isSmall = contentRect.bounds && contentRect.bounds.width < 375;

                        return (
                            <StyledToastWrapper ref={measureRef} role="alertdialog" aria-label={this.props.title}>
                                <Box margin={trbl(6, 24)}>
                                    <StyledToast severity={this.props.severity}>
                                        {!isSmall && (
                                            <Box alignSelf="flex-start" margin={trbl(18, 6, 18, 18)}>
                                                <Text as="span" severity={this.props.severity}>
                                                    <Icon size="medium" icon={icon} />
                                                </Text>
                                            </Box>
                                        )}
                                        <Box
                                            style={{ display: isSmall ? 'block' : '' }}
                                            direction={isSmall ? 'column' : 'row'}
                                            justifyContent="center"
                                            alignContent="center"
                                        >
                                            <Box
                                                margin={isSmall ? trbl(12) : trbl(18, 12)}
                                                style={{ display: 'block' }}
                                            >
                                                <Text strong>
                                                    <span dangerouslySetInnerHTML={{ __html: this.props.title }} />
                                                </Text>
                                                {this.props.message && (
                                                    <Text>
                                                        <span
                                                            dangerouslySetInnerHTML={{ __html: this.props.message }}
                                                        />
                                                    </Text>
                                                )}
                                            </Box>
                                            {this.props.buttonTitle && (
                                                <Box
                                                    direction="column"
                                                    justifyContent="center"
                                                    margin={isSmall ? trbl(0, 12, 12, 12) : trbl(0, 12)}
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
                                        <Box direction="column" margin={[0, 12, 0, 0]}>
                                            <IconButton
                                                variant="primary"
                                                icon={close}
                                                iconSize="small"
                                                title="close"
                                                onClick={this.closeAction}
                                            />
                                        </Box>
                                    </StyledToast>
                                </Box>
                            </StyledToastWrapper>
                        );
                    }}
                </Measure>
            </TransitionAnimation>
        );
    }
}

export default Toast;
export { Toast, PropsType };
