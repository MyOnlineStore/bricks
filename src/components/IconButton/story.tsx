import { boolean, text, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import IconButton, { PropsType } from '../IconButton';
import bell from '../../assets/icons/bell.svg';

storiesOf('IconButton', module).add('Default', () => {
    return (
        <IconButton
            icon={bell}
            loading={boolean('loading', false)}
            disabled={boolean('disabled', false)}
            variant={select('variant', ['primary', 'destructive'], 'primary') as PropsType['variant']}
            title={text('title', 'Click me')}
        />
    );
});
