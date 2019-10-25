import React, { FC } from 'react';
import { Heading, Text, Box, Link } from '@myonlinestore/bricks';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: red;
`;

type PropsType = {
    depth?: number;
    href: string;
    title: string;
};

const SidebarLink: FC<PropsType> = props => (
    <Box padding={[12, 0]}>
        <Heading as="h3" hierarchy={3}>
            <Text
                severity={props.depth === 2 ? 'info' : undefined}
                as="span"
                style={{ fontSize: 'inherit', fontFamily: 'inherit' }}
            >
                <StyledLink href={props.href} title={props.title} />
            </Text>
        </Heading>
    </Box>
);

export default SidebarLink;
