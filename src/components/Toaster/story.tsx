import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Toaster, { PropsType } from '.';

storiesOf('Toaster', module).add('Default', () => (
    <Toaster
        isOpen={boolean('show', true)}
        severity={select('severity', ['success', 'warning', 'error', 'info'], 'info') as PropsType['severity']}
        closeAction={(): boolean => confirm('Do you want to close the toaster? \nYou must choose, but choose wisely')}
        title={text('title', 'Thought provoking we must stand.')}
        message={text(
            'description',
            'Game-changer problem-solvers; state of play invest, synergy uplift we must stand up ideate social intrapreneurship.',
        )}
    />
));

storiesOf('Toaster', module).add('With action button', () => (
    <Toaster
        icon="cash"
        action={(): boolean => confirm('I love pressing F5, its so refreshing')}
        isOpen={boolean('show', true)}
        severity={select('severity', ['success', 'warning', 'error', 'info'], 'error') as PropsType['severity']}
        closeAction={(): boolean => confirm('Do you want to close the toaster? \nYou must choose, but choose wisely')}
        buttonTitle={text('Button title', 'Hello')}
        title={text('title', 'Overcome injustice.')}
        message={text(
            'description',
            'Global low-hanging fruit, collaborative consumption segmentation mobilize support. Problem-solvers cultivate, best practices, shared unit of.',
        )}
    />
));
