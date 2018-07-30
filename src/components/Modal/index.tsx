import React, { StatelessComponent } from 'react';
import { StyledType } from '../../utility/styled';
import trbl from '../../utility/trbl';
import Box from '../Box';
import BreakpointProvider from '../BreakpointProvider';
import Button from '../Button';
import Contrast from '../Contrast';
import Heading from '../Heading';
import Icon from '../Icon';
import ScrollBox from '../ScrollBox';
import TransitionAnimation from '../TransitionAnimation';
import StyledModal, { StyledModalWrapper } from './style';

type PropsType = StyledType & {
    show: boolean;
    title: string;
    closeAction?(): void;
    renderFixed?(): JSX.Element;
};

const Modal: StatelessComponent<PropsType> = (props): JSX.Element => {
    const closeAction = (): void => {
        if (props.closeAction !== undefined) {
            props.closeAction();
        }
    };

    return (
        <StyledModalWrapper show={props.show} onClick={closeAction}>
            <TransitionAnimation key={0} show={props.show} animation="zoom">
                <BreakpointProvider breakpoints={{ small: 0, medium: 320, large: 1200 }}>
                    {(breakpoint): JSX.Element => (
                        <StyledModal>
                            <Box
                                shrink={0}
                                margin={breakpoint === 'small' ? trbl(24) : trbl(24, 36)}
                                alignItems="flex-start"
                                alignContent="center"
                                justifyContent="space-between"
                            >
                                <Heading hierarchy={2}>{props.title}</Heading>
                                <Box
                                    margin={trbl(-12, -12, -6, 0)}
                                    alignContent="center"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    grow={0}
                                >
                                    <Button variant="plain" flat title="close" action={closeAction} compact>
                                        <Icon size="small" icon="close" />
                                    </Button>
                                </Box>
                            </Box>
                            <ScrollBox>
                                <Box padding={breakpoint === 'small' ? trbl(0, 24, 24, 24) : trbl(0, 36, 36, 36)}>
                                    {props.children}
                                </Box>
                            </ScrollBox>
                            {props.renderFixed && (
                                <Contrast>
                                    <Box direction="column" alignItems="stretch" shrink={0} padding={trbl(24, 36)}>
                                        {props.renderFixed()}
                                    </Box>
                                </Contrast>
                            )}
                        </StyledModal>
                    )}
                </BreakpointProvider>
            </TransitionAnimation>
        </StyledModalWrapper>
    );
};

export default Modal;
export { PropsType };
