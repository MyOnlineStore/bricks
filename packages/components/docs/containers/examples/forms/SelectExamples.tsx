import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Select, NativeSelect } from '@myonlinestore/bricks';

type DemoOptionType = {
    image: string;
    value: string;
    label: string;
    description: string;
};

const demoOptions: Array<DemoOptionType> = [
    {
        image: 'https://picsum.photos/100/100?image=988',
        value: 'A',
        label: 'Bar A',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=960',
        value: 'B',
        label: 'Foo B',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=958',
        value: 'C',
        label: 'Bar C',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=940',
        value: 'D',
        label: 'Foo D',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=924',
        value: 'E',
        label: 'Bar E',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=915',
        value: 'F',
        label: 'Bar F',
        description: 'Lorem ipsum dolor sit amet.',
    },
];

const SingleSelect = () => {
    const [fieldValue, setFieldValue] = useState('');

    return <NativeSelect value={fieldValue} onChange={setFieldValue} options={demoOptions} />;
};

const SearchSelect = () => {
    const [fieldValue, setFieldValue] = useState('');

    return (
        <Select
            placeholder={'Search a value'}
            value={fieldValue}
            emptyText={'No results'}
            onChange={setFieldValue}
            options={demoOptions}
        />
    );
};

const options = [
    {
        value: 'select-single',
        label: 'Select - Native',
    },
    {
        value: 'select-search',
        label: 'Select - Search',
    },
];

const examples = [
    {
        value: 'select-single',
        component: <SingleSelect />,
    },
    {
        value: 'select-search',
        component: <SearchSelect />,
    },
];

const SelectExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default SelectExamples;
