import React, { ComponentProps, useState } from 'react';
import ColorField from '.';

export default {
    title: 'ColorField',
    component: ColorField,
};

export const Default = (args: ComponentProps<typeof ColorField>) => {
    const [value, setValue] = useState('#6bde78');

    return (
        <ColorField
            {...args}
            value={value}
            onChange={(val: string) => {
                setValue(val);
            }}
        />
    );
};
