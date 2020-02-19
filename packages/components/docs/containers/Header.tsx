import React, { FC } from 'react';
import { Box, Link } from '@myonlinestore/bricks';
import HeadingLink from '../components/HeadingLink';
import moslogo from '../assets/moslogo.svg';
import styled from 'styled-components';

type ArticleDataType = {
    srcDirs: Array<string>;
    articles: {
        dir: string;
        files: Array<string>;
    };
};

//tslint:disable-next-line
const articleData: ArticleDataType = require('../lib/get-article-data');

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 148px;
    padding: 48px 0 66px 0;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    img {
        max-height: 150px;
        cursor: pointer;
    }
`;

const HeadingLinkContainer = styled(Box)`
    margin-left: 126px;
`;

const Header: FC = props => {
    return (
        <StyledHeader>
            <Box alignItems="center">
                <Box width="180px" alignItems="center" justifyContent="flex-start">
                    <Link href="/" title="Home">
                        <img width="180px" src={moslogo} />
                    </Link>
                </Box>

                <HeadingLinkContainer>
                    {articleData.srcDirs.map((category, index) => (
                        <HeadingLink
                            href={`/generated/${category}`}
                            title={`${category.charAt(0).toUpperCase() + category.slice(1)}`}
                            category={category}
                            key={index}
                        />
                    ))}
                </HeadingLinkContainer>
            </Box>
        </StyledHeader>
    );
};

export default Header;
