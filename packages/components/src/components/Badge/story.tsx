import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Badge, { PropsType } from '.';

storiesOf('Badge', module).add('Default', () => {
    return (
        <Badge
            variant={
                select(
                    'severity',
                    ['primary', 'secondary', 'warning', 'error', 'info'],
                    'primary',
                ) as PropsType['variant']
            }
        >
            {text('text', 'Badger')}
        </Badge>
    );
});
