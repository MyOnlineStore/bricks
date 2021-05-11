import React, { FC, useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import NativeSelect from '.';
import { boolean, select } from '@storybook/addon-knobs';

const options = [
    {
        value: 'A',
        label: 'Option A',
    },
    {
        value: 'B',
        label: 'Option B',
    },
    {
        value: 'C',
        label: 'Option C',
    },
    {
        value: 'D',
        label: 'Option D',
    },
    {
        value: 'E',
        label: 'Option E',
    },
    {
        value: 'F',
        label: 'Option F',
    },
];

const optionsTwo = [
    {
        value: 'One',
        label: 'Option 1',
    },
    {
        value: 'Two',
        label: 'Option 2',
    },
    {
        value: 'Three',
        label: 'Option 3',
    },
];

type PropsType = {};

const Demo: FC<PropsType> = (): JSX.Element => {
    const optionsSet = select('options', ['options', 'optionsTwo'], 'options');
    const [value, setValue] = useState('E');

    useEffect(() => {
        console.debug('value', value);
    }, [value]);

    return (
        <NativeSelect
            options={optionsSet === 'options' ? options : optionsTwo}
            value={value}
            disabled={boolean('disabled', false)}
            onChange={setValue}
        />
    );
};

storiesOf('NativeSelect', module).add('Default', () => {
    return <Demo />;
});
