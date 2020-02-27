import React, { FC } from 'react';
import PreviewPane from '../../components/PreviewPane';
import { ButtonGroup, Button } from '@myonlinestore/bricks';

const options = [
    {
        value: 'primary-cancel',
        label: 'Button Group - Primary + Cancel',
    },
    {
        value: 'multiple-secondary',
        label: 'Button Group - Multiple Secondaries',
    },
];

const examples = [
    {
        value: 'primary-cancel',
        component: (
            <ButtonGroup>
                <Button variant="primary" title="Primary button">
                    Primary
                </Button>
                <Button variant="secondary" title="Secondary button">
                    Secondary
                </Button>
            </ButtonGroup>
        ),
    },
    {
        value: 'multiple-secondary',
        component: (
            <ButtonGroup>
                <Button variant="secondary" title="Secondary" />

                <Button variant="secondary" title="Secondary" />
            </ButtonGroup>
        ),
    },
];

const ButtonGroupExamplesContainer: FC<{}> = props => {
    return <PreviewPane options={options} examples={examples} />;
};

export default ButtonGroupExamplesContainer;
