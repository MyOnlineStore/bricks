import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Separated, RadioButton } from '@myonlinestore/bricks';

const RadioButtonDefault: FC = () => {
    const [value, setValue] = useState('first');

    return (
        <Separated>
            <RadioButton
                name="first"
                label="Turn on the lights"
                checked={value === 'first'}
                value="first"
                onChange={change => (change.checked ? setValue(change.value) : undefined)}
            />
            <RadioButton
                name="second"
                label="Turn on the TV"
                checked={value === 'second'}
                value="second"
                onChange={change => (change.checked ? setValue(change.value) : undefined)}
            />
            <RadioButton
                name="first"
                label="Turn on the Radio"
                checked={value === 'third'}
                value="third"
                onChange={change => (change.checked ? setValue(change.value) : undefined)}
            />
        </Separated>
    );
};

const options = [
    {
        value: 'radiobutton-default',
        label: 'RadioButton - Default',
    },
];

const examples = [
    {
        value: 'radiobutton-default',
        component: <RadioButtonDefault />,
    },
];

const RadiobuttonExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default RadiobuttonExamples;
