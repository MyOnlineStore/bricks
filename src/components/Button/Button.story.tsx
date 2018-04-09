import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '../Button';

storiesOf('Button', module)
    .add('Primary', () => {
        return (
            <Button
                variant="primary"
                title="Click me!"
                action={():void => { alert('clicked!'); }}
            >
                Click me
            </Button>
        );
    })
    .add('Secondary', () => {
        return (
            <Button
                variant="secondary"
                title="Click me!"
                action={():void => { alert('clicked!'); }}
            >
                Click me
            </Button>
        );
    })
    .add('Destructive', () => {
        return (
            <Button
                variant="destructive"
                title="Click me!"
                action={():void => { alert('clicked!'); }}
            >
                Click me
            </Button>
        );
    })
    .add('Warning', () => {
        return (
            <Button
                variant="warning"
                title="Click me!"
                action={():void => { alert('clicked!'); }}
            >
                Click me
            </Button>
        );
    })
    .add('Disabled', () => {
        return (
            <Button
                title="Click me if you can!"
                disabled={true}
            >
                Click me if you can!
            </Button>
        );
    })
    .add('With a link', () => {
            return (
                <Button
                    variant="primary"
                    title="Click me!"
                    href="http://www.google.nl"
                    target="_blank"
                >
                    Click me
                </Button>
            );
    });
