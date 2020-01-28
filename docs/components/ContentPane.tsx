import React, { FC } from 'react';
import { Box } from '@myonlinestore/bricks';

const ContentPane: FC = props => (
    <Box
        grow={1}
        padding={[48, 120 as 0]}
        maxWidth="960px"
        minWidth="960px"
        style={{
            background: '#fff',
            borderRadius: '9px 9px 0 0',
            boxShadow: '0 1px 4px 0 rgba(0,0,0,0.25)',
        }}
    >
        {props.children}
    </Box>
);

export default ContentPane;
