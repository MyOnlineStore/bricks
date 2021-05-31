import React, { ComponentProps } from 'react';
import ColorField from '.';

export default {
    title: 'ColorField',
    component: ColorField,
    argTypes: {
        value: {
            defaultValue: '6bde78',
        },
    },
};

export const Default = (args: ComponentProps<typeof ColorField>) => {
    return <ColorField {...args} />;
};
