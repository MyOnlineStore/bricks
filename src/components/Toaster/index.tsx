import React, { Component } from 'react';
import StyledToaster, { StyledToasterWrapper } from './style';
import Button from '../Button';
import IconButton from '../IconButton';
import Box from '../Box';
import Icon, { MediumIcons } from '../Icon';
import Text from '../Text';
import SeverityType, { SeverityIcons } from '../../types/_SeverityType';
import trbl from '../../utility/trbl';
import TransitionAnimation from '../TransitionAnimation';
import BreakpointProvider from '../BreakpointProvider';

type PropsType = {
    title: string;
    icon?: keyof typeof MediumIcons;
    show: boolean;
    message?: string;
    buttonTitle?: string;
    buttonSeverity?: ButtonVariant;
    severity: SeverityType;
    autoDismiss?: boolean;
    onClose?(): void;
    onClick?(): void;
};

type ButtonVariant = 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';

class Toaster extends Component<PropsType> {
    private handleClose = (): void => {
        if (this.props.onClose !== undefined) this.props.onClose();
    };

    private handleClick = (): void => {
        if (this.props.onClick !== undefined) this.props.onClick();
    };

    private expectedVariant = (): ButtonVariant => {
        if (this.props.severity === 'error') return 'destructive';
        if (this.props.severity === 'warning') return 'warning';

        return 'primary';
    };

    public componentDidMount = (): void => {
        if (this.props.autoDismiss) setTimeout((): void => this.handleClose(), 6000);
    };

    public render() {
        const icon = this.props.icon !== undefined ? this.props.icon : SeverityIcons[this.props.severity];

        return (
            <TransitionAnimation show={this.props.show} animation="zoom">
                <BreakpointProvider breakpoints={{ small: 0, medium: 375, large: 800 }}>
                    {(breakpoint): JSX.Element => (
                        <StyledToasterWrapper>
                            <Box margin={trbl(6, 24)}>
                                <StyledToaster severity={this.props.severity}>
                                    {breakpoint !== 'small' && (
                                        <Box alignSelf="flex-start" margin={trbl(18, 6, 18, 18)}>
                                            <Text as="span" severity={this.props.severity}>
                                                <Icon size="medium" icon={icon} />
                                            </Text>
                                        </Box>
                                    )}
                                    <Box
                                        direction={breakpoint === 'small' ? 'column' : 'row'}
                                        justifyContent="center"
                                        alignContent="center"
                                    >
                                        <Box
                                            direction="column"
                                            margin={breakpoint === 'small' ? trbl(12) : trbl(18, 12)}
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
                                                    onClick={this.handleClick}
                                                    variant={
                                                        this.props.buttonSeverity
                                                            ? this.props.buttonSeverity
                                                            : this.expectedVariant()
                                                    }
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                    <Box direction="column">
                                        <IconButton
                                            icon="close"
                                            title="close"
                                            onClick={this.handleClose}
                                            variant="primary"
                                        />
                                    </Box>
                                </StyledToaster>
                            </Box>
                        </StyledToasterWrapper>
                    )}
                </BreakpointProvider>
            </TransitionAnimation>
        );
    }
}

export default Toaster;
export { PropsType, ButtonVariant };
