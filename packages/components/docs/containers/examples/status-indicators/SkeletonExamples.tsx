import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Skeleton, Box } from '@myonlinestore/bricks';

const options = [
    {
        value: 'skeleton-text',
        label: 'Skeleton - Text',
    },
    {
        value: 'skeleton-image',
        label: 'Skeleton - Image',
    },
];

const examples = [
    {
        value: 'skeleton-text',
        component: (
            <Box direction="column" width="100%">
                <Skeleton.Text lines={5} />
            </Box>
        ),
    },
    {
        value: 'skeleton-image',
        component: <Skeleton.Rect width="150px" height="150px" />,
    },
];

const SkeletonExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default SkeletonExamples;
