import React, { FC } from 'react';
import { Box } from '@myonlinestore/bricks';
import Document from '../design-docs/components/badges.mdx';
import componentMap from '../lib/componentMap';
import ContentPane from '../components/ContentPane';
import ComponentsNav from '../components/ComponentsNav';

type PropsType = {};

const Components: FC<PropsType> = props => {
    return (
        <Box>
            <ComponentsNav />
            <ContentPane>
                <Document components={componentMap} />
            </ContentPane>
        </Box>
    );
};

export default Components;
