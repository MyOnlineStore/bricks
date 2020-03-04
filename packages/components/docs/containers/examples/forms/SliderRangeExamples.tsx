import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Range, Slider, Box } from '@myonlinestore/bricks';

const SliderDefault: FC = () => {
    const [value, setValue] = useState(10);

    return <Slider value={10} minLimit={5} maxLimit={25} onChange={setValue} inputFieldWidth={'100px'} />;
};

const RangeDefault: FC = () => {
    const [value, setValue] = useState({ min: 5, max: 12 });

    return <Range label="cm" value={value} minLimit={1.75} maxLimit={15.1} onChange={setValue} />;
};

const options = [
    {
        value: 'slider',
        label: 'Slider',
    },
    {
        value: 'range',
        label: 'Range',
    },
];

const examples = [
    {
        value: 'slider',
        component: <SliderDefault />,
    },
    {
        value: 'range',
        component: <RangeDefault />,
    },
];

const SliderRangeExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default SliderRangeExamples;
