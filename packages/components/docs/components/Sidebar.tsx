import React, { FC } from 'react';
import { Box } from '@myonlinestore/bricks';

const Sidebar: FC = props => (
    <Box padding={[24]} direction="column" width="240px">
        {props.children}
    </Box>
);

export default Sidebar;
