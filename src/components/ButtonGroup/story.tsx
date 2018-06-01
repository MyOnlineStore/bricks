import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import ButtonGroup from '.';
import Button from '../Button';

const Wrap = styled.div`
    max-width: 640px;
    border: solid 3px rgba(255, 36, 94, 0.3);
`;

storiesOf('ButtonGroup', module).add('Default', () => {
    return (
        <Wrap>
            <ButtonGroup>
                <Button variant="primary" title="Primary button">
                    Primary button
                </Button>
                <Button variant="secondary" title="Secondary button">
                    Secondary button
                </Button>
            </ButtonGroup>
        </Wrap>
    );
});
