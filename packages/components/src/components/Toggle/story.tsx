import React, { ComponentProps } from 'react';
import Toggle from '.';

export default {
    title: 'Toggle',
    component: Toggle,
    argTypes: {
        onChange: {
            action: 'onChange triggered',
        },
    },
};

export const Demo = (props: ComponentProps<typeof Toggle>) => {
    return <Toggle {...props} />;
};
