import React, { FC, useState } from 'react';
import { storiesOf } from '@storybook/react';
import NativeSelect, { SimpleSelectOptionType } from '.';
import { boolean } from '@storybook/addon-knobs';

const options: Array<SimpleSelectOptionType> = [
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

type PropsType = {};

const Demo: FC<PropsType> = (): JSX.Element => {
    const [value, setValue] = useState<SimpleSelectOptionType['value']>('E');

    return <NativeSelect options={options} value={value} disabled={boolean('disabled', false)} onChange={setValue} />;
};

storiesOf('NativeSelect', module).add('Default', () => {
    return <Demo />;
});
