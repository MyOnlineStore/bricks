import React, { FC } from 'react';
import Nav from './Nav';
import { Box, FoldOut, Link, Text } from '@myonlinestore/bricks';

const Page: FC = props => {
    return (
        <main>
            <Box minHeight="100vh">
                <Box width="100%" alignContent="stretch">
                    <Box basis="300px">
                        <Nav>
                            <Link href="/" title="Home" />
                            <br />
                            <Link href="/components" title="Badge" />
                        </Nav>
                    </Box>
                    <Box grow={1} padding={[48, 120 as 0]}>
                        {props.children}
                    </Box>
                </Box>
            </Box>
        </main>
    );
};

export default Page;
