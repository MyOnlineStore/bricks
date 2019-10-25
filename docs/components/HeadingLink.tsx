import React, { FC } from 'react';
import { Heading, Box } from '@myonlinestore/bricks';

type PropsType = {
    active: boolean;
};

const HeadingLink: FC<PropsType> = props => (
    <Box padding={[24, 24, 24, 0]}>
        <Heading hierarchy={4} as="h4" style={{ textDecoration: props.active ? 'underline' : 'none' }}>
            {props.children}
        </Heading>
    </Box>
);

export default HeadingLink;
