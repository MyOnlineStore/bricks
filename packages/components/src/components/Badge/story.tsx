import React, { ComponentProps } from 'react';
import Badge from '.';

export default {
    title: 'Badge',
    component: Badge,
    args: {
        children: 'Badger',
    },
};

export const Default = (props: ComponentProps<typeof Badge>) => {
    return <Badge {...props}>{props.children}</Badge>;
};
