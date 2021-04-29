import React, { FC, useRef, useEffect, useState } from 'react';
import InlineNotification from '../InlineNotification';
import Box from '../Box';
import { StyledWrapper, StyledFileInput, StyledPreviewImage } from './style';
import SeverityType from '../../types/SeverityType';
import UploadPlaceholder from './UploadPlaceholder';

export type InputSeverityType = 'error';

export type PropsType = {
    name: string;
    feedback?: {
        'data-testid'?: string;
        severity: SeverityType;
        message: string;
    };
    translations: {
        placeholder: string;
        dropHere: string;
    };
};

const FileInput: FC<PropsType> = props => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [draggingOver, setDraggingOver] = useState(false);
    const [preview, setPreview] = useState<string | ArrayBuffer | null | undefined>(null);
    const [previewFilename, setPreviewFilename] = useState();

    useEffect(() => {
        if (focus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [focus]);

    return (
        <>
            <StyledWrapper
                focus={draggingOver}
                disabled={false}
                hasPreview={typeof preview === 'string'}
                severity={props.feedback?.severity === 'error' ? props.feedback.severity : undefined}
                height="230px"
                maxWidth="526px"
                justifyContent="center"
                alignItems="center"
            >
                {typeof preview === 'string' ? (
                    <StyledPreviewImage src={preview} alt={previewFilename || 'Preview'} />
                ) : (
                    <UploadPlaceholder dragging={draggingOver} translations={props.translations} />
                )}
                <StyledFileInput
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
                        if (inputRef.current?.files && inputRef.current?.files[0]) {
                            const reader = new FileReader();

                            reader.onload = event => {
                                setPreview(event?.target?.result);
                            };

                            setPreviewFilename(inputRef.current.files[0].name);
                            reader.readAsDataURL(inputRef.current.files[0]);
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
