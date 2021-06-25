import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { IconButton } from '@myonlinestore/bricks';

const options = [
    {
        value: 'primary',
        label: 'Icon Button - Primary',
    },
    {
        value: 'destructive',
        label: 'Icon Button - Destructive',
    },
];

const examples = [
    { value: 'primary', component: <IconButton title="Primary" variant="primary" icon="bell" /> },
    { value: 'destructive', component: <IconButton title="Destructive" variant="destructive" icon="bell" /> },
];

const IconButtonExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default IconButtonExamples;
