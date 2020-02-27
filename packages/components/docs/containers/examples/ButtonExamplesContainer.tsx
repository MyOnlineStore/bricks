import React, { FC } from 'react';
import PreviewPane from '../../components/PreviewPane';
import { Button } from '@myonlinestore/bricks';

const options = [
    {
        value: 'primary',
        label: 'Button - Primary',
    },
    {
        value: 'secondary',
        label: 'Button - Secondary',
    },
    {
        value: 'destructive',
        label: 'Button - Destructive',
    },
    {
        value: 'warning',
        label: 'Button - Warning',
    },
    {
        value: 'plain',
        label: 'Button - Cancel',
    },
];

const examples = [
    { value: 'primary', component: <Button title="Primary" variant="primary" /> },
    { value: 'secondary', component: <Button title="Secondary" variant="secondary" /> },
    { value: 'destructive', component: <Button title="Destructive" variant="destructive" /> },
    { value: 'warning', component: <Button title="Warning" variant="warning" /> },
    { value: 'plain', component: <Button title="Cancel" variant="plain" /> },
];

const ButtonExamplesContainer: FC<{}> = props => {
    return <PreviewPane options={options} examples={examples} />;
};

export default ButtonExamplesContainer;
