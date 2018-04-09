import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import Spacer from '../Spacer';
import Text from '../Text';

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
            <StyledDiv>
                <Text>This has a margin.</Text>
            </StyledDiv>
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
                <Text>This has padding.</Text>
            </Spacer>
        </StyledDiv>
    ))
    .add('Without props', () => (
        <Spacer>
            <StyledDiv>
                <Text>This has no spacing.</Text>
            </StyledDiv>
        </Spacer>
    ));
