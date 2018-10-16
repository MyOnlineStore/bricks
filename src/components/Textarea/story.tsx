import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from '.';

storiesOf('Textarea', module).add('Default', () => {
    return <Textarea resizeable />;
});
