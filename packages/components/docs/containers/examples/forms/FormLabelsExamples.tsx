import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { FormRow, Text, Box } from '@myonlinestore/bricks';
import StatefulTextField from './StatefulTextField';

const options = [
    {
        value: 'label-horizontal',
        label: 'Form label - Horizontal',
    },
    {
        value: 'label-vertical',
        label: 'Form label - Vertical',
    },
];

const examples = [
    {
        value: 'label-horizontal',
        component: <FormRow label={<Text strong>What is your name?</Text>} field={<StatefulTextField />} />,
    },
    {
        value: 'label-vertical',
        component: (
            <Box direction="column">
                <FormRow label={<Text strong>What is your name?</Text>} field={<StatefulTextField />} />
            </Box>
        ),
    },
];

const FormLabelsExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default FormLabelsExamples;
