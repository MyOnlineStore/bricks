import React, { FC } from 'react';
import Sidebar from './Sidebar';
import SidebarLink from './SidebarLink';

const ComponentsNav: FC = props => (
    <Sidebar>
        <SidebarLink href="/design" title="Logo" />
    </Sidebar>
);

export default ComponentsNav;
