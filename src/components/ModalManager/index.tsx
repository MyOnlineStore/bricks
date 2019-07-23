import React, { FC, useEffect, useState, useRef, ReactNode } from 'react';
import StyledModal, { StyledModalWrapper } from '../Modal/style';
import TransitionAnimation from '../TransitionAnimation';
import Measure from 'react-measure';
import Box from '../Box';
import Heading from '../Heading';
import ScrollBox from '../ScrollBox';
import Contrast from '../Contrast';
import ButtonGroup from '../ButtonGroup';
import { IconButton } from '../..';
import { CloseIcon } from '../../assets';

type ModalPropsType = {
    show: boolean;
    title: string;
    size?: 'small' | 'medium' | 'large';
    buttons?: Array<ReactNode>;
    renderContent(): JSX.Element;
    onClose?(): void;
    renderFixed?(): JSX.Element;
};

declare global {
    interface Window {
        modal: {
            render(props: ModalPropsType): void;
            toggle(show: boolean): void;
        };
    }
}

const ModalManager: FC = () => {
    const [visible, setVisibility] = useState(false);
    const styledModalWrapperRef = useRef<HTMLDivElement | null>(null);
    const [props, setProps] = useState<ModalPropsType>({
        show: false,
        title: 'string',
        size: 'large',
        renderContent: () => <div />,
    });

    const renderModal = (props: ModalPropsType) => {
        setProps(props);
        setVisibility(true);
    };

    const toggleModal = (show: boolean) => {
        setVisibility(show);
    };

    const CloseButton = (): JSX.Element => {
        if (props.onClose !== undefined) {
            return (
                <Box
                    margin={[-12, -12, -6, 0]}
                    alignContent="center"
                    justifyContent="flex-end"
                    alignItems="center"
                    grow={0}
                >
                    <IconButton icon={CloseIcon} variant="primary" title="close" onClick={() => setVisibility(false)} />
                </Box>
            );
        }

        return <div />;
    };

    useEffect(() => {
        window.modal = {
            render: renderModal,
            toggle: toggleModal,
        };
    }, [window.modal]);

    if (visible) {
        return (
            <StyledModalWrapper show={visible} ref={styledModalWrapperRef}>
                <TransitionAnimation key={0} show={visible} animation="zoom">
                    <Measure client>
                        {({ measureRef, contentRect }) => {
                            const isSmall = contentRect.client && contentRect.client.width < 320;

                            return (
                                <StyledModal
                                    modalSize={props.size !== undefined ? props.size : 'large'}
                                    ref={measureRef}
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
                                        <CloseButton />
                                    </Box>
                                    <ScrollBox>
                                        <Box padding={isSmall ? [0, 18, 18, 18] : [0, 36, 36, 36]}>
                                            {props.renderContent()}
                                        </Box>
                                    </ScrollBox>
                                    {(props.renderFixed === undefined || props.buttons) && (
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
    }

    return <div />;
};

export default ModalManager;
