import React, { FC, ReactNode, useRef, useEffect } from 'react';
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
import styled from 'styled-components';

type PropsType = {
    'data-testid'?: string;
    show: boolean;
    title: string;
    size?: 'small' | 'medium' | 'large';
    buttons?: Array<ReactNode>;
    media?: ReactNode;
    mediaBleed?: boolean;
    mediaOverlap?: number;
    centered?: boolean;
    onClose?(): void;
    renderFixed?(): JSX.Element;
};

const MediaWrapper = styled.figure<{ fullWidth?: boolean; bleed?: boolean; overlap: number }>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    width: ${({ fullWidth, bleed, overlap }) => {
        if (fullWidth) {
            return '100%;';
        }

        return bleed && overlap ? '50%' : 'calc(50% - 48px)';
    }};
    margin: ${({ fullWidth, bleed, overlap }) => {
        if (bleed) {
            return `0 0 0 -${overlap}px`;
        }

        return fullWidth ? '0 0 24px 0' : '24px';
    }};
    overflow: hidden;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
`;

const Modal: FC<PropsType> = props => {
    const styledModalRef = useRef<HTMLDivElement | null>(null);
    const styledModalWrapperRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: Event) => {
        if (
            styledModalWrapperRef.current !== null &&
            styledModalRef.current !== null &&
            props.onClose !== undefined &&
            props.show &&
            styledModalWrapperRef.current.contains(event.target as Node) &&
            !styledModalRef.current.contains(event.target as Node)
        ) {
            props.onClose();
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
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
                <Measure client>
                    {({ measureRef, contentRect }) => {
                        const isSmall = contentRect.client && contentRect.client.width < 320;

                        // isSplit = true : two column layout with content left and media right
                        const isSplit =
                            props.size !== 'small' &&
                            props.media !== undefined &&
                            contentRect.client &&
                            contentRect.client.width > 480;

                        return (
                            <StyledModal
                                data-testid={props['data-testid']}
                                modalSize={props.size !== undefined ? props.size : 'large'}
                                ref={node => {
                                    styledModalRef.current = node;
                                    measureRef(node);
                                }}
                                role="dialog"
                                aria-modal
                                aria-label={props.title}
                            >
                                {props.onClose !== undefined && (
                                    <Box
                                        zIndex={10}
                                        position="absolute"
                                        top="12px"
                                        right="24px"
                                        alignContent="center"
                                        justifyContent="flex-end"
                                        alignItems="center"
                                        grow={0}
                                    >
                                        <IconButton
                                            data-testid="modal-close-button"
                                            icon={close}
                                            variant="primary"
                                            title="close"
                                            onClick={props.onClose}
                                        />
                                    </Box>
                                )}
                                <Box
                                    shrink={1}
                                    grow={1}
                                    style={{ overflow: 'hidden' }}
                                    direction={!isSplit ? 'column' : 'row-reverse'}
                                >
                                    {props.media && isSplit && (
                                        <MediaWrapper
                                            bleed={props.mediaBleed}
                                            overlap={props.mediaOverlap ? props.mediaOverlap : 0}
                                        >
                                            {props.media}
                                        </MediaWrapper>
                                    )}
                                    <ScrollBox>
                                        <Box direction="column" padding={isSmall ? [18] : [36]}>
                                            {!isSplit && props.media && (
                                                <MediaWrapper data-testid="modal-media-container" fullWidth overlap={0}>
                                                    {props.media}
                                                </MediaWrapper>
                                            )}
                                            <Box margin={[0, 0, 12, 0]} direction="column">
                                                <Heading
                                                    data-testid="modal-title"
                                                    textAlign={props.centered ? 'center' : 'left'}
                                                    hierarchy={2}
                                                >
                                                    {props.title}
                                                </Heading>
                                            </Box>
                                            {props.children}
                                        </Box>
                                    </ScrollBox>
                                </Box>
                                {(props.renderFixed || props.buttons) && (
                                    <Box shrink={0} width="100%" direction="column">
                                        <Contrast>
                                            <Box
                                                data-testid="modal-buttons-container"
                                                direction="column"
                                                alignItems={props.centered ? 'center' : 'stretch'}
                                                shrink={0}
                                                padding={isSmall ? [24] : [24, 36]}
                                            >
                                                {props.renderFixed && props.renderFixed()}
                                                {props.buttons && (
                                                    <ButtonGroup direction={isSmall ? 'stacked' : 'rtl'}>
                                                        {props.buttons}
                                                    </ButtonGroup>
                                                )}
                                            </Box>
                                        </Contrast>
                                    </Box>
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
