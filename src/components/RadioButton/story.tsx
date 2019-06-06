import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import RadioButton from '../RadioButton';

storiesOf('RadioButton', module).add(
    'Default & Props',
    withInfo({ inline: true })(() => {
        return (
            <RadioButton
                checked={boolean('checked', true)}
                disabled={boolean('disabled', false)}
                error={boolean('error', false)}
                name="demo"
                label={text('label', 'foo')}
                value="demo2"
                onChange={(): void => undefined}
            />
        );
    }),
);
