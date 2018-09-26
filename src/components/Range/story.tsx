import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import Range from './';

storiesOf('Range', module).add('Default', () => {
    return (
        <Range
            value={{min: 2, max: 5}}
            label="cm"
        />
    );
});
