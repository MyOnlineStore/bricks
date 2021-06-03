import React, { ComponentProps, useState } from 'react';
import ColorField from '.';

export default {
    title: 'ColorField',
    component: ColorField,
    args: {
        resetButtonTitle: 'Undo',
    },
};

const validHexcode = (hexcode: string) => {
    return !(hexcode.length !== 4 && hexcode.length !== 7);
};

export const Default = (args: ComponentProps<typeof ColorField>) => {
    const [value, setValue] = useState('#6bde78');

    return (
        <ColorField
            {...args}
            value={value}
            initialValue="#6bde78"
            feedback={
                !validHexcode(value)
                    ? {
                          severity: 'error',
                          message: 'That is not a valid hex code!',
                      }
                    : undefined
            }
            onChange={(val: string) => {
                setValue(val);
            }}
        />
    );
};
