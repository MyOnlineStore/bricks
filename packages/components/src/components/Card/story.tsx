import { storiesOf } from '@storybook/react';
import React from 'react';
import Card from '.';
import Box from '../Box';
import Text from '../Text';

storiesOf('Card', module).add('Default', () => (
    <Card>
        <Box padding={[24]}>
            <Text>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</Text>
        </Box>
    </Card>
));
