import React, { FC, useEffect, useState } from 'react';
import { Heading, Box, Text } from '@myonlinestore/bricks';
import styled from 'styled-components';
import StyledLink from './StyledLink';

type PropsType = {
    depth?: number;
    href: string;
    title: string;
    category: string;
};

const StyledText = styled(Text)`
    font-size: inherit;
    font-family: inherit;
`;

const HeadingLink: FC<PropsType> = props => {
    const [isStrong, setIsStrong] = useState(false);

    useEffect(() => {
        if (window.location.pathname.includes(props.category)) {
            setIsStrong(true);
        }
    });

    return (
        <Box padding={[24, 24, 24, 0]}>
            <Heading hierarchy={4} as="h4">
                <StyledText strong={isStrong} as="span">
                    <StyledLink href={props.href} title={props.title} />
                </StyledText>
            </Heading>
        </Box>
    );
};

export default HeadingLink;
