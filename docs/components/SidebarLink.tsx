import React, { FC } from 'react';
import { Heading, Text, Box, Link } from '@myonlinestore/bricks';
import StyledLink from './StyledLink';
import styled from 'styled-components';

type PropsType = {
    depth?: number;
    href: string;
    title: string;
};

const StyledText = styled(Text)`
    font-size: inherit;
    font-family: inherit;
`;

const SidebarLink: FC<PropsType> = props => (
    <Box padding={[12, 0]}>
        <Heading as="h3" hierarchy={3}>
            <StyledText severity={props.depth === 2 ? 'info' : undefined} as="span">
                <StyledLink href={props.href} title={props.title} />
            </StyledText>
        </Heading>
    </Box>
);

export default SidebarLink;
