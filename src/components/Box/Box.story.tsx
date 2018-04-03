import { boolean, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import Spacer from '../Spacer/Spacer.style';
import Text from '../Text';
import Box from './Box.style';

const Wrapper = styled.div`
    border: 1px dashed #aaa;
    height: 90vh;
    padding: 6px;
`;

const Item = styled.div`
    background: #eee;
    border: 1px dashed #aaa;
    height: 100%;
`;

const verticalOptions = ['top', 'bottom', 'center', 'stretch'];
const horizontalOptions = ['left', 'right', 'center', 'stretch'];

const items:Array<JSX.Element> = [];

for (let i = 0; i < 12; i++) {
    items.push(
        <Spacer key={i} top={6} right={6} bottom={6} left={6}>
            <Item>
                <Spacer offsetType="inner" top={48} right={48} bottom={48} left={48}>
                    <Text>Item</Text>
                </Spacer>
            </Item>
        </Spacer>
    );
}

storiesOf('Box', module)
    .add('Default', () => (
        <Wrapper>
            <Box
                bleed={[select('bleed', [0, 6, 12], 0)]}
                horizontal={select('horizontal', horizontalOptions)}
                vertical={select('vertical', verticalOptions)}
                wrap={boolean('wrap', true)}
            >
                {items}
            </Box>
        </Wrapper>
    ));
