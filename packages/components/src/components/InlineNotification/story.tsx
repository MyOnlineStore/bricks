import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import InlineNotification from '.';
import Link from '../Link';
import { BellIcon, InfoCircleIcon } from '@myonlinestore/bricks-assets';

storiesOf('InlineNotification', module)
    .add('Default', () => (
        <InlineNotification
            message="Something is wrong!"
            severity={select('severity', ['error', 'warning', 'success', 'info'], 'error')}
        />
    ))
    .add('With overwritten Icon', () => (
        <InlineNotification
            icon={<BellIcon />}
            message="Something is wrong!"
            severity={select('severity', ['error', 'warning', 'success', 'info'], 'error')}
        />
    ))
    .add('With children', () => (
        <InlineNotification
            icon={<InfoCircleIcon />}
            severity={select('severity', ['error', 'warning', 'success', 'info'], 'info')}
        >
            Are you having trouble? Check out&nbsp;
            <Link title="some resource" href="http://google.com">
                this
            </Link>
            &nbsp;resource for more info.
        </InlineNotification>
    ));
