import { storiesOf } from '@storybook/react';
import React from 'react';
import { shopTheme } from '../../themes';
import { ThemeProvider } from '../../utility/styled/styled';
import Button from './Button.style';

storiesOf('Button', module)
    .add('Primary', () => {
        return (
            <Button
                type="primary"
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
                type="secondary"
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
                type="destructive"
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
                type="warning"
                title="Click me!"
                action={():void => { alert('clicked!'); }}
            >
                Click me
            </Button>
        );
    })
    .add('With a link', () => {
        return (
            <Button
                type="primary"
                title="Click me!"
                href="http://www.google.nl"
                target="_blank"
            >
                Click me
            </Button>
        );
    });
