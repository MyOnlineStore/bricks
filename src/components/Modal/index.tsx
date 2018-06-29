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
import Spacer from '../Spacer';
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
                                margin={breakpoint === 'small' ? trbl(24, 12) : trbl(24, 24, 12)}
                                alignContent="center"
                                justifyContent="space-between"
                            >
                                <Heading hierarchy={2}>{props.title}</Heading>
                                <Box alignContent="center" alignItems="flex-end" grow={0} onClick={closeAction}>
                                    <Spacer offsetType="inner" offset={trbl(0)}>
                                        <Button variant="flat" title="close" compact>
                                            <Icon size="small" icon="close" />
                                        </Button>
                                    </Spacer>
                                </Box>
                            </Box>
                            <ScrollBox showInsetShadow>
                                <Spacer
                                    offsetType="inner"
                                    offset={breakpoint === 'small' ? trbl(0, 12, 12, 12) : trbl(36, 24)}
                                >
                                    {props.children}
                                </Spacer>
                            </ScrollBox>
                            {props.renderFixed && (
                                <Box direction="column" alignItems="stretch" shrink={0}>
                                    <Contrast>
                                        <Spacer offsetType="inner" offset={trbl(24)}>
                                            {props.renderFixed()}
                                        </Spacer>
                                    </Contrast>
                                </Box>
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
