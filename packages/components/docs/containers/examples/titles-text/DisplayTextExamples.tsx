import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Text } from '@myonlinestore/bricks';

const options = [
    {
        value: 'text-display',
        label: 'Text - Display',
    },
];

const examples = [
    {
        value: 'text-display',
        component: <Text size="display">My Online Store!</Text>,
    },
];

const DisplayTextExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default DisplayTextExamples;
