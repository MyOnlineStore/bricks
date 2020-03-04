import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Heading } from '@myonlinestore/bricks';

const options = [
    {
        value: 'text-title',
        label: 'Text - Title',
    },
];

const examples = [
    {
        value: 'text-title',
        component: (
            <Heading hierarchy={1} as="h1">
                My Online Store!
            </Heading>
        ),
    },
];

const TitleTextExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default TitleTextExamples;
