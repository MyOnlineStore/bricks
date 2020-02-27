import React, { FC, useState } from 'react';
import PreviewPane from '../../components/PreviewPane';
import { FormRow, Text, TextField, Box } from '@myonlinestore/bricks';

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
        component: (
            <FormRow
                label={<Text strong>Label</Text>}
                field={
                    <TextField
                        name="formfield"
                        placeholder="Field"
                        value={''}
                        onChange={() => {
                            /* noop */
                        }}
                    />
                }
            />
        ),
    },
    {
        value: 'label-vertical',
        component: (
            <Box direction="column">
                <FormRow
                    label={<Text strong>Label</Text>}
                    field={
                        <TextField
                            name="formfield"
                            placeholder="Field"
                            value={''}
                            onChange={() => {
                                /* noop */
                            }}
                        />
                    }
                />
            </Box>
        ),
    },
];

const FormLabelsExamplesContainer: FC<{}> = props => {
    return <PreviewPane options={options} examples={examples} />;
};

export default FormLabelsExamplesContainer;
