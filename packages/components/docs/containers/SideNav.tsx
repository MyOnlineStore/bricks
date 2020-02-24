import React, { FC } from 'react';
import Sidebar from '../components/Sidebar';
import SidebarLink from '../components/SidebarLink';
import { Box } from '@myonlinestore/bricks';
import { ChevronLeftIcon } from '@myonlinestore/bricks-assets';

//tslint:disable-next-line
const articleData: ArticleDataType = require('../lib/get-article-data');

type PropsType = {
    dirName: string;
};

type ArticleDataType = {
    srcDirs: Array<string>;
    articles: Array<{
        dir: string;
        files: Array<string>;
    }>;
};

const SideNav: FC<PropsType> = props => {
    const dirData = articleData.articles.filter(article => article.dir === props.dirName);

    return (
        <Sidebar>
            <Box padding={[0, 0, 36, 0]}>
                <SidebarLink icon={<ChevronLeftIcon />} href="/" title=" Back" />
            </Box>
            {dirData[0].files.map((file, index) => {
                const fileNameSlug = file.replace(/\.mdx?$/, '');
                const fileNameDisplay = (fileNameSlug.charAt(0).toUpperCase() + fileNameSlug.slice(1)).replace(
                    '-',
                    ' ',
                );
                const href = `/generated/${props.dirName}/${fileNameSlug}`;

                if (fileNameSlug !== 'index')
                    return <SidebarLink key={index} href={href} title={`${fileNameDisplay}`} />;
            })}
        </Sidebar>
    );
};

export default SideNav;
