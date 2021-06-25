import React, { ComponentProps } from 'react';
import Toolbar from '.';
import IconButton from '../IconButton';
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
                    icon="gear"
                    title="A"
                    onClick={() => {
                        return;
                    }}
                />
                <IconButton
                    icon="pencil"
                    title="B"
                    onClick={() => {
                        return;
                    }}
                />
                <IconButton
                    icon="trash"
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
