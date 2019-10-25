import React, { FC } from 'react';
import { Box } from '@myonlinestore/bricks';
import Document from '@myonlinestore/bricks/components/Breadcrumbs/readme.mdx';
import componentMap from '../../lib/componentMap';

type PropsType = {};

const Components: FC<PropsType> = props => {
    return (
        <Box>
            <Document components={componentMap} />
        </Box>
    );
};

export default Components;
