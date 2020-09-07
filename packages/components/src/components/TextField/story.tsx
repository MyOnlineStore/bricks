import React, { ComponentProps, useState, useEffect } from 'react';
import TextField from '.';

export default {
    title: 'TextField',
    component: TextField,
    parameters: {
        actions: {
            argTypesRegex: '^on.*',
        },
    },
};

export const Default = (args: ComponentProps<typeof TextField>) => {
    const [value, setValue] = useState(args.value || '');

    useEffect(() => {
        setValue(args.value);
    }, [args.value]);

    return (
        <TextField
            {...args}
            value={value}
            onChange={(value, event) => {
                args.onChange(value, event);
                setValue(value);
            }}
            onClear={() => {
                args.onClear?.();
                setValue('');
            }}
            feedback={value === '' ? { message: 'This field cannot be empty', severity: 'error' } : undefined}
        />
    );
};
