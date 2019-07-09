import Slider from '.';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text, boolean } from '@storybook/addon-knobs';

storiesOf('Slider', module).add('Default', () => (
    <Slider
        label={text('aria-label', 'slider')}
        value={10}
        minLimit={number('minValue', 5)}
        maxLimit={number('maxValue', 25)}
        onChange={() => undefined}
        disabled={boolean('disabled', false)}
    />
));
