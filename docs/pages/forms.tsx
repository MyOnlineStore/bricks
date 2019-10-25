import React, { FC } from 'react';
import { Box, Link } from '@myonlinestore/bricks';
import Document from '../design-docs/components/forms.mdx';
import componentMap from '../lib/componentMap';
import SidebarLink from '../components/SidebarLink';
import ContentPane from '../components/ContentPane';
import Sidebar from '../components/Sidebar';
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
