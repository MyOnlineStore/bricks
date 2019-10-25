import React, { FC } from 'react';
import Sidebar from './Sidebar';
import SidebarLink from './SidebarLink';

const ComponentsNav: FC = props => (
    <Sidebar>
        <SidebarLink href="/badges" title="Badges" />
        <SidebarLink href="/buttons" title="Buttons" />
        <SidebarLink href="/forms" title="Forms" />
    </Sidebar>
);

export default ComponentsNav;
