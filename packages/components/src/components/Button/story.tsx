import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '../Button';
import { CartIcon } from '@myonlinestore/bricks-assets';

storiesOf('Buttons/Button', module)
    .add('Default', () => {
        return (
            <Button
                variant={select(
                    'variant',
                    ['primary', 'secondary', 'warning', 'destructive', 'info', 'plain'],
                    'primary',
                )}
                loading={boolean('loading', false)}
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                compact={boolean('compact', false)}
            />
        );
    })
    .add('With an icon', () => {
        return (
            <Button
                variant={select(
                    'variant',
                    ['primary', 'secondary', 'warning', 'destructive', 'info', 'plain'],
                    'primary',
                )}
                loading={boolean('loading', false)}
                title={text('title', 'Add to cart')}
                icon={<CartIcon />}
                disabled={boolean('disabled', false)}
            />
        );
    });
