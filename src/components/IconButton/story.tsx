import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import IconButton from '../IconButton';
import bell from '../../assets/icons/bell.svg';

storiesOf('IconButton', module).add('Default', () => {
    return (
        <IconButton
            icon={bell}
            loading={boolean('loading', false)}
            disabled={boolean('disabled', false)}
            variant={select('variant', ['primary', 'destructive'], 'primary')}
            title={text('title', 'Click me')}
        />
    );
});