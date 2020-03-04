import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Box, Spinner, Button, colors } from '@myonlinestore/bricks';

const options = [
    {
        value: 'spinner-default',
        label: 'Spinner - Default',
    },
    {
        value: 'spinner-button',
        label: 'Spinner - Button',
    },
];

const examples = [
    {
        value: 'spinner-default',
        component: (
            <Box width="36px">
                <Spinner color={colors.green600} />
            </Box>
        ),
    },
    {
        value: 'spinner-button',
        component: <Button title="loading" variant="primary" loading />,
    },
];

const SpinnerExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default SpinnerExamples;
