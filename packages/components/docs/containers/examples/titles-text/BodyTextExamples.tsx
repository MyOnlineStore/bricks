import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Text } from '@myonlinestore/bricks';

const demoContent = `
    Now this is the story all about how
    my life got flipped, turned upside down.
    And I'd like to take a minute just sit right there
    I'll tell you how I became the prince of a town called Bel-air
`;

const options = [
    {
        value: 'body - small',
        label: 'Body - Small',
    },
    {
        value: 'body - regular',
        label: 'Body - Regular',
    },
    {
        value: 'body - large',
        label: 'Body - Large',
    },
    {
        value: 'body - extralarge',
        label: 'Body - ExtraLarge',
    },
];

const examples = [
    {
        value: 'body - small',
        component: <Text size="small">{demoContent}</Text>,
    },
    {
        value: 'body - regular',
        component: <Text size="regular">{demoContent}</Text>,
    },
    {
        value: 'body - large',
        component: <Text size="large">{demoContent}</Text>,
    },
    {
        value: 'body - extralarge',
        component: <Text size="extraLarge">{demoContent}</Text>,
    },
];

const BodyTextExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} defaultOption="body - regular" />;
};

export default BodyTextExamples;
