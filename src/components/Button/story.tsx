import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PropsType } from '.';
import { ButtonPropsType as PlainPropsType } from './stylePlain';
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
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                compact={boolean('compact', false)}
            />
        );
    })
    .add('Default - link', () => {
        return (
            <Button
                variant={
                    select(
                        'variant',
                        ['primary', 'secondary', 'warning', 'destructive', 'plain'],
                        'destructive',
                    ) as PropsType['variant']
                }
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                href="http://www.google.com"
                target="_blank"
                compact={boolean('compact', false)}
            />
        );
    })
    .add('Call to Action', () => {
        return <Button.Cta title={text('title', 'Click me')} />;
    })
    .add('Plain', () => {
        return (
            <Button.Plain
                variant={select('variant', ['default', 'destructive'], 'default') as PlainPropsType['variant']}
                title={text('title', 'Click me')}
            />
        );
    })
    .add('With an icon', () => {
        return (
            <Button.Cta
                title={text('title', 'Press any key to continue')}
                icon={select('Icon', mediumIconKeys, 'keyboard') as PropsType['icon']}
                iconAlign={select('Align icon', ['left', 'right'], 'left') as PropsType['iconAlign']}
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
                        <Button variant="plain" title={'Click me'} compact>
                            <Icon size="medium" icon="gear" />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Contrast>
        );
    });
