import React, { FC } from 'react';
import { Button, Box, Text } from '@myonlinestore/bricks';
import Page from '../components/Page';

const Index: FC = () => {
    return (
        <Page>
            <Box height="100vh" justifyContent="center" direction="column" width="100%">
                <Text variant="display">Bricks</Text>
                <Text variant="large">A design system and component library made by MyOnlineStore.</Text>
                <Box margin={[24, 0, 0, 0]}>
                    <Button title="Explore" variant="primary" />
                </Box>
            </Box>
        </Page>
    );
};

export default Index;
