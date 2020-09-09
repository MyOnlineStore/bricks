import NumberField from '.';
import React, { ComponentProps } from 'react';

export default {
    title: 'NumberField',
    component: NumberField,
    args: {
        value: 100,
    },
};

export const Default = (args: ComponentProps<typeof NumberField>) => <NumberField {...args} />;
