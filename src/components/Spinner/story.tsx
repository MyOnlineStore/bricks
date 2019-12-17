import { color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from '../../utility/styled';
import React from 'react';
import Spinner from '.';
import { colors } from '../../themes/MosTheme';

storiesOf('Spinner', module).add('Default', () => {
    const size = text('wrapper size', '100px');

    const StyledDiv = styled.div`
        width: ${size};
        height: ${size};
        border: solid 3px rgba(255, 36, 94, 0.3);
    `;

    return (
        <StyledDiv>
            <Spinner color={color('fill', colors.green400)} />
        </StyledDiv>
    );
});
