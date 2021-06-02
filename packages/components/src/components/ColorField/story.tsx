import React, { ComponentProps, useState } from 'react';
import ColorField from '.';

export default {
    title: 'ColorField',
    component: ColorField,
    args: {
        resetButtonTitle: 'Undo',
    },
};

export const Default = (args: ComponentProps<typeof ColorField>) => {
    const [value, setValue] = useState('#6bde78');

    return (
        <ColorField
            {...args}
            value={value}
            initialValue="#6bde78"
            onChange={(val: string) => {
                setValue(val);
            }}
        />
    );
};
