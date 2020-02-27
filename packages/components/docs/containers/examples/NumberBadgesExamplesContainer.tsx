import React, { FC } from 'react';
import PreviewPane from '../../components/PreviewPane';
import { Badge } from '@myonlinestore/bricks';

const options = [
    {
        value: 'notification',
        label: 'Badge - Notification badge',
    },
];

const examples = [
    {
        value: 'notification',
        component: <Badge severity="error">1</Badge>,
    },
];

const NumberBadgesExamplesContainer: FC<{}> = props => {
    return <PreviewPane options={options} examples={examples} />;
};

export default NumberBadgesExamplesContainer;
