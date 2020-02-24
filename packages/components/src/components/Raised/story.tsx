import React from 'react';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Box from '../Box';
import Raised, { PropsType } from '.';
import Heading from '../Heading';

storiesOf('Raised', module).add('Default', () => {
    const level = select('Level', [0, 1, 2], 0) as PropsType['level'];

    return (
        <Box width="100%">
            <Raised level={level}>
                <Heading hierarchy={2}>Level {level}</Heading>
            </Raised>
        </Box>
    );
});
