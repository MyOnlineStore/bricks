import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import DomBehavior from './DomBehavior';

storiesOf('DomBehavior', module).add('With a callback', () => {
    const StyledDiv = styled.div`
        border: solid 3px red;
        border-radius: 5px;
        padding: 12px 24px;
    `;

    return (
        <DomBehavior>
            {(behavior):JSX.Element => (
                <StyledDiv>
                    <div>
                        mouse:&nbsp;
                        {behavior.hovering ? 'hovering' : ''}&nbsp;
                        {behavior.clicked ? 'clicked' : ''}&nbsp;
                        {behavior.clicking ? 'clicking' : ''}
                    </div>
                    <div>focussing: {behavior.focussing ? 'focussing' : ''}</div>
                    <div>pressing key: {behavior.keypress}</div>
                    <input type="text" />
                </StyledDiv>
            )}
        </DomBehavior>
    );
});
