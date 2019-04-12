import React, { FC, ReactNode, useEffect, useRef } from 'react';
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
    show: boolean;
    title: string;
    size?: 'small' | 'medium' | 'large';
    buttons?: Array<ReactNode>;
    onClose?(): void;
    renderFixed?(): JSX.Element;
};

const Modal: FC<PropsType> = props => {
    let styledModalRef = useRef<HTMLDivElement>(null);
    const styledModalWrapperRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: Event): void => {
        if (
            styledModalWrapperRef.current !== null &&
            styledModalRef !== null &&
            props.onClose !== undefined &&
            props.show &&
            styledModalWrapperRef.current.contains(event.target as Node) &&
            styledModalRef.current !== null &&
            !styledModalRef.current.contains(event.target as Node)
        ) {
            props.onClose();
        }
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (props.onClose !== undefined && (event.key === 'Escape' || event.key === 'Esc')) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, false);
        document.addEventListener('keydown', handleKeyDown, false);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, false);
            document.removeEventListener('keydown', handleKeyDown, false);
        };
    });

    return (
        <StyledModalWrapper show={props.show} ref={styledModalWrapperRef}>
            <TransitionAnimation key={0} show={props.show} animation="zoom">
                <Measure bounds>
                    {({ measureRef, contentRect }) => {
                        const isSmall = contentRect.bounds && contentRect.bounds.width < 320;

                        return (
                            <StyledModal
                                modalSize={props.size !== undefined ? props.size : 'large'}
                                // ref={styledModalRef, measureRef}
                                ref={node => {
                                    console.log('node', node);
                                    styledModalRef = node;
                                    measureRef(node);
                                }}
                                role="dialog"
                                aria-modal
                                aria-label={props.title}
                            >
                                <Box
                                    shrink={0}
                                    margin={isSmall ? [18] : [36]}
                                    alignItems="flex-start"
                                    alignContent="center"
                                    justifyContent="space-between"
                                >
                                    <Heading hierarchy={2}>{props.title}</Heading>
                                    {props.onClose !== undefined && (
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
                                                onClick={props.onClose}
                                            />
                                        </Box>
                                    )}
                                </Box>
                                <ScrollBox>
                                    <Box padding={isSmall ? [0, 18, 18, 18] : [0, 36, 36, 36]}>{props.children}</Box>
                                </ScrollBox>
                                {(props.renderFixed || props.buttons) && (
                                    <Contrast>
                                        <Box
                                            direction="column"
                                            alignItems="stretch"
                                            shrink={0}
                                            padding={isSmall ? [24] : [24, 36]}
                                        >
                                            {props.renderFixed && props.renderFixed()}
                                            {props.buttons && (
                                                <ButtonGroup stacked={isSmall}>{props.buttons}</ButtonGroup>
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
};

export default Modal;
export { PropsType };
