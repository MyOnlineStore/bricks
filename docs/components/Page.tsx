import React, { FC } from 'react';
import { Box } from '@myonlinestore/bricks';
import Header from './Header';

const Page: FC = props => {
    return (
        <main style={{ backgroundColor: '#F8F9FB' }}>
            <Box minHeight="100vh" direction="column" maxWidth="1200px" margin={['auto']}>
                <Header />
                <Box width="100%" minHeight="80vh" alignContent="stretch">
                    {props.children}
                </Box>
            </Box>
        </main>
    );
};

export default Page;

// zwart 25% x=0 y=1 blur=4 spread=0
