import Slider from '.';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, text } from '@storybook/addon-knobs';

storiesOf('Slider', module).add('Default', () => (
    <Slider
        value={10}
        minLimit={number('minValue', 5)}
        maxLimit={number('maxValue', 25)}
        onChange={() => undefined}
        inputFieldWidth={text('inputField width', '100px')}
        hideInputField={boolean('hide inputField', false)}
        disabled={boolean('disabled', false)}
    />
));
