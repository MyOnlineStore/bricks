import React, { FC } from 'react';
import { Heading, Text, Box } from '@myonlinestore/bricks';

const componentMap: { [key: string]: FC } = {
    h1: props => (
        <Box margin={[36, 0]}>
            <Heading hierarchy={1}>{props.children}</Heading>
        </Box>
    ),
    h2: props => (
        <Box margin={[24, 0]}>
            <Heading hierarchy={2}>{props.children}</Heading>
        </Box>
    ),
    h3: props => (
        <Box margin={[18, 0, 12, 0]}>
            <Heading hierarchy={3}>{props.children}</Heading>
        </Box>
    ),
    h4: props => (
        <Box margin={[18, 0, 6, 0]}>
            <Heading hierarchy={4}>{props.children}</Heading>
        </Box>
    ),
    h5: props => (
        <Box margin={[12, 0, 6, 0]}>
            <Heading hierarchy={5}>{props.children}</Heading>
        </Box>
    ),
    h6: props => (
        <Box margin={[0, 0, 0, 0]}>
            <Heading hierarchy={6}>{props.children}</Heading>
        </Box>
    ),
    hr: props => (
        <Box margin={[24, 0]} width="100%">
            <hr style={{ width: '100%', color: 'transparent', borderTop: '1px solid #D2D7E0' }} />
        </Box>
    ),
    p: props => <Text severity="info">{props.children}</Text>,
    li: props => (
        <Text as="span" severity="info">
            <li>{props.children}</li>
        </Text>
    ),
};

export default componentMap;
