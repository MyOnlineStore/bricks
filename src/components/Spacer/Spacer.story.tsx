import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import Spacer from '../Spacer';

const StyledDiv = styled.div`
    border: solid 3px rgba(255, 36, 94, 0.3);
    border-radius: 5px;
`;

storiesOf('Spacer', module)
    .add('With margin', () => (
        <Spacer
            top={12}
            right={12}
            bottom={12}
            left={12}
        >
            <StyledDiv>This has a margin.</StyledDiv>
        </Spacer>
    ))
    .add('With padding', () => (
        <StyledDiv>
            <Spacer
                top={12}
                right={12}
                bottom={12}
                left={12}
                offsetType="inner"
            >
                This has padding.
            </Spacer>
        </StyledDiv>
    ))
    .add('Without props', () => (
        <Spacer>
            <StyledDiv>This has no spacing.</StyledDiv>
        </Spacer>
    ));
