import React, { SFC } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Heading from '../Heading';
import Illustration from '../Illustration';

import Text from '../Text';

type EmptyStatePropsType = {
    title: string;
    message: string;
};

const EmptyStateElement: SFC<EmptyStatePropsType> = (props): JSX.Element => (
    <Box direction="column" alignItems="center" justifyContent="space-around">
        <Illustration illustration={'cactus'} />
        <Box padding={trbl(18, 0, 0, 0)}>
            <Heading hierarchy={1} textAlign="center">
                {props.title}
            </Heading>
        </Box>
        <Box margin={trbl(12, 0, 24, 0)}>
            <Text textAlign="center" descriptive>
                {props.message}
            </Text>
        </Box>
        {props.children}
    </Box>
);

const StyledEmptyState = styled(EmptyStateElement)``;

export default StyledEmptyState;
export { EmptyStatePropsType };
