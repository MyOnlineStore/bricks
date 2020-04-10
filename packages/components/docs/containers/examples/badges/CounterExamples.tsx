import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Counter } from '@myonlinestore/bricks';

const options = [
    {
        value: 'notification',
        label: 'Counter - Notification counter',
    },
];

const examples = [
    {
        value: 'notification',
        component: <Counter severity="error">1</Counter>,
    },
];

const NumberBadgesExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default NumberBadgesExamples;
