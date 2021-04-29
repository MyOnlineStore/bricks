import { storiesOf } from '@storybook/react';
import React from 'react';
import Component from './index';

const placeholder = (
    <>
        Drag and drop here
        <br />
        or <u>browse</u>
    </>
);
const dropPlaceholder = <>Drop your file here</>;

storiesOf('FileInput', module)
    .add('Default', () => {
        return <Component name="HelloWorld" placeholder={placeholder} dropPlaceholder={dropPlaceholder} />;
    })
    .add('Disabled', () => {
        return <Component name="HelloWorld" placeholder={placeholder} dropPlaceholder={dropPlaceholder} disabled />;
    })
    .add('Only PNG/JPG/GIF', () => {
        return <Component name="HelloWorld" placeholder={placeholder} dropPlaceholder={dropPlaceholder} checkImage />;
    })
    .add('Error', () => {
        return (
            <Component
                name="HelloWorld"
                placeholder={placeholder}
                dropPlaceholder={dropPlaceholder}
                feedback={{
                    message: 'Het bestand Photo.JPG is te groot. Je afbeelding mag maximaal 1 GB zijn',
                    severity: 'error',
                }}
            />
        );
    });
