import React, { Component, ReactNode } from 'react';
import { StyledType } from '../../utility/_styled';
import trbl from '../../utility/trbl';
import Box from '../Box';
import BreakpointProvider from '../BreakpointProvider';
import { IconButton } from '../Button';
import Contrast from '../Contrast';
import Heading from '../Heading';
import Icon from '../Icon';
import ScrollBox from '../ScrollBox';
import TransitionAnimation from '../TransitionAnimation';
import StyledModal, { StyledModalWrapper } from './style';
import ButtonGroup from '../ButtonGroup';

type PropsType = StyledType & {
    show: boolean;
    title: string;
    size?: 'small' | 'medium' | 'large';
    buttons?: Array<ReactNode>;
    closeAction?(): void;
    renderFixed?(): JSX.Element;
};

class Modal extends Component<PropsType> {
    private styledModalRef: HTMLDivElement;
    private styledModalWrapperRef: HTMLDivElement;

    public constructor(props: PropsType) {
        super(props);
    }

    public handleClickOutside = (event: Event): void => {
        if (
            this.props.closeAction !== undefined &&
            this.props.show &&
            this.styledModalWrapperRef.contains(event.target as Node) &&
            !this.styledModalRef.contains(event.target as Node)
        ) {
            this.props.closeAction();
        }
    };

    public componentDidMount(): void {
        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    public render(): JSX.Element {
        return (
            <StyledModalWrapper
                show={this.props.show}
                innerRef={(ref): void => {
                    this.styledModalWrapperRef = ref;
                }}
            >
                <TransitionAnimation key={0} show={this.props.show} animation="zoom">
                    <BreakpointProvider breakpoints={{ small: 0, medium: 320, large: 1200 }}>
                        {(breakpoint): JSX.Element => (
                            <StyledModal
                                modalSize={this.props.size !== undefined ? this.props.size : 'large'}
                                innerRef={(ref): void => {
                                    this.styledModalRef = ref;
                                }}
                            >
                                <Box
                                    shrink={0}
                                    margin={breakpoint === 'small' ? trbl(18) : trbl(36)}
                                    alignItems="flex-start"
                                    alignContent="center"
                                    justifyContent="space-between"
                                >
                                    <Heading hierarchy={2}>{this.props.title}</Heading>
                                    {this.props.closeAction !== undefined && (
                                        <Box
                                            margin={trbl(-12, -12, -6, 0)}
                                            alignContent="center"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            grow={0}
                                        >
                                            <IconButton
                                                icon="close"
                                                variant="primary"
                                                title="close"
                                                onClick={this.props.closeAction}
                                            />
                                        </Box>
                                    )}
                                </Box>
                                <ScrollBox>
                                    <Box padding={breakpoint === 'small' ? trbl(0, 18, 18, 18) : trbl(0, 36, 36, 36)}>
                                        {this.props.children}
                                    </Box>
                                </ScrollBox>
                                {(this.props.renderFixed || this.props.buttons) && (
                                    <Contrast>
                                        <Box
                                            direction="column"
                                            alignItems="stretch"
                                            shrink={0}
                                            padding={breakpoint === 'small' ? trbl(24) : trbl(24, 36)}
                                        >
                                            {this.props.renderFixed && this.props.renderFixed()}
                                            {this.props.buttons && (
                                                <ButtonGroup stacked={breakpoint === 'small'}>
                                                    {this.props.buttons}
                                                </ButtonGroup>
                                            )}
                                        </Box>
                                    </Contrast>
                                )}
                            </StyledModal>
                        )}
                    </BreakpointProvider>
                </TransitionAnimation>
            </StyledModalWrapper>
        );
    }
}

export default Modal;
export { PropsType };
