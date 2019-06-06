import { boolean, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import IconButton, { PropsType } from '../IconButton';
import bell from '../../assets/icons/bell.svg';

storiesOf('IconButton', module).add(
    'Default',
    withInfo({ inline: true })(() => {
        return (
            <IconButton
                icon={bell}
                loading={boolean('loading', false)}
                disabled={boolean('disabled', false)}
                variant={select('variant', ['primary', 'destructive'], 'primary') as PropsType['variant']}
                title={text('title', 'Click me')}
            />
        );
    }),
);
