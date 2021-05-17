import React, { FC, useRef, useState, useContext, MutableRefObject, ReactNode, useEffect } from 'react';
import SeverityType from '../../types/SeverityType';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import InlineNotification from '../InlineNotification';
import { CactusSmallInactiveIllustration, CactusSmallActiveIllustration } from '@myonlinestore/bricks-assets';
import { StyledWrapper, StyledFileInput, StyledPreviewImage } from './style';
import { ThemeContext } from 'styled-components';

export type FeedbackType = {
    'data-testid'?: string;
    severity: SeverityType;
    message: string;
};

export type ValueType = {
    source: string;
    alt: string;
};

export type FileInputInstanceType = {
    pickFile(): void;
    clear(): void;
};

export type PropsType = {
    name: string;
    instance: MutableRefObject<FileInputInstanceType | null>;
    value?: {
        url: string;
        alt: string;
    };
    preview?: ValueType;
    maxHeight?: string;
    disabled?: boolean;
    accept: Array<string>;
    feedback?: FeedbackType;
    placeholder: ReactNode;
    dropPlaceholder: ReactNode;
    toolbar?: ReactNode;
    onChange(value: File): void;
};

const FileInput: FC<PropsType> = props => {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [draggingOver, setDraggingOver] = useState(false);
    const [hasImage, setHasImage] = useState<boolean>(!!props.preview);
    const themeContext = useContext(ThemeContext);

    const publicMethods: FileInputInstanceType = {
        pickFile() {
            fileInputRef.current?.click();
        },
        clear() {
            if (fileInputRef.current?.value) {
                fileInputRef.current.value = '';
            }
            setHasImage(false);
        },
    };

    useEffect(() => {
        props.instance.current = publicMethods;
    }, []);

    useEffect(() => {
        setHasImage(!!props.preview);
    }, [!!props.preview]);

    return (
        <>
            <StyledWrapper
                focus={draggingOver}
                disabled={props.disabled}
                hasPreview={typeof props.preview?.source === 'string'}
                severity={props.feedback?.severity === 'error' ? props.feedback.severity : undefined}
                justifyContent="center"
                alignItems="stretch"
            >
                {hasImage ? (
                    <>
                        <Box grow={1} shrink={1} justifyContent="center" alignItems="center">
                            <StyledPreviewImage
                                src={props.preview?.source}
                                alt={props.preview?.alt}
                                style={{ maxHeight: `calc(${props.maxHeight} - 24px` }}
                                ref={ref => {
                                    imageRef.current = ref;
                                }}
                            />
                        </Box>
                        {props.toolbar && <Box style={{ zIndex: 2 }}>{props.toolbar}</Box>}
                    </>
                ) : (
                    <Box direction="row" justifyContent="center" alignItems="center" padding={[24]}>
                        <Icon
                            icon={
                                draggingOver ? <CactusSmallActiveIllustration /> : <CactusSmallInactiveIllustration />
                            }
                            size="large"
                            color={themeContext.FileInput.common.iconColor}
                        />
                        <Text style={{ marginLeft: '16px' }}>
                            {draggingOver ? props.dropPlaceholder : props.placeholder}
                        </Text>
                    </Box>
                )}
                <StyledFileInput
                    accept={props.accept.join(',')}
                    disabled={props.disabled}
                    ref={ref => {
                        fileInputRef.current = ref;
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
                        const files = fileInputRef.current?.files;

                        if (files && files[0]) {
                            const firstFile = files[0];
                            const reader = new FileReader();

                            reader.onload = event => {
                                setHasImage(true);

                                if (imageRef.current) {
                                    imageRef.current.src = event?.target?.result as string;
                                    imageRef.current.alt = firstFile.name;
                                }

                                props.onChange(firstFile);
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
