import React, { FC } from 'react';
import PreviewPane from '../../components/PreviewPane';
import { Button } from '@myonlinestore/bricks';
import { CartIcon, CloseIcon } from '@myonlinestore/bricks-assets';

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
    {
        value: 'icon-primary',
        label: 'Button with icon - Primary',
    },
    {
        value: 'icon-secondary',
        label: 'Button with icon - Secondary',
    },
    {
        value: 'icon-destructive',
        label: 'Button with icon - Destructive',
    },
    {
        value: 'icon-warning',
        label: 'Button with icon - Warning',
    },
    {
        value: 'icon-plain',
        label: 'Button with icon - Cancel',
    },
];

const examples = [
    { value: 'primary', component: <Button title="Primary" variant="primary" /> },
    { value: 'secondary', component: <Button title="Secondary" variant="secondary" /> },
    { value: 'destructive', component: <Button title="Destructive" variant="destructive" /> },
    { value: 'warning', component: <Button title="Warning" variant="warning" /> },
    { value: 'plain', component: <Button title="Cancel" variant="plain" /> },
    { value: 'icon-primary', component: <Button title="Primary" variant="primary" icon={<CartIcon />} /> },
    { value: 'icon-secondary', component: <Button title="Secondary" variant="secondary" icon={<CartIcon />} /> },
    { value: 'icon-destructive', component: <Button title="Destructive" variant="destructive" icon={<CartIcon />} /> },
    { value: 'icon-warning', component: <Button title="Warning" variant="warning" icon={<CartIcon />} /> },
    { value: 'icon-plain', component: <Button title="Cancel" variant="plain" icon={<CloseIcon />} /> },
];

const ButtonExamplesContainer: FC<{}> = props => {
    return <PreviewPane options={options} examples={examples} />;
};

export default ButtonExamplesContainer;
