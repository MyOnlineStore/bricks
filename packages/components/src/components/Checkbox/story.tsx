import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { FC, useState } from 'react';
import Checkbox from '.';

type PropsType = {};

const Demo: FC<PropsType> = () => {
    const [checked, setChecked] = useState(select('checked', [true, false, 'indeterminate'], false));

    return (
        <Checkbox
            onChange={({ checked }): void => setChecked(checked)}
            value="bar"
            checked={checked as boolean | 'indeterminate'}
            disabled={boolean('disabled', false)}
            error={boolean('error', false)}
            name="foo"
            label={text('label', 'Label')}
        />
    );
};

storiesOf('Checkbox', module).add('Default', () => <Demo />);
