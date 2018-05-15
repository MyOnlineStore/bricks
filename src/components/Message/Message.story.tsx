import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Message from '.';

storiesOf('Message', module)
    .add('Default', () => (
        <Message
            severity={select('severity', ['success', 'warning', 'error', 'info'], 'success')}
            title={text('title', 'Title')}
            message={text('message', 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.')}
            date={text('date', 'Today 12:00')}
            read={boolean('read', false)}
            buttonLabel={text('buttonLabel', 'Click me')}
            action={():void => { alert('click'); }}
        />
    ));
