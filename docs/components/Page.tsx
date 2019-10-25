import React, { FC } from 'react';
import SideNav from './SideNav';
import { Box, FoldOut, Link, Text } from '@myonlinestore/bricks';
import Header from './Header';

const Page: FC = props => {
    return (
        <main>
            <Box minHeight="100vh">
                <Box width="100%" alignContent="stretch">
                    <Header>
                        <Link href="/content" title="Content" />
                        <Link href="/design" title="Design" />
                        <Link href="/components" title="Components" />
                        <Link href="/guides" title="Guides" />
                    </Header>
                    <Box basis="300px">
                        <SideNav>
                            <Link href="/" title="Home" />
                            <br />
                            <Link href="/components/badge" title="Badge" />
                            <br />
                            <Link href="/components/breadcrumbs" title="Breadcrumbs" />
                        </SideNav>
                    </Box>
                    <Box grow={1} padding={[48, 120 as 0]}>
                        {props.children}
                    </Box>
                </Box>
            </Box>
        </main>
    );
};

export default Page;
