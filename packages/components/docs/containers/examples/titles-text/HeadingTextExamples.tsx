import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Heading } from '@myonlinestore/bricks';

const options = [
    {
        value: 'text-heading',
        label: 'Text - Heading',
    },
];

const examples = [
    {
        value: 'text-heading',
        component: (
            <Heading hierarchy={2} as="h2">
                My Online Store!
            </Heading>
        ),
    },
];

const HeadingTextExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default HeadingTextExamples;
