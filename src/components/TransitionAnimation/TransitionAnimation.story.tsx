import { boolean, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import TransitionAnimation from '.';
import styled from '../../utility/styled';
import Heading from '../Heading';

const StyledDiv = styled.div`
    border: solid 3px rgba(255, 36, 94, 0.3);
    border-radius: 5px;
    text-align: center;
`;

storiesOf('TransitionAnimation', module)
    .add('Zoom', () => {
        const show = boolean('show', true);

        return (
            <TransitionAnimation
                show={show}
                animation={select('animation', ['zoom', 'fade'], 'zoom')}
                key={0}
            >
                <StyledDiv>
                    <Heading>Lorem ipsum</Heading>
                </StyledDiv>
            </TransitionAnimation>
        );
    }
);
