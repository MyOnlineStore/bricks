import { boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Checkbox from '.';

storiesOf('Checkbox', module).add('Default', () => (
    <Checkbox changeHandler={(): void => undefined} value="bar" checked={boolean('checked', true)} name="foo" />
));
