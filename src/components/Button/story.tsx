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
                action={(): void => {
                    /* */
                }}
                compact={boolean('compact', false)}
            />
        );
    })
    .add('With an icon', () => {
        return (
            <Button
                variant={
                    select(
                        'variant',
                        ['primary', 'secondary', 'warning', 'destructive', 'plain'],
                        'secondary',
                    ) as PropsType['variant']
                }
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                flat={boolean('flat', false)}
                action={(): void => {
                    /* */
                }}
                compact
            >
                <Icon size="medium" icon="gear" />
            </Button>
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
