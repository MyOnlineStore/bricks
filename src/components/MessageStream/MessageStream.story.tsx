import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import MessageStream from '.';
import { MessagePropsType } from './MessageStream.template';

const messagesMock:Array<MessagePropsType> = [
    {
        severity: 'success',
        title: 'Sit Inceptos Magna',
        message: 'Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
        date: 'Today 12:00',
        read: false,
    },
    {
        severity: 'info',
        title: 'Aenean Dapibus Vulputate Tortor Magna',
        message: `Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit
                 aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis.`,
        date: 'Today 10:00',
        read: false,
    },
    {
        severity: 'success',
        title: 'Vestibulum Dapibus',
        message: 'Curabitur blandit tempus porttitor.',
        buttonLabel: 'Click me',
        date: 'Yesterday 12:00',
        read: false,
        action: ():void => { alert('Clicked!'); },
    },
    {
        severity: 'warning',
        title: 'Parturient Euismod Mollis Fringilla',
        message: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                 amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.`,
        buttonLabel: 'Click me',
        date: '12-12-2012 12:00',
        read: false,
        action: ():void => { alert('Clicked!'); },
    },
    {
        severity: 'error',
        title: 'Tortor Cursus',
        message: 'Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.',
        buttonLabel: 'Click me',
        date: '12-12-2012 12:00',
        read: true,
        action: ():void => { alert('Clicked!'); },
    },
    {
        severity: 'info',
        title: 'Euismod Dolor Consectetur',
        message: 'Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus.',
        buttonLabel: 'Click me',
        read: true,
        action: ():void => { alert('Clicked!'); },
    },
];

storiesOf('MessageStream', module)
    .add('Default', () => (
        <MessageStream
            messages={messagesMock}
        />
    ));
