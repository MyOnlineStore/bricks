import { object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import BreakpointProvider from '.';
import Text from '../Text';

const StyledDiv = styled.div`
    background: #eee;
    padding: 24px;
`;

storiesOf('BreakpointProvider', module).add('Default', () => {
    const breakpoints = {
        small: 0,
        medium: 300,
        large: 600,
    };

    return (
        <BreakpointProvider breakpoints={object('breakpoints', breakpoints)}>
            {(breakpoint): JSX.Element => {
                return (
                    <StyledDiv>
                        <Text>Current breakpoint is {breakpoint}</Text>
                    </StyledDiv>
                );
            }}
        </BreakpointProvider>
    );
});
