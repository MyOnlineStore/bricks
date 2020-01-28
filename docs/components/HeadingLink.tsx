import React, { FC } from 'react';
import { Heading, Box } from '@myonlinestore/bricks';

const HeadingLink: FC<{}> = props => (
    <Box padding={[24, 24, 24, 0]}>
        <Heading hierarchy={4} as="h4">
            {props.children}
        </Heading>
    </Box>
);

export default HeadingLink;
