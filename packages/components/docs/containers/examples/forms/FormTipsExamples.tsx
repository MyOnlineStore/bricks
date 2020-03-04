import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { FormRow, Text, Box, InlineNotification } from '@myonlinestore/bricks';
import StatefulTextField from './StatefulTextField';

const options = [
    {
        value: 'tips-info',
        label: 'Form Tips - Info',
    },
];

const examples = [
    {
        value: 'tips-info',
        component: (
            <Box width="100%">
                <FormRow
                    label={
                        <label>
                            <Box>
                                <Text strong>What is your name?</Text>
                            </Box>
                            <Text variant="descriptive">The name you were born with.</Text>
                        </label>
                    }
                    field={
                        <Box width="100%" direction="column">
                            <StatefulTextField />
                            <Box margin={[12, 0]}>
                                <InlineNotification severity="info" message="Write your name in the field." />
                            </Box>
                        </Box>
                    }
                />
            </Box>
        ),
    },
];

const FormTipsExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default FormTipsExamples;
