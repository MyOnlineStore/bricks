import React, { FC } from 'react';
import { Box, Link, TextField, Icon, SearchIcon } from '@myonlinestore/bricks';
import HeadingLink from '../components/HeadingLink';
import moslogo from '../assets/moslogo.svg';
import styled from 'styled-components';
import StyledLink from '../components/StyledLink';

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
    height: 20vh;
    margin: auto;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    img {
        max-height: 150px;
        cursor: pointer;
        margin: 10px;
    }
`;

const HeadingLinkContainer = styled(Box)`
    margin-left: 120px;
`;

const Header: FC = props => {
    return (
        <StyledHeader>
            <Box alignItems="center">
                <Box width="240px" padding={[0, 12, 0, 12]} alignItems="center" justifyContent="center">
                    <Link href="/" title="Home">
                        <img width="180px" src={moslogo} />
                    </Link>
                </Box>

                <HeadingLinkContainer>
                    {articleData.srcDirs.map((category, index) => (
                        <HeadingLink key={index}>
                            <StyledLink
                                href={`/generated/${category}`}
                                title={`${category.charAt(0).toUpperCase() + category.slice(1)}`}
                            />
                        </HeadingLink>
                    ))}
                </HeadingLinkContainer>
            </Box>
        </StyledHeader>
    );
};

export default Header;
