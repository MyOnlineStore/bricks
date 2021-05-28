import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '.';

storiesOf('Icon', module).add('Default', () => (
    <Icon
        color={text('color', '#123456')}
        icon={select('icon', ['cart', 'cart-large'], 'cart')}
        size={select('size', ['small', 'medium', 'large'], 'medium')}
    />
));
