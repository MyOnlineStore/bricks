import { storiesOf } from '@storybook/react';
import React from 'react';
import Card from '.';
import Box from '../Box';

storiesOf('Card', module).add('Default', () => (
    <Card>
        <Box padding={[24]}>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</Box>
    </Card>
));
