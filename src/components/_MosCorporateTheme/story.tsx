import { storiesOf } from '@storybook/react';
import React from 'react';
import MosCorporateTheme from '../../themes/MosCorporateTheme';
import Button from '../Button';
import Box from '../Box';

storiesOf('MosCorporateTheme', module).add('Default', () => {
    return (
        <MosCorporateTheme>
            <Box padding={[-12]} direction="column">
                <Box padding={[12]}>
                    <Button title="Primary button" variant="primary" />
                </Box>
                <Box padding={[12]}>
                    <Button title="Secondary button" variant="secondary" />
                </Box>
                <Box padding={[12]}>
                    <Button title="Warning button" variant="warning" />
                </Box>
                <Box padding={[12]}>
                    <Button title="Destructive button" variant="destructive" />
                </Box>
            </Box>
        </MosCorporateTheme>
    );
});
