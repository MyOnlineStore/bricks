import React, { FC } from 'react';
import { Box, Link } from '@myonlinestore/bricks';
import Document from '../design-docs/design/logo.mdx';
import componentMap from '../lib/componentMap';
import SidebarLink from '../components/SidebarLink';
import ContentPane from '../components/ContentPane';
import Sidebar from '../components/Sidebar';
import DesignNav from '../components/DesignNav';

type PropsType = {};

const Components: FC<PropsType> = props => {
    return (
        <Box>
            <DesignNav />
            <ContentPane>
                <Document components={componentMap} />
            </ContentPane>
        </Box>
    );
};

export default Components;
