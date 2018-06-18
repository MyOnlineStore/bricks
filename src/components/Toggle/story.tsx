import { boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Toggle from '.';

storiesOf('Toggle', module).add('Default', () => (
    <Toggle
        changeHandler={(): void => undefined}
        name="Toggle"
        value="foot"
        checked={boolean('checked', true)}
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        label="Turn me on!"
    />
));
