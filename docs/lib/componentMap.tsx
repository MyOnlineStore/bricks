import React, { FC } from 'react';
import { Heading, Text, Box, colors } from '@myonlinestore/bricks';
import styled from 'styled-components';

const StyledHr = styled.hr`
    width: 100%;
    color: transparent;
    border-top: 1px solid ${colors.grey300};
`;

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
            <StyledHr />
        </Box>
    ),
    p: props => <Text variant="descriptive">{props.children}</Text>,
    li: props => (
        <Text as="span" variant="descriptive">
            <li>{props.children}</li>
        </Text>
    ),
};

export default componentMap;
