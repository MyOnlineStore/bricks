import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import PromotionBadge, { PropsType } from '.';

storiesOf('PromotionBadge', module).add('Default', () => {
    return (
        <PromotionBadge variant={select('variant', ['pro', 'premium', 'grow', 'new'], 'pro') as PropsType['variant']}>
            {text('text', 'PRO')}
        </PromotionBadge>
    );
});
