import { boolean, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import IconButton, { PropsType } from '../IconButton';

storiesOf('Buttons/IconButton', module).add('Default', () => {
    return (
        <IconButton
            icon="bell"
            loading={boolean('loading', false)}
            disabled={boolean('disabled', false)}
            variant={select('variant', ['primary', 'destructive'], 'primary') as PropsType['variant']}
            title={text('title', 'Click me')}
        />
    );
});
