import React, { FC } from 'react';
import PreviewPane from '../../components/PreviewPane';
import { Text } from '@myonlinestore/bricks';

const options = [
    {
        value: 'subscription-new',
        label: 'Badge - Subscription New',
    },
    {
        value: 'subscription-beta',
        label: 'Badge - Subscription Beta',
    },
    {
        value: 'subscription-pro',
        label: 'Badge - Subscription Pro',
    },
    {
        value: 'subscription-premium',
        label: 'Badge - Subscription Premium',
    },
];

const examples = [
    {
        value: 'subscription-new',
        component: <Text variant="warning">NEW!</Text>,
    },
    {
        value: 'subscription-beta',
        component: <Text variant="info">BETA</Text>,
    },
    {
        value: 'subscription-pro',
        component: <Text variant="success">PRO</Text>,
    },
    {
        value: 'subscription-premium',
        component: <Text variant="info">PREMIUM</Text>,
    },
];

const SubscriptionBadgesExamplesContainer: FC<{}> = props => {
    return <PreviewPane options={options} examples={examples} />;
};

export default SubscriptionBadgesExamplesContainer;
