import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PropsType } from '.';
import { PropsType as CtaPropsType } from './WithCta';
import { PropsType as PlainPropsType } from './WithPlain';
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
    .add('Button Cta', () => {
        return (
            <Button.Cta
                variant={select('variant', ['primary', 'secondary'], 'primary') as CtaPropsType['variant']}
                title={text('title', 'Click me')}
            />
        );
    })
    .add('Button Plain', () => {
        return (
            <Button.Plain
                variant={select('variant', ['default', 'error'], 'default') as PlainPropsType['variant']}
                title={text('title', 'Click me')}
            />
        );
    })
    .add('Button default', () => {
        return (
            <Button.Default
                variant={
                    select(
                        'variant',
                        ['primary', 'secondary', 'warning', 'destructive', 'plain'],
                        'destructive',
                    ) as PropsType['variant']
                }
                title={text('title', 'Click me')}
                disabled={boolean('disabled', false)}
                compact={boolean('compact', false)}
            />
        );
    })
    .add('With an icon2', () => {
        return (
            <Button.Cta
                title={text('title', 'Press any key to continue')}
                variant={select('variant', ['primary', 'secondary'], 'primary') as CtaPropsType['variant']}
                icon={select('Icon', mediumIconKeys, 'keyboard') as PropsType['icon']}
                iconAlign={select('Align icon', ['left', 'right'], 'right') as PropsType['iconAlign']}
                disabled={boolean('disabled', false)}
            />
        );
    })
    .add('On a contrast area2', () => {
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
