import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { ButtonGroup, Button } from '@myonlinestore/bricks';

const options = [
    {
        value: 'primary-cancel',
        label: 'Button Group - Primary + Cancel',
    },
    {
        value: 'multiple-secondary',
        label: 'Button Group - Primary + Secondary + Cancel',
    },
];

const examples = [
    {
        value: 'primary-cancel',
        component: (
            <ButtonGroup direction="ltr">
                <Button variant="primary" title="Primary button">
                    Primary
                </Button>
                <Button variant="plain" title="Secondary button">
                    Cancel
                </Button>
            </ButtonGroup>
        ),
    },
    {
        value: 'multiple-secondary',
        component: (
            <ButtonGroup direction="ltr">
                <Button variant="primary" title="Primary" />

                <Button variant="secondary" title="Secondary" />

                <Button variant="plain" title="Cancel" />
            </ButtonGroup>
        ),
    },
];

const ButtonGroupExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default ButtonGroupExamples;
