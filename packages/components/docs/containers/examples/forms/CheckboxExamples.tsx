import React, { FC, useState } from 'react';
import PreviewPane from '../../../components/PreviewPane';
import { Separated, Checkbox } from '@myonlinestore/bricks';

const CheckboxDefault: FC = () => {
    const [checked, setChecked] = useState(true);

    return (
        <Checkbox
            name="default"
            label="Turn on the lights"
            checked={checked}
            value="default"
            onChange={value => setChecked(value.checked ? true : false)}
        />
    );
};

const CheckboxList: FC = () => {
    const [firstChecked, setFirstChecked] = useState(true);
    const [secondChecked, setSecondChecked] = useState(false);
    const [thirdChecked, setThirdChecked] = useState(false);

    return (
        <Separated>
            <Checkbox
                name="first"
                label="Turn on the lights"
                checked={firstChecked}
                value="default"
                onChange={value => setFirstChecked(value.checked ? true : false)}
            />
            <Checkbox
                name="second"
                label="Turn on the TV"
                checked={secondChecked}
                value="default"
                onChange={value => setSecondChecked(value.checked ? true : false)}
            />
            <Checkbox
                name="first"
                label="Turn on the Radio"
                checked={thirdChecked}
                value="default"
                onChange={value => setThirdChecked(value.checked ? true : false)}
            />
        </Separated>
    );
};

const CheckboxTerms: FC = () => {
    const [checked, setChecked] = useState(true);

    return (
        <Checkbox
            name="terms"
            label="I agree to the Terms & Conditions"
            checked={checked}
            value="default"
            onChange={value => setChecked(value.checked ? true : false)}
        />
    );
};

const options = [
    {
        value: 'checkbox-default',
        label: 'Checkbox - Default',
    },
    {
        value: 'checkbox-list',
        label: 'Checkbox - List',
    },
    {
        value: 'checkbox-tandc',
        label: 'Checkbox - Terms & Conditions',
    },
];

const examples = [
    {
        value: 'checkbox-default',
        component: <CheckboxDefault />,
    },
    {
        value: 'checkbox-list',
        component: <CheckboxList />,
    },
    {
        value: 'checkbox-tandc',
        component: <CheckboxTerms />,
    },
];

const CheckboxExamples: FC = () => {
    return <PreviewPane options={options} examples={examples} />;
};

export default CheckboxExamples;
