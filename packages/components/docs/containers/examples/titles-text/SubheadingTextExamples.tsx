import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Heading } from '@myonlinestore/bricks';

const options = [
    {
        value: 'subheading - h3',
        label: 'Subheading - h3',
    },
    {
        value: 'subheading - h4',
        label: 'Subheading - h4',
    },
    {
        value: 'subheading - h5',
        label: 'Subheading - h5',
    },
];

const examples = [
    {
        value: 'subheading - h3',
        component: (
            <Heading hierarchy={3} as="h3">
                My Online Store!
            </Heading>
        ),
    },
    {
        value: 'subheading - h4',
        component: (
            <Heading hierarchy={4} as="h4">
                My Online Store!
            </Heading>
        ),
    },
    {
        value: 'subheading - h5',
        component: (
            <Heading hierarchy={5} as="h5">
                My Online Store!
            </Heading>
        ),
    },
];

const SubheadingTextExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default SubheadingTextExamples;
