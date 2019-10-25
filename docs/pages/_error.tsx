import React, { FC } from 'react';
import { Box, Heading } from '@myonlinestore/bricks';

const ErrorPage: FC = props => (
    <Box width="100%" height="100%" margin={['auto']} justifyContent="center" alignItems="center">
        <Heading style={{ color: 'red' }}>11:45 | Warning: if you're not there you will be square</Heading>
    </Box>
);

export default ErrorPage;
