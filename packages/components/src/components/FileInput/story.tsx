import React, { ComponentProps, useState, useRef } from 'react';
import FileInput, { FeedbackType, FileInputInstanceType } from './index';
import Toolbar from '../Toolbar';
import IconButton from '../IconButton';
import { GearIcon, TrashIcon } from '@myonlinestore/bricks-assets';

export default {
    title: 'FileInput',
    component: FileInput,
    args: {
        name: 'HelloWorld',
        maxHeight: '300px',
        accept: ['image/jpeg'],
        placeholder: (
            <>
                Drag and drop here
                <br />
                or <u>browse</u>
            </>
        ),
        dropPlaceholder: <>Drop your file here</>,
    },
};

export const Default = (props: ComponentProps<typeof FileInput>) => {
    const FileInputInstance = useRef<FileInputInstanceType | null>(null);
    const [error, setError] = useState<null | FeedbackType>(null);

    return (
        <FileInput
            {...props}
            instance={FileInputInstance}
            toolbar={
                <Toolbar direction="vertical">
                    <IconButton
                        icon={<GearIcon />}
                        title="Edit"
                        onClick={() => {
                            FileInputInstance.current?.pickFile();
                        }}
                    />
                    <IconButton
                        icon={<TrashIcon />}
                        title="Remove"
                        onClick={() => {
                            FileInputInstance.current?.reset();
                        }}
                    />
                </Toolbar>
            }
            onChange={file => {
                if (file.type !== 'image/jpeg') {
                    setError({
                        message: 'Sorry, that’s not a valid image file. Please choose a JPG, .PNG, or .GIF file.',
                        severity: 'error',
                    });
                }
            }}
            feedback={error !== null ? error : { message: 'Files supported: JPEG', severity: 'info' }}
        />
    );
};

export const WithPreview = (props: ComponentProps<typeof FileInput>) => {
    const FileInputInstance = useRef<FileInputInstanceType | null>(null);
    const [error, setError] = useState<null | FeedbackType>(null);

    return (
        <FileInput
            {...props}
            instance={FileInputInstance}
            toolbar={
                <Toolbar direction="vertical">
                    <IconButton
                        icon={<GearIcon />}
                        title="Edit"
                        onClick={() => {
                            FileInputInstance.current?.pickFile();
                        }}
                    />
                    <IconButton
                        icon={<TrashIcon />}
                        title="Remove"
                        onClick={() => {
                            FileInputInstance.current?.reset();
                        }}
                    />
                </Toolbar>
            }
            preview={{
                source: 'https://thisisthedailyrad.files.wordpress.com/2013/02/large_193482-1915212.jpg',
                alt: "Rollin' Coal Volvo 242",
            }}
            onChange={file => {
                if (file.type !== 'image/jpeg') {
                    setError({
                        message: 'Sorry, that’s not a valid image file. Please choose a JPG, .PNG, or .GIF file.',
                        severity: 'error',
                    });
                }
            }}
            feedback={error !== null ? error : { message: 'Files supported: JPEG', severity: 'info' }}
        />
    );
};

export const Disabled = (props: ComponentProps<typeof FileInput>) => {
    return <FileInput {...props} disabled />;
};
