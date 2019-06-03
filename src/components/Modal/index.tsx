import React, { Component, ReactNode, RefObject, createRef } from 'react';
import Box from '../Box';
import IconButton from '../IconButton';
import Contrast from '../Contrast';
import Heading from '../Heading';
import ScrollBox from '../ScrollBox';
import TransitionAnimation from '../TransitionAnimation';
import StyledModal, { StyledModalWrapper } from './style';
import ButtonGroup from '../ButtonGroup';
import close from '../../assets/icons/close.svg';
import Measure from 'react-measure';

type PropsType = {
    /** Determines whether the modal is visible or not */
    show: boolean;

    /** Title displayed at the top of the modal */
    title: string;

    /** Size of the modal */
    size?: 'small' | 'medium' | 'large';

    /** An array of two buttons, usually some form of agree and cancel */
    buttons?: Array<ReactNode>;

    /** Optional action to take when closing the modal */
    onClose?(): void;

    /** Fixed content to render inside the modal */
    renderFixed?(): JSX.Element;
};

class Modal extends Component<PropsType> {
    private styledModalRef: HTMLDivElement | null;
    private styledModalWrapperRef: RefObject<HTMLDivElement>;

    public constructor(props: PropsType) {
        super(props);
        this.styledModalWrapperRef = createRef();
    }

    public handleClickOutside = (event: Event): void => {
        if (
            this.styledModalWrapperRef.current !== null &&
            this.styledModalRef !== null &&
            this.props.onClose !== undefined &&
            this.props.show &&
            this.styledModalWrapperRef.current.contains(event.target as Node) &&
            !this.styledModalRef.contains(event.target as Node)
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
                    <Measure bounds>
                        {({ measureRef, contentRect }) => {
                            const isSmall = contentRect.bounds && contentRect.bounds.width < 320;

                            return (
                                <StyledModal
                                    modalSize={this.props.size !== undefined ? this.props.size : 'large'}
                                    ref={node => {
                                        this.styledModalRef = node;
                                        measureRef(node);
                                    }}
                                    role="dialog"
                                    aria-modal
                                    aria-label={this.props.title}
                                >
                                    <Box
                                        shrink={0}
                                        margin={isSmall ? [18] : [36]}
                                        alignItems="flex-start"
                                        alignContent="center"
                                        justifyContent="space-between"
                                    >
                                        <Heading hierarchy={2}>{this.props.title}</Heading>
                                        {this.props.onClose !== undefined && (
                                            <Box
                                                margin={[-12, -12, -6, 0]}
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
                                        <Box padding={isSmall ? [0, 18, 18, 18] : [0, 36, 36, 36]}>
                                            {this.props.children}
                                        </Box>
                                    </ScrollBox>
                                    {(this.props.renderFixed || this.props.buttons) && (
                                        <Contrast>
                                            <Box
                                                direction="column"
                                                alignItems="stretch"
                                                shrink={0}
                                                padding={isSmall ? [24] : [24, 36]}
                                            >
                                                {this.props.renderFixed && this.props.renderFixed()}
                                                {this.props.buttons && (
                                                    <ButtonGroup stacked={isSmall}>{this.props.buttons}</ButtonGroup>
                                                )}
                                            </Box>
                                        </Contrast>
                                    )}
                                </StyledModal>
                            );
                        }}
                    </Measure>
                </TransitionAnimation>
            </StyledModalWrapper>
        );
    }
}

export default Modal;
export { PropsType };
