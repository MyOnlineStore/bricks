import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Illustration, { IllustrationPropsType } from '.';
import Box from '../Box';

storiesOf('Illustration', module).add('default', () => {
    const illustration = text('illustration', 'cactus') as IllustrationPropsType['illustration'];

    return (
        <Box justifyContent="space-around">
            <Illustration illustration={illustration} />
        </Box>
    );
});
