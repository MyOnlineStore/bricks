import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { FormRow, Text, Box } from '@myonlinestore/bricks';
import StatefulTextField from './StatefulTextField';

const options = [
    {
        value: 'descriptions-horizontal',
        label: 'Descriptions - Horizontal',
    },
    {
        value: 'descriptions-vertical',
        label: 'Descriptions - Vertical',
    },
];

const examples = [
    {
        value: 'descriptions-horizontal',
        component: (
            <FormRow
                label={
                    <label>
                        <Box>
                            <Text strong>What is your name?</Text>
                        </Box>
                        <Text variant="descriptive">The name you were born with.</Text>
                    </label>
                }
                field={<StatefulTextField />}
            />
        ),
    },
    {
        value: 'descriptions-vertical',
        component: (
            <Box direction="column" width="50%">
                <FormRow
                    label={
                        <label>
                            <Box>
                                <Text strong>What is your name?</Text>
                            </Box>
                            <Text variant="descriptive">The name you were born with.</Text>
                        </label>
                    }
                    field={<StatefulTextField />}
                />
            </Box>
        ),
    },
];

const FormDescriptionsExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default FormDescriptionsExamples;
