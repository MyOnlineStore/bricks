import { boolean, number, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import trbl from '../../utility/trbl';
import Spacer from '../Spacer/Spacer.style';
import Text from '../Text';
import Box from './Box.style';

const Wrapper = styled.div`
    border: 1px dashed #aaa;
    height: 90vh;
`;

const Item = styled.div`
    background: #eee;
    border: 1px dashed #aaa;
    width: 100%;
    height: 100%;
`;

const justifyOptions = ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'];
const alignItemsOptions = ['flex-start', 'flex-end', 'center', 'stretch'];
const alignContentOptions = ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'];
const alignSelf = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
const directionOptions = ['row', 'row-reverse', 'column', 'column-reverse'];

storiesOf('Box', module)
    .add('Default', () => {
        const items:Array<JSX.Element> = [];

        for (let i = 0; i < 6; i++) {
            items.push(
                <Box
                    key={i}
                    margin={trbl(select('margin', [0, 6, 12], 0, 'Child'))}
                    grow={number('grow', 1, {}, 'Child')}
                    shrink={number('shrink', 1, {}, 'Child')}
                    basis={text('basis', 'auto', 'Child')}
                    order={number('order', 1, {}, 'Child')}
                    alignSelf={select('alignSelf', alignSelf, alignSelf[0], 'Child')}
                >
                    <Item>
                        <Spacer offsetType="inner" offset={trbl(48)}>
                            <Text>Box {i + 1}</Text>
                        </Spacer>
                    </Item>
                </Box>,
            );
        }

        return (
            <Wrapper>
                <Box
                    margin={trbl(select('margin', [-12, -6, 0, 6, 12], 0, 'Parent'))}
                    justifyContent={select('justifyContent', justifyOptions, justifyOptions[0], 'Parent')}
                    alignItems={select('alignItems', alignItemsOptions, alignItemsOptions[0], 'Parent')}
                    alignContent={select('alignContent', alignContentOptions, alignContentOptions[0], 'Parent')}
                    direction={select('direction', directionOptions, directionOptions[0], 'Parent')}
                    wrap={boolean('wrap', true, 'Parent')}
                    height="100%"
                >
                    {items}
                </Box>
            </Wrapper>
        );
    });
