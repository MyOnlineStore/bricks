import React from 'react';
import { boolean, number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import Range from '.';

storiesOf('Range', module).add('Default', () => {
    return (
        <Range
            value={{ min: 3, max: 5 }}
            label="cm"
            disabled={boolean('disabled', false)}
            minLimit={number('minValue', 1)}
            maxLimit={number('maxValue', 25)}
        />
    );
});
