import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Checkbox from '.';

storiesOf('Checkbox', module).add('Default', () => (
    <Checkbox
        onChange={(): void => undefined}
        value="bar"
        checked={boolean('checked', true)}
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        name="foo"
    />
));
