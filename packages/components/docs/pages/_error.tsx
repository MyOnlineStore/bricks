import React, { FC } from 'react';
import { Box, Heading } from '@myonlinestore/bricks';

const ErrorPage: FC = props => (
    <Box width="100%" height="100%" margin={['auto']} justifyContent="center" alignItems="center">
        <Heading>404: Page not found</Heading>
    </Box>
);

export default ErrorPage;
