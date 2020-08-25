import { text, select } from '@storybook/addon-knobs';
import React from 'react';
import Badge, { PropsType } from '.';

export default {
    title: 'Badge',
};

export const Default = () => {
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
};
