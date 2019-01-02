import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PropsType } from '.';
import trbl from '../../utility/trbl';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Contrast from '../Contrast';
import Box from '../Box';
import { MediumIcons } from '../Icon/types';

/* tslint:disable */
const mediumIconKeys = Object.keys(MediumIcons).filter(key => MediumIcons[key as any].match('<svg'));
/* tslint:enable */

storiesOf('Button', module)
    .add('Default', () => {
        return (
            <Button
                variant={
                    select(
                        'variant',
                        ['primary', 'secondary', 'warning', 'destructive', 'plain'],
                        'primary',
                    ) as PropsType['variant']
                }
                loading={boolean('loading', false)}
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                compact={boolean('compact', false)}
            />
        );
    })
    .add('With an icon', () => {
        return (
            <Button
                variant="primary"
                loading={boolean('loading', false)}
                title={text('title', 'Add to cart')}
                icon={select('Icon', mediumIconKeys, 'cart') as PropsType['icon']}
                disabled={boolean('disabled', false)}
            />
        );
    })
    .add('On a contrast area', () => {
        return (
            <Contrast>
                <Box padding={trbl(12)}>
                    <ButtonGroup>
                        <Button
                            variant="secondary"
                            title={text('title', 'Click me')}
                            disabled={boolean('disabled', false)}
                        />
                    </ButtonGroup>
                </Box>
            </Contrast>
        );
    });
