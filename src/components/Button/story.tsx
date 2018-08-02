import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PropsType } from '.';
import trbl from '../../utility/trbl';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Contrast from '../Contrast';
import Icon from '../Icon';
import Box from '../Box';
import { MediumIcons } from '../Icon/types';

/* tslint:disable */
const mediumIconKeys = Object.keys(MediumIcons).filter(key => MediumIcons[key as any].match('<svg'));
/* tslint:enable */

storiesOf('Button', module)
    .add('With text', () => {
        return (
            <Button
                variant={
                    select(
                        'variant',
                        ['primary', 'secondary', 'warning', 'destructive', 'plain'],
                        'primary',
                    ) as PropsType['variant']
                }
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                flat={boolean('flat', false)}
                compact={boolean('compact', false)}
            />
        );
    })
    .add('With an icon', () => {
        return (
            <Button
                title={text('title', 'Press any key to continue')}
                variant={
                    select(
                        'variant',
                        ['primary', 'secondary', 'warning', 'destructive', 'plain'],
                        'destructive',
                    ) as PropsType['variant']
                }
                icon={select('Icon', mediumIconKeys, 'keyboard') as PropsType['icon']}
                iconAlign={select('Align icon', ['left', 'right'], 'right') as PropsType['iconAlign']}
                disabled={boolean('disabled', false)}
                flat={boolean('flat', false)}
                compact={boolean('flat', false)}
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
                            action={(): void => {
                                /* */
                            }}
                        />
                        <Button
                            variant="plain"
                            title={'Click me'}
                            action={(): void => {
                                /* */
                            }}
                            compact
                        >
                            <Icon size="medium" icon="gear" />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Contrast>
        );
    });
