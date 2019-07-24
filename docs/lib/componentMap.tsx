import React from 'react';
import { Heading, Text } from '@myonlinestore/bricks';

const componentMap = {
    h1: (props: any) => <Heading hierarchy={1}>{props.children}</Heading>,
    h2: (props: any) => <Heading hierarchy={2}>{props.children}</Heading>,
    h3: (props: any) => <Heading hierarchy={3}>{props.children}</Heading>,
    h4: (props: any) => <Heading hierarchy={4}>{props.children}</Heading>,
    h5: (props: any) => <Heading hierarchy={5}>{props.children}</Heading>,
    h6: (props: any) => <Heading hierarchy={6}>{props.children}</Heading>,
    p: (props: any) => <Text>{props.children}</Text>,
};

export default componentMap;
