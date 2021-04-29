import React, { ComponentProps } from 'react';
import FileInput from './index';

export default {
    title: 'FileInput',
    component: FileInput,
    args: {
        name: 'HelloWorld',
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
    return <FileInput {...props} />;
};

export const Disabled = (props: ComponentProps<typeof FileInput>) => {
    return <FileInput {...props} disabled />;
};

export const OnlyImages = (props: ComponentProps<typeof FileInput>) => {
    return <FileInput {...props} accept={['image/png', 'image/jpeg', 'image/jpg', 'image/gif']} />;
};

export const Error = (props: ComponentProps<typeof FileInput>) => {
    return (
        <FileInput
            {...props}
            feedback={{
                message: 'Het bestand Photo.JPG is te groot. Je afbeelding mag maximaal 1 GB zijn',
                severity: 'error',
            }}
        />
    );
};
