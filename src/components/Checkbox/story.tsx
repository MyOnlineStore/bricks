import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { FC, useState } from 'react';
import Checkbox, { PropsType } from '.';

const Demo: FC<{}> = () => {
    const [checked, setChecked] = useState<PropsType['checked']>(false);

    return (
        <Checkbox
            onChange={({ checked }): void => setChecked(checked as boolean)}
            value="bar"
            checked={checked}
            disabled={boolean('disabled', false)}
            error={boolean('error', false)}
            name="foo"
            label={text('label', undefined)}
        />
    );
};

storiesOf('Checkbox', module).add('Default', () => <Demo />);
