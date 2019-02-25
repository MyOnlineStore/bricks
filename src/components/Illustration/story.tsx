import { storiesOf } from '@storybook/react';
import React from 'react';
import Illustration from '.';
import Box from '../Box';
import Text from '../Text';

storiesOf('Illustration', module).add('default', () => (
    <Box wrap margin={[12]}>
        {ILLUSTRATION_FILES.map(illustration => (
            <Box basis="33.33%" justifyContent="space-around" direction="column" alignItems="center">
                <Illustration illustration={require(`../../assets/illustrations/${illustration}`)} />
                <Text>{illustration}</Text>
            </Box>
        ))}
    </Box>
));
