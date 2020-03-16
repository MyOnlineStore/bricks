import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Counter, { PropsType } from '.';

storiesOf('Counter', module).add('Default', () => {
    return (
        <Counter
            severity={select('severity', ['success', 'warning', 'error', 'info'], 'success') as PropsType['severity']}
        >
            {text('text', '1')}
        </Counter>
    );
});
