import { boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Message from '.';

storiesOf('Message', module)
    .add('Success', () => (
        <Message
            severity="success"
            title="Wow, Great job!"
            message="This went very well."
            date="A few minutes ago"
            read={boolean('read', false)}
        />
    ))
    .add('Error', () => (
        <Message
            severity="error"
            title="Oops!"
            message="Something went wrong. Please try again."
            date="Yesterday 12:12"
            read={boolean('read', false)}
        />
    ))
    .add('Warning', () => (
        <Message
            severity="warning"
            title="Careful!"
            message="This might go wrong."
            read={boolean('read', false)}
        />
    ))
    .add('Info', () => (
        <Message
            severity="info"
            title="FYI"
            message="This just is happend."
            date="12-12-2012"
            read={boolean('read', false)}
        />
    ));
