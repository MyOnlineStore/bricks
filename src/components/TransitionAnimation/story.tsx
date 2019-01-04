import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import TransitionAnimation, { PropsType } from '.';
import styled from '../../utility/styled';
import Box from '../Box';
import Heading from '../Heading';

const StyledDiv = styled.div`
    border: solid 3px rgba(255, 36, 94, 0.3);
    padding: 6px 24px;
    border-radius: 5px;
    text-align: center;
`;

storiesOf('TransitionAnimation', module).add('Default', () => {
    const show = boolean('show', true);

    return (
        <Box direction="column">
            <TransitionAnimation
                show={show}
                animation={
                    select(
                        'animation',
                        ['zoom', 'fade', 'slideDown', 'slideUp', 'slideLeft', 'slideRight'],
                        'zoom',
                    ) as PropsType['animation']
                }
            >
                <StyledDiv>
                    <Heading>Lorem ipsum</Heading>
                </StyledDiv>
            </TransitionAnimation>
        </Box>
    );
});
