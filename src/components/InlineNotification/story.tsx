import { select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import InlineNotification from '.';
import SeverityType from '../../types/SeverityType';

storiesOf('InlineNotification', module)
    .add('Default', () => (
        <InlineNotification
            message="Something is wrong!"
            severity={select('severity', ['error', 'warning', 'success', 'info'], 'error') as SeverityType}
        />
    ))
    .add('With overwritten Icon', () => (
        <InlineNotification
            icon="bell"
            message="Something is wrong!"
            severity={select('severity', ['error', 'warning', 'success', 'info'], 'error') as SeverityType}
        />
    ));
