import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { PromotionBadge } from '@myonlinestore/bricks';

const options = [
    {
        value: 'subscription-new',
        label: 'Badge - Subscription New',
    },
    {
        value: 'subscription-grow',
        label: 'Badge - Subscription Grow',
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
        component: <PromotionBadge variant="new">NEW!</PromotionBadge>,
    },
    {
        value: 'subscription-grow',
        component: <PromotionBadge variant="grow">GROW</PromotionBadge>,
    },
    {
        value: 'subscription-pro',
        component: <PromotionBadge variant="pro">PRO</PromotionBadge>,
    },
    {
        value: 'subscription-premium',
        component: <PromotionBadge variant="premium">PREMIUM</PromotionBadge>,
    },
];

const SubscriptionBadgesExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default SubscriptionBadgesExamples;
