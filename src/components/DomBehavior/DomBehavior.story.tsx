import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import DomBehavior from './DomBehavior';

storiesOf('DomBehavior', module).add('With a callback', () => {
    const StyledDiv = styled.div`
        border: solid 3px rgba(255, 36, 94, 0.3);
        border-radius: 5px;
        padding: 12px 24px;
    `;

    return (
        <DomBehavior>
            {(behavior):JSX.Element => (
                <StyledDiv>
                    <div>
                        hovering: {behavior.hovering ? 'true' : 'false'}
                    </div>
                    <div>
                        clicking: {behavior.clicking ? 'true' : 'false'}
                    </div>
                    <div>focussing: {behavior.focussing ? 'true' : 'false'}</div>
                    <div>pressing key: {behavior.keypress}</div>
                    <input type="text" />
                </StyledDiv>
            )}
        </DomBehavior>
    );
});
