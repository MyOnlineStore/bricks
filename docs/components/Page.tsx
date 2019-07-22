import React, { FC } from 'react';
import Nav from './Nav';
import { Box, FoldOut, Link, Text } from '@myonlinestore/bricks';

const Page: FC = props => {
    return (
        <main>
            <Box width="100%">
                <Box basis="300px">
                    <Nav>
                        <Box margin={[0, 0, 12, 0]}>
                            <Text strong variant="large">
                                Components
                            </Text>
                        </Box>
                        <FoldOut open>
                            <Text>
                                <Link href="" title="Button" />
                            </Text>
                        </FoldOut>
                    </Nav>
                </Box>
                <Box grow={1} padding={[48, 120 as 0]}>
                    {props.children}
                </Box>
            </Box>
        </main>
    );
};

export default Page;
