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
};

const TextField: FC<PropsType> = props => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [draggingOver, setDraggingOver] = useState(false);
    const [preview, setPreview] = useState<string | ArrayBuffer | null | undefined>(null);

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
                {preview && typeof preview === 'string' ? (
                    <StyledPreviewImage src={preview} alt="preview" />
                ) : (
                    <UploadPlaceholder dragging={draggingOver} />
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

                            reader.onload = e => {
                                setPreview(e?.target?.result);
                            };

                            reader.readAsDataURL(inputRef.current.files[0]);
                        }
                    }}
                />
            </StyledWrapper>
            {props.feedback && props.feedback.message !== '' && (
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

export default TextField;
