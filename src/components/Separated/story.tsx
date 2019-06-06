import { storiesOf } from '@storybook/react';
import React from 'react';
import Separated from '.';
import Text from '../Text';
import { boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled from '../../utility/styled';

const Wrap = styled.div`
    max-width: 640px;
    border: solid 3px rgba(255, 36, 94, 0.3);
`;

storiesOf('Separated', module)
    .add('Default', () => (
        <Wrap>
            <Separated before={boolean('before', false)} after={boolean('after', false)}>
                <Text>This is the first item</Text>
                <Text>This is the second item</Text>
                <Text>This is the third item</Text>
                <Text>This is the fourth item</Text>
            </Separated>
        </Wrap>
    ))
    .add(
        'Props',
        withInfo({ inline: true })(() => {
            return <Separated before after />;
        }),
    );
