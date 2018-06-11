import { select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import InlineNotification from '.';

storiesOf('InlineNotification', module)
    .add('Default', () => (
        <InlineNotification
            message="Something is wrong!"
            severity={select(
                'severity',
                ['error', 'warning', 'success', 'info'],
                'error',
            )}
        />
    ))
    .add('With Icon', () => (
        <InlineNotification
            icon="dangerCircle"
            message="Something is wrong!"
            severity={select(
                'severity',
                ['error', 'warning', 'success', 'info'],
                'error',
            )}
        />
    ));
