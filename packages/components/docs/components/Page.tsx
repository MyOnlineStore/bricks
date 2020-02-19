import React, { FC } from 'react';
import { Box, colors } from '@myonlinestore/bricks';
import Header from '../containers/Header';
import styled from 'styled-components';

const StyledPage = styled.main`
    background-color: ${colors.grey100};
`;

const Page: FC = props => {
    return (
        <StyledPage>
            <Box minHeight="100vh" direction="column" maxWidth="1200px" margin={['auto']}>
                <Header />
                <Box width="100%" minHeight="80vh" alignContent="stretch">
                    {props.children}
                </Box>
            </Box>
        </StyledPage>
    );
};

export default Page;
