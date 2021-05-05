import React, { FC, useRef, useEffect, useState, ReactNode, useContext } from 'react';
import InlineNotification from '../InlineNotification';
import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import { CloudUploadIcon } from '@myonlinestore/bricks-assets';
import { StyledWrapper, StyledFileInput, StyledPreviewImage } from './style';
import SeverityType from '../../types/SeverityType';
import { ThemeContext } from 'styled-components';

export type InputSeverityType = 'error';

export type FeedbackType = {
    'data-testid'?: string;
    severity: SeverityType;
    message: string;
};

export type PropsType = {
    name: string;
    value?: {
        url: string;
        alt: string;
    };
    disabled?: boolean;
    accept: Array<string>;
    feedback?: FeedbackType;
    placeholder: ReactNode;
    dropPlaceholder: ReactNode;
    onError(error: string | null): void;
    onResetError(): void;
};

const FileInput: FC<PropsType> = props => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [draggingOver, setDraggingOver] = useState(false);
    const [preview, setPreview] = useState<string | ArrayBuffer | null | undefined>(null);
    const [previewFilename, setPreviewFilename] = useState();
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        if (focus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [focus]);

    const whatImageToDisplay = (): { source: string; alt: string } | null => {
        if (typeof preview === 'string') {
            return {
                source: preview,
                alt: previewFilename,
            };
        }

        if (props.value?.url) {
            return {
                source: props.value.url,
                alt: props.value.alt,
            };
        }

        return null;
    };

    const image = whatImageToDisplay();

    return (
        <>
            <StyledWrapper
                focus={draggingOver}
                disabled={props.disabled}
                hasPreview={typeof preview === 'string'}
                severity={props.feedback?.severity === 'error' ? props.feedback.severity : undefined}
                height="230px"
                maxWidth="526px"
                justifyContent="center"
                alignItems="center"
            >
                {image ? (
                    <StyledPreviewImage src={image.source} alt={image.alt} />
                ) : (
                    <Box direction="column" justifyContent="center" alignItems="center">
                        <Icon icon={<CloudUploadIcon />} size="large" color={themeContext.FileInput.common.iconColor} />
                        <Text textAlign="center">{draggingOver ? props.dropPlaceholder : props.placeholder}</Text>
                    </Box>
                )}
                <StyledFileInput
                    accept="image/*"
                    disabled={props.disabled}
                    ref={ref => {
                        inputRef.current = ref;
                    }}
                    type="file"
                    onDragEnter={() => {
                        setDraggingOver(true);
                    }}
                    onDragLeave={() => {
                        setDraggingOver(false);
                    }}
                    onDrop={() => {
                        setDraggingOver(false);
                    }}
                    onChange={() => {
                        const files = inputRef.current?.files;

                        if (files && files[0]) {
                            const firstFile = files[0];
                            const reader = new FileReader();

                            reader.onload = event => {
                                setPreview(null);
                                setPreviewFilename('');

                                if (props.accept && !props.accept.includes(firstFile.type)) {
                                    props.onError('Filetype not accepted.');

                                    return;
                                }

                                props.onResetError();

                                setPreview(event?.target?.result);
                                setPreviewFilename(firstFile.name);
                            };

                            reader.readAsDataURL(firstFile);
                        }
                    }}
                />
            </StyledWrapper>
            {props.feedback && (
                <Box margin={[3, 0, 0, 0]}>
                    <InlineNotification
                        data-testid={props.feedback['data-testid']}
                        message={props.feedback.message}
                        severity={props.feedback.severity}
                    />
                </Box>
            )}
        </>
    );
};

export default FileInput;
