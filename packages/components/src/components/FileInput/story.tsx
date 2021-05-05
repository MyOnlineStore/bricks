import React, { ComponentProps, useState } from 'react';
import FileInput, { FeedbackType } from './index';

export default {
    title: 'FileInput',
    component: FileInput,
    args: {
        name: 'HelloWorld',
        maxHeight: '300px',
        accept: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', '*.pdf', 'video/*', 'application/msword'],
        placeholder: (
            <>
                Drag and drop here
                <br />
                or <u>browse</u>
            </>
        ),
        dropPlaceholder: <>Drop your file here</>,
        onDelete: () => {
            alert('You pressed delete 😱');
        },
    },
};

export const Default = (props: ComponentProps<typeof FileInput>) => {
    const [error, setError] = useState<null | FeedbackType>(null);

    return (
        <FileInput
            {...props}
            onError={(error: string) => {
                if (error === 'Filetype not accepted.') {
                    setError({
                        message: 'Sorry, that’s not a valid image file. Please choose a JPG, .PNG, or .GIF file.',
                        severity: 'error',
                    });
                }
            }}
            onResetError={() => setError(null)}
            feedback={error !== null ? error : { message: 'Files supported: PDF, JPEG, PNG', severity: 'info' }}
        />
    );
};

export const WithValue = (props: ComponentProps<typeof FileInput>) => {
    const [error, setError] = useState<null | FeedbackType>(null);

    return (
        <FileInput
            {...props}
            value={{
                url: 'https://thisisthedailyrad.files.wordpress.com/2013/02/large_193482-1915212.jpg',
                alt: 'Roaling Coal Volvo 242',
            }}
            onError={(error: string) => {
                if (error === 'Filetype not accepted.') {
                    setError({
                        message: 'Sorry, that’s not a valid image file. Please choose a JPG, .PNG, or .GIF file.',
                        severity: 'error',
                    });
                }
            }}
            onResetError={() => setError(null)}
            feedback={error !== null ? error : undefined}
        />
    );
};

export const Disabled = (props: ComponentProps<typeof FileInput>) => {
    return <FileInput {...props} disabled />;
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
