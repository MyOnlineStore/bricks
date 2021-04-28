import { storiesOf } from '@storybook/react';
import React from 'react';
import Component from './index';

storiesOf('FileInput', module)
    .add('Default', () => {
        return (
            <Component
                name="HelloWorld"
                placeholder={
                    <>
                        Drag and drop here
                        <br />
                        or <u>browse</u>
                    </>
                }
                dropPlaceholder={<>Drop your file here</>}
            />
        );
    })
    .add('Disabled', () => {
        return (
            <Component
                name="HelloWorld"
                placeholder={
                    <>
                        Drag and drop here
                        <br />
                        or <u>browse</u>
                    </>
                }
                dropPlaceholder={<>Drop your file here</>}
                disabled
            />
        );
    });
