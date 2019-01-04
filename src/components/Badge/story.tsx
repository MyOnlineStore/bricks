import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Badge, { BadgePropsType } from '.';

storiesOf('Badge', module).add('Default', () => {
    return (
        <Badge severity={select('severity', ['success', 'warning', 'error', 'info'], 'success') as BadgePropsType['severity']}>
            {text('text', '1')}
        </Badge>
    );
});
