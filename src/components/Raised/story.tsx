import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import Box from '../Box';
import Raised, { RaisedPropsType } from './style';
import Heading from '../Heading';

storiesOf('Raised', module).add('Default', () => {
    const level = select('Level', [0, 1, 2], 0) as RaisedPropsType['level'];

    return (
        <Box width="100%">
            <Raised level={level}>
                <Heading hierarchy={2}>Level {level}</Heading>
            </Raised>
        </Box>
    );
});
