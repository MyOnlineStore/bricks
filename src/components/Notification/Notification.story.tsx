import { storiesOf } from '@storybook/react';
import React from 'react';
import Notification from '.';

storiesOf('Notification', module)
    .add('Success', () => (
        <Notification
            severity="success"
            message="Wow, Great job!"
        />
    ))
    .add('Error', () => (
        <Notification
            severity="error"
            message="Oops, something wen't wrong. Please try again."
        />
    ))
    .add('Warning', () => (
        <Notification
            severity="warning"
            message="Careful, this might go wrong."
        />
    ))
    .add('Info', () => (
        <Notification
            severity="info"
            message="Oops, something wen't wrong. Please try again."
        />
    ))
    .add('With a custom icon', () => (
        <Notification
            severity="warning"
            message="Meh, I am not impressed."
            icon="meh"
        />
    ));
