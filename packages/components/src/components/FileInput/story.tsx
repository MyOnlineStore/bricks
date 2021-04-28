import { storiesOf } from '@storybook/react';
import React from 'react';
import Component from './index';

storiesOf('FileInput', module).add('Default', () => {
    return <Component name="HelloWorld" />;
});
