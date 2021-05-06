import React, { ComponentProps } from 'react';
import Toolbar from '.';
import IconButton from '../IconButton';
import { GearIcon, PencilIcon, TrashIcon } from '@myonlinestore/bricks-assets';
import Box from '../Box';

export default {
    title: 'Toolbar',
    component: Toolbar,
};

export const Default = (props: ComponentProps<typeof Toolbar>) => {
    return (
        <Box>
            <Toolbar {...props}>
                <IconButton
                    icon={<GearIcon />}
                    title="A"
                    onClick={() => {
                        return;
                    }}
                />
                <IconButton
                    icon={<PencilIcon />}
                    title="B"
                    onClick={() => {
                        return;
                    }}
                />
                <IconButton
                    icon={<TrashIcon />}
                    title="C"
                    variant="destructive"
                    onClick={() => {
                        return;
                    }}
                />
            </Toolbar>
        </Box>
    );
};
