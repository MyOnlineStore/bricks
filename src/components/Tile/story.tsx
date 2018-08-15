import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../Box';
import Tile from '.';
import Heading from '../Heading';

storiesOf('Tile', module).add('Default', () => {
    return (
        <Box width="100%">
            <Tile>
                <Heading hierarchy={2}>Tile</Heading>
            </Tile>
        </Box>
    );
});
