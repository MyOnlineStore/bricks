import React, { FC, useEffect, useState, ReactNode } from 'react';
import { Heading, Text, Box, Icon } from '@myonlinestore/bricks';
import StyledLink from './StyledLink';
import styled from 'styled-components';

type PropsType = {
    depth?: number;
    icon?: ReactNode;
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
                <StyledText strong={isStrong} variant={props.depth === 2 ? 'descriptive' : undefined} as="span">
                    <StyledLink href={props.href} title={props.title}>
                        {props.icon && <Icon size="small" icon={props.icon} />} {props.title}
                    </StyledLink>
                </StyledText>
            </Heading>
        </Box>
    );
};

export default SidebarLink;
