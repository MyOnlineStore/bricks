import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Toggle } from '@myonlinestore/bricks';

const ToggleDefault: FC = () => {
    const [checked, setChecked] = useState(true);

    return (
        <Toggle
            name="default"
            value="default"
            checked={checked}
            label="Turn on the lights"
            onChange={change => setChecked(change.checked)}
        />
    );
};

const options = [
    {
        value: 'toggle-default',
        label: 'Toggle - Default',
    },
];

const examples = [
    {
        value: 'toggle-default',
        component: <ToggleDefault />,
    },
];

const ToggleExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default ToggleExamples;
