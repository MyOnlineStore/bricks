import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import Box from '../Box';
import Spacer from '../Spacer/Spacer.style';
import Text from '../Text';
import BoxItem from './BoxItem.style';

const Wrapper = styled.div`
    border: 1px dashed #aaa;
    height: 60vh;
    padding: 6px;
`;

const StyledBoxItem = styled(BoxItem)`
    background: #eee;
    border: 1px dashed #aaa;
    padding: 6px 0;
`;

const StyledContent = styled(Text)`
    border: 1px dashed #aaa;
    margin: 6px 12px;
    padding: 12px;
`;

storiesOf('BoxItem', module)
    .add('Default', () => {
        const verticalOptions = ['top', 'bottom', 'center', 'stretch'];
        const horizontalOptions = ['left', 'right', 'center', 'stretch'];
        const gutterOptions = [[0], [12], [24]];
        const items:Array<JSX.Element> = [];
        const boxgroupId = 'BOX';
        const boxItemgroupId = 'BOXITEM';

        for (let i = 0; i < 3; i++) {
            items.push(
                <StyledBoxItem
                    key={i}
                    grow={boolean('grow', true)}
                    shrink={boolean('shrink', true)}
                    size={text('size', 'auto')}
                    gutter={[6]}
                    horizontal={select('horizontal', horizontalOptions, horizontalOptions[0], boxItemgroupId)}
                    vertical={select('vertical', verticalOptions, verticalOptions[0], boxItemgroupId)}
                >
                    <StyledContent>BoxItem content</StyledContent>
                    <StyledContent>BoxItem content</StyledContent>
                    <StyledContent>BoxItem content</StyledContent>
                </StyledBoxItem>
            );
        }

        return (
            <Wrapper>
                <Box
                    horizontal={select('Box horizontal', horizontalOptions, horizontalOptions[0], boxgroupId)}
                    vertical={select('Box vertical', verticalOptions, verticalOptions[0], boxgroupId)}
                    wrap={true}
                >
                    {items}
                </Box>
            </Wrapper>
        );
    });
