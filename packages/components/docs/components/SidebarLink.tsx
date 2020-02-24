import React, { FC, useEffect, useState } from 'react';
import { Heading, Text, Box, Link, Icon } from '@myonlinestore/bricks';
import StyledLink from './StyledLink';
import styled from 'styled-components';

type PropsType = {
    depth?: number;
    icon?: string;
    href: string;
    title: string;
};

const StyledText = styled(Text)`
    font-size: inherit;
    font-family: inherit;
`;

const SidebarLink: FC<PropsType> = props => {
    const [isStrong, setIsStrong] = useState(false);

    useEffect(() => {
        if (window.location.pathname === props.href) {
            setIsStrong(true);
        }
    });

    return (
        <Box padding={[12, 0]}>
            <Heading as="h5" hierarchy={5}>
                <StyledText strong={isStrong} severity={props.depth === 2 ? 'info' : undefined} as="span">
                    <StyledLink href={props.href} title={props.title}>
                        {props.icon && <Icon size="small" icon={props.icon} />} {props.title}
                    </StyledLink>
                </StyledText>
            </Heading>
        </Box>
    );
};

export default SidebarLink;
