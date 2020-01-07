import React, { FC } from 'react';
import Sidebar from './Sidebar';
import SidebarLink from './SidebarLink';

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
            <SidebarLink href="/" title="< Back" />
            {dirData[0].files.map((file, index) => {
                const fileNameSlug = file.replace(/\.mdx?$/, '');
                const fileNameDisplay = (fileNameSlug.charAt(0).toUpperCase() + fileNameSlug.slice(1)).replace(
                    '-',
                    ' ',
                );

                if (fileNameSlug !== 'index')
                    return (
                        <SidebarLink
                            key={index}
                            href={`/generated/${props.dirName}/${fileNameSlug}`}
                            title={`${fileNameDisplay}`}
                        />
                    );
            })}
        </Sidebar>
    );
};

export default SideNav;
