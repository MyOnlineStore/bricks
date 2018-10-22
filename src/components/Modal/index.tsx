import React, { Component } from 'react';
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
    size?: 'small' | 'medium' | 'large';
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
                                    margin={breakpoint === 'small' ? trbl(24) : trbl(24, 36)}
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
                                            <Button.Flat
                                                variant="primary"
                                                title="close"
                                                onClick={this.props.closeAction}
                                            >
                                                <Icon size="small" icon="close" />
                                            </Button.Flat>
                                        </Box>
                                    )}
                                </Box>
                                <ScrollBox>
                                    <Box padding={breakpoint === 'small' ? trbl(0, 24, 24, 24) : trbl(0, 36, 36, 36)}>
                                        {this.props.children}
                                    </Box>
                                </ScrollBox>
                                {this.props.renderFixed && (
                                    <Contrast>
                                        <Box direction="column" alignItems="stretch" shrink={0} padding={trbl(24, 36)}>
                                            {this.props.renderFixed()}
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
