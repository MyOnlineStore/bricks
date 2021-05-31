import React, { ComponentProps } from 'react';
import ColorDrop from './index';

export default {
    title: 'ColorDrop',
    component: ColorDrop,
};

export const Default = (props: ComponentProps<typeof ColorDrop>) => {
    return <ColorDrop {...props} color="#EEBE2E" />;
};

export const Transparent = (props: ComponentProps<typeof ColorDrop>) => {
    return <ColorDrop {...props} color="transparent" />;
};
