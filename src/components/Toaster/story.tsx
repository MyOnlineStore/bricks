import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Toaster, { PropsType } from '.';

storiesOf('Toaster', module).add('Default', () => (
    <Toaster
        show={boolean('show', true)}
        severity={select('severity', ['success', 'warning', 'error', 'info'], 'success') as PropsType['severity']}
        closeAction={(): boolean => confirm('Do you want to close the toaster? \nYou must choose, but choose wisely')}
        buttonTitle={text('Button title', 'No.')}
        title="Klarna activatie"
        message="So strongly and metaphysically did I conceive of my situation then, that."
    />
));
