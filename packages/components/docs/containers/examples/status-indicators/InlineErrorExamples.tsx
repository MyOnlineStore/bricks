import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { FormRow, Text, TextField, Box, InlineNotification } from '@myonlinestore/bricks';

const options = [
    {
        value: 'inline-error',
        label: 'Inline Error Notification',
    },
];

const examples = [
    {
        value: 'inline-error',
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
                            <TextField
                                name="formfield"
                                value={''}
                                onChange={() => {
                                    /* noop */
                                }}
                                feedback={{ severity: 'error', message: 'A name is required' }}
                            />
                        </Box>
                    }
                />
            </Box>
        ),
    },
];

const InlineErrorExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default InlineErrorExamples;
