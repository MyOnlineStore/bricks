import React, { StatelessComponent } from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Heading from '../Heading';
import Illustration from '../Illustration';
import Spacer from '../Spacer';
import Text from '../Text';

type EmptyStatePropsType = {
    title: string;
    message: string;
};

const EmptyStateElement: StatelessComponent<EmptyStatePropsType> = (props): JSX.Element => (
    <Box direction="column" alignItems="center" justifyContent="space-around">
        <Illustration illustration={'cactus'} />
        <Spacer offset={trbl(18, 0, 0, 0)} offsetType="inner">
            <Heading hierarchy={1} textAlign="center">
                {props.title}
            </Heading>
        </Spacer>
        <Spacer offset={trbl(12, 0, 24, 0)}>
            <Text textAlign="center" descriptive>
                {props.message}
            </Text>
        </Spacer>
        {props.children}
    </Box>
);

const StyledEmptyState = styled(EmptyStateElement)``;

export default StyledEmptyState;
export { EmptyStatePropsType };
