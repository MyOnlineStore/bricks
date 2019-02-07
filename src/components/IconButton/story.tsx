import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PropsType } from '.';
import IconButton, { PropsType as PlainPropsType } from '../IconButton';
import { MediumIcons } from '../Icon/types';

/* tslint:disable */
const mediumIconKeys = Object.keys(MediumIcons).filter(key => MediumIcons[key as any].match('<svg'));
/* tslint:enable */

storiesOf('IconButton', module).add('Default', () => {
    return (
        <IconButton
            icon={select('icon', mediumIconKeys, 'cart') as PropsType['icon']}
            loading={boolean('loading', false)}
            disabled={boolean('disabled', false)}
            variant={select('variant', ['primary', 'destructive'], 'primary') as PlainPropsType['variant']}
            title={text('title', 'Click me')}
        />
    );
});
