import React, { FC } from 'react';
import { Button, Box, Text } from '@myonlinestore/bricks';
import Sidebar from '../components/Sidebar';

const Index: FC = () => {
    return (
        <Box>
            <Sidebar />
            <Box height="100vh" justifyContent="center" direction="column" width="100%">
                <Text variant="display">Bricks</Text>
                <Text variant="large">A design system and component library made by MyOnlineStore.</Text>
                <Box margin={[24, 0, 0, 0]}>
                    <Button title="Explore" variant="primary" />
                </Box>
            </Box>
        </Box>
    );
};

export default Index;
