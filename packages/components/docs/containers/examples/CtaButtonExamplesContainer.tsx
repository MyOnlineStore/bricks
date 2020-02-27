import React, { FC } from 'react';
import PreviewPane from '../../components/PreviewPane';
import { Button, MosCorporateTheme } from '@myonlinestore/bricks';

const options = [
    {
        value: 'upgrade',
        label: 'CTA Button - Upgrade',
    },
    {
        value: 'start',
        label: 'CTA Button - Start',
    },
];

const examples = [
    {
        value: 'upgrade',
        component: (
            <MosCorporateTheme>
                <Button title="Upgrade" variant="primary" />
            </MosCorporateTheme>
        ),
    },
    {
        value: 'start',
        component: (
            <MosCorporateTheme>
                <Button title="Start" variant="warning" />
            </MosCorporateTheme>
        ),
    },
];

const CtaButtonExamplesContainer: FC<{}> = props => {
    return <PreviewPane options={options} examples={examples} />;
};

export default CtaButtonExamplesContainer;
