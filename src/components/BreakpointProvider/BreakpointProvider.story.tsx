import { object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import BreakpointProvider from '../BreakpointProvider';
import { BreakpointType } from './BreakpointProvider.template';

const StyledDiv = styled.div`
    background: #eee;
    padding: 24px;
`;

storiesOf('BreakpointProvider', module)
    .add('default', () => {
        const breakpoints:BreakpointType = {
            small: 0,
            medium: 300,
            large: 600,
        };

        return (
            <BreakpointProvider breakpoints={object('breakpoints', breakpoints)}>
                {(breakpoint):JSX.Element => {
                    return (
                        <StyledDiv>
                            <div>Current breakpoint is {breakpoint}</div>
                        </StyledDiv>
                    );
                }}
            </BreakpointProvider>
        );
    });
