import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Breadcrumbs } from '@myonlinestore/bricks';

const BreadcrumbsDefault: FC = () => {
    const crumbs = [
        { url: '', name: 'dashboard' },
        { url: '', name: 'level 1' },
        { url: '', name: 'level 2' },
        { name: 'current page' },
    ];

    return <Breadcrumbs breadcrumbs={crumbs} />;
};

const options = [
    {
        value: 'breadcrumbs-default',
        label: 'Breadcrumbs',
    },
];

const examples = [
    {
        value: 'breadcrumbs-default',
        component: <BreadcrumbsDefault />,
    },
];

const BreadcrumbsExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default BreadcrumbsExamples;
