import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import InlineNotification from '.';
import SeverityType from '../../types/SeverityType';
import Link from '../Link';
import bell from '../../assets/icons/bell.svg';
import infoCircle from '../../assets/icons/info-circle.svg';

storiesOf('InlineNotification', module)
    .add('Default', () => (
        <InlineNotification
            message="Something is wrong!"
            severity={select('severity', ['error', 'warning', 'success', 'info'], 'error') as SeverityType}
        />
    ))
    .add('With overwritten Icon', () => (
        <InlineNotification
            icon={bell}
            message="Something is wrong!"
            severity={select('severity', ['error', 'warning', 'success', 'info'], 'error') as SeverityType}
        />
    ))
    .add('With children', () => (
        <InlineNotification
            icon={infoCircle}
            severity={select('severity', ['error', 'warning', 'success', 'info'], 'info') as SeverityType}
        >
            Are you having trouble? Check out&nbsp;
            <Link title="some resource" href="http://google.com">
                this
            </Link>
            &nbsp;resource for more info.
        </InlineNotification>
    ));
