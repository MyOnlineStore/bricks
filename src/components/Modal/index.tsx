import React, { Component, ReactNode, RefObject, createRef } from 'react';
import trbl from '../../utility/_trbl';
import Box from '../Box';
import BreakpointProvider from '../BreakpointProvider';
import IconButton from '../IconButton';
import Contrast from '../Contrast';
import Heading from '../Heading';
import ScrollBox from '../ScrollBox';
import TransitionAnimation from '../TransitionAnimation';
import StyledModal, { StyledModalWrapper } from './style';
import ButtonGroup from '../ButtonGroup';
import close from '../../assets/icons/close.svg';

type PropsType = {
    show: boolean;
    title: string;
    size?: 'small' | 'medium' | 'large';
    buttons?: Array<ReactNode>;
    onClose?(): void;
    renderFixed?(): JSX.Element;
};

class Modal extends Component<PropsType> {
    private styledModalRef: RefObject<HTMLDivElement>;
    private styledModalWrapperRef: RefObject<HTMLDivElement>;

    public constructor(props: PropsType) {
        super(props);
        this.styledModalRef = createRef();
        this.styledModalWrapperRef = createRef();
    }

    public handleClickOutside = (event: Event): void => {
        if (
            this.styledModalWrapperRef.current !== null &&
            this.styledModalRef.current !== null &&
            this.props.onClose !== undefined &&
            this.props.show &&
            this.styledModalWrapperRef.current.contains(event.target as Node) &&
            !this.styledModalRef.current.contains(event.target as Node)
        ) {
            this.props.onClose();
        }
    };

    public handleKeyDown = (event: KeyboardEvent): void => {
        if (this.props.onClose !== undefined && (event.key === 'Escape' || event.key === 'Esc')) {
            this.props.onClose();
        }
    };

    public componentDidMount(): void {
        document.addEventListener('mousedown', this.handleClickOutside, false);
        document.addEventListener('keydown', this.handleKeyDown, false);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
        document.removeEventListener('keydown', this.handleKeyDown, false);
    }

    public render(): JSX.Element {
        return (
            <StyledModalWrapper show={this.props.show} ref={this.styledModalWrapperRef}>
                <TransitionAnimation key={0} show={this.props.show} animation="zoom">
                    <BreakpointProvider breakpoints={{ small: 0, medium: 320, large: 1200 }}>
                        {(breakpoint): JSX.Element => (
                            <StyledModal
                                modalSize={this.props.size !== undefined ? this.props.size : 'large'}
                                ref={this.styledModalRef}
                                role="dialog"
                                aria-model={true}
                                aria-label={this.props.title}
                            >
                                <Box
                                    shrink={0}
                                    margin={breakpoint === 'small' ? trbl(18) : trbl(36)}
                                    alignItems="flex-start"
                                    alignContent="center"
                                    justifyContent="space-between"
                                >
                                    <Heading hierarchy={2}>{this.props.title}</Heading>
                                    {this.props.onClose !== undefined && (
                                        <Box
                                            margin={trbl(-12, -12, -6, 0)}
                                            alignContent="center"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            grow={0}
                                        >
                                            <IconButton
                                                icon={close}
                                                variant="primary"
                                                title="close"
                                                onClick={this.props.onClose}
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
