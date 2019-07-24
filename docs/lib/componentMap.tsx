import React, { FC } from 'react';
import { Heading, Text } from '@myonlinestore/bricks';

const componentMap: { [key: string]: FC } = {
    h1: props => <Heading hierarchy={1}>{props.children}</Heading>,
    h2: props => <Heading hierarchy={2}>{props.children}</Heading>,
    h3: props => <Heading hierarchy={3}>{props.children}</Heading>,
    h4: props => <Heading hierarchy={4}>{props.children}</Heading>,
    h5: props => <Heading hierarchy={5}>{props.children}</Heading>,
    h6: props => <Heading hierarchy={6}>{props.children}</Heading>,
    p: props => <Text>{props.children}</Text>,
};

export default componentMap;
