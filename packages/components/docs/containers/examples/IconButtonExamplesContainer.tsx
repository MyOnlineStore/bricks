import React, { FC } from 'react';
import PreviewPane from '../../components/PreviewPane';
import { IconButton } from '@myonlinestore/bricks';
import { BellIcon } from '@myonlinestore/bricks-assets';

const options = [
    {
        value: 'primary',
        label: 'Icon Button - Primary',
    },
    {
        value: 'destructive',
        label: 'Icon Button - Destructive',
    },
];

const examples = [
    { value: 'primary', component: <IconButton title="Primary" variant="primary" icon={<BellIcon />} /> },
    { value: 'destructive', component: <IconButton title="Destructive" variant="destructive" icon={<BellIcon />} /> },
];

const IconButtonExamplesContainer: FC<{}> = props => {
    return <PreviewPane options={options} examples={examples} />;
};

export default IconButtonExamplesContainer;
