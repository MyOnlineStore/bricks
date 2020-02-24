import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import Box, { PropsType } from '.';
import trbl from '../../utility/trbl';
import { OffsetType } from '../../types/OffsetType';
import Text from '../Text';

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

const positionOptions = ['static', 'relative', 'fixed', 'absolute'];

storiesOf('Box', module).add('Default', () => {
    const items: Array<JSX.Element> = [];

    for (let i = 0; i < 6; i++) {
        items.push(
            <Box
                key={i}
                margin={trbl(select('margin', [0, 6, 12], 0, 'Child') as OffsetType)}
                padding={trbl(select('padding', [0, 6, 12], 0, 'Child') as OffsetType)}
                grow={number('grow', 1, {}, 'Child')}
                shrink={number('shrink', 1, {}, 'Child')}
                basis={text('basis', 'auto', 'Child')}
                order={number('order', 1, {}, 'Child')}
                alignSelf={select('alignSelf', alignSelf, alignSelf[0], 'Child') as PropsType['alignSelf']}
                height={text('height', '', 'Child')}
                maxHeight={text('maxHeight', '', 'Child')}
                minHeight={text('minHeight', '', 'Child')}
                width={text('width', '', 'Child')}
                maxWidth={text('maxWidth', '', 'Child')}
                minWidth={text('minWidth', '', 'Child')}
                position={select('position', positionOptions, positionOptions[0], 'Child') as PropsType['position']}
                top={text('top', '', 'Child')}
                right={text('right', '', 'Child')}
                bottom={text('bottom', '', 'Child')}
                left={text('left', '', 'Child')}
                zIndex={number('z-index', 0, {}, 'Child')}
            >
                <Item>
                    <Box padding={trbl(48)}>
                        <Text>Box {i + 1}</Text>
                    </Box>
                </Item>
            </Box>,
        );
    }

    return (
        <Wrapper>
            <Box
                margin={trbl(select('margin', [-12, -6, 0, 6, 12], 0, 'Parent') as OffsetType)}
                padding={trbl(select('padding', [-12, -6, 0, 6, 12], 0, 'Parent') as OffsetType)}
                justifyContent={
                    select('justifyContent', justifyOptions, justifyOptions[0], 'Parent') as PropsType['justifyContent']
                }
                alignItems={
                    select('alignItems', alignItemsOptions, alignItemsOptions[0], 'Parent') as PropsType['alignItems']
                }
                alignContent={
                    select(
                        'alignContent',
                        alignContentOptions,
                        alignContentOptions[0],
                        'Parent',
                    ) as PropsType['alignContent']
                }
                direction={
                    select('direction', directionOptions, directionOptions[0], 'Parent') as PropsType['direction']
                }
                wrap={boolean('wrap', true, 'Parent')}
                height="100%"
                width="100%"
            >
                {items}
            </Box>
        </Wrapper>
    );
});
