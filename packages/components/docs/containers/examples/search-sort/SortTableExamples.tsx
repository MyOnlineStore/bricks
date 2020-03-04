import React, { FC } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Table } from '@myonlinestore/bricks';

type RowType = {
    id: string;
    price: number;
    name: string;
};

const sortText = (a: string, b: string) => {
    // tslint:disable-next-line:strict-type-predicates
    if (typeof a !== 'string' || typeof b !== 'string') {
        return 0;
    }

    const valueA = a.toUpperCase();
    const valueB = b.toUpperCase();

    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;

    return 0;
};

const sortPrice = (a: number, b: number) => a - b;

const SortTable = () => {
    const rows = [
        {
            id: '61651323',
            price: 0.82,
            name: 'Strawberry',
        },
        {
            id: '61651320',
            price: 3.54,
            name: 'Pineapple',
        },
        {
            id: '61651322',
            price: 2.45,
            name: 'Coffee',
        },
        {
            id: '61651321',
            price: 1.27,
            name: 'Flower',
        },
        {
            id: '61651324',
            price: 0.71,
            name: 'Grapes',
        },
    ];

    return (
        <Table<RowType>
            columns={{
                name: {
                    header: 'Product',
                    order: 1,
                    sort: sortText,
                },
                price: {
                    header: 'Price',
                    width: '90px',
                    align: 'end',
                    order: 2,
                    sort: sortPrice,
                },
            }}
            rows={rows}
            as="table"
        />
    );
};

const options = [
    {
        value: 'sort-table',
        label: 'Text - Title',
    },
];

const examples = [
    {
        value: 'sort-table',
        component: <SortTable />,
    },
];

const SortTableExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default SortTableExamples;
