import React, { FC, useEffect } from 'react';
import StyledToast, { StyledToastWrapper } from './style';
import Button from '../Button';
import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import SeverityType, { SeverityIcons } from '../../types/SeverityType';
import TransitionAnimation from '../TransitionAnimation';
import IconButton from '../IconButton';
import Measure from 'react-measure';
import { IconType } from '../Icon/IconType';

type PropsType = {
    'data-testid'?: string;
    title: string;
    icon?: IconType;
    show: boolean;
    message?: string;
    buttonTitle?: string;
    secondaryButtonTitle?: string;
    buttonSeverity?: ButtonVariant;
    severity: SeverityType;
    autoDismiss?: boolean;
    persistent?: boolean;
    onExited?(): void;
    onClose?(): void;
    onClick?(): void;
    onClickSecondary?(): void;
};

type ButtonVariant = 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';

const Toast: FC<PropsType> = props => {
    const action = (): void => {
        if (props.onClick !== undefined) props.onClick();
    };

    const closeAction = (): void => {
        if (props.onClose !== undefined) props.onClose();
    };

    const getVariant = (): ButtonVariant => {
        if (props.buttonSeverity !== undefined) return props.buttonSeverity;
        if (props.severity === 'error') return 'destructive';
        if (props.severity === 'warning') return 'warning';

        return 'primary';
    };

    const handleExit = (): void => {
        if (props.onExited) props.onExited();
    };

    useEffect(() => {
        if (props.autoDismiss && !props.persistent) {
            const id = setTimeout((): void => {
                closeAction();
            }, 6000);

            return () => clearTimeout(id);
        }
    }, []);

    const icon = props.icon !== undefined ? props.icon : SeverityIcons[props.severity];

    return (
        <TransitionAnimation show={props.show} animation="zoom" onExited={handleExit}>
            <Measure client>
                {({ measureRef, contentRect }) => {
                    const isSmall =
                        (!props.secondaryButtonTitle && contentRect.client && contentRect.client.width < 375) ||
                        (props.secondaryButtonTitle && contentRect.client && contentRect.client.width < 550);

                    return (
                        <StyledToastWrapper
                            ref={measureRef}
                            data-testid={props['data-testid']}
                            role="alertdialog"
                            aria-label={props.title}
                        >
                            <Box margin={[6, 24]}>
                                <StyledToast severity={props.severity}>
                                    {!isSmall && (
                                        <Box alignSelf="flex-start" margin={[18, 6, 18, 18]}>
                                            <Text as="span" variant={props.severity}>
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
                                        <Box margin={isSmall ? [12] : [18, 12]} style={{ display: 'block' }}>
                                            <Text strong>
                                                <span dangerouslySetInnerHTML={{ __html: props.title }} />
                                            </Text>
                                            {props.message && (
                                                <Text>
                                                    <span dangerouslySetInnerHTML={{ __html: props.message }} />
                                                </Text>
                                            )}
                                        </Box>
                                        {props.secondaryButtonTitle && (
                                            <Box
                                                direction="column"
                                                justifyContent="center"
                                                margin={isSmall ? [0, 12, 12, 12] : [0, 6, 0, 12]}
                                                alignItems="flex-start"
                                            >
                                                <Button
                                                    title={props.secondaryButtonTitle}
                                                    onClick={props.onClickSecondary}
                                                    variant={'secondary'}
                                                />
                                            </Box>
                                        )}
                                        {props.buttonTitle && (
                                            <Box
                                                direction="column"
                                                justifyContent="center"
                                                margin={isSmall ? [0, 12, 12, 12] : [0, 12]}
                                                alignItems="flex-start"
                                            >
                                                <Button
                                                    title={props.buttonTitle}
                                                    onClick={action}
                                                    variant={getVariant()}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                    <Box direction="column" margin={[0, 12, 0, 0]}>
                                        {!props.persistent && (
                                            <IconButton
                                                variant="primary"
                                                icon="close-small"
                                                iconSize="small"
                                                title="close"
                                                onClick={closeAction}
                                            />
                                        )}
                                    </Box>
                                </StyledToast>
                            </Box>
                        </StyledToastWrapper>
                    );
                }}
            </Measure>
        </TransitionAnimation>
    );
};

export default Toast;
export { Toast, PropsType };
