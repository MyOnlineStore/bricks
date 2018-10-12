import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PropsType } from '.';
import { PropsType as CtaPropsType } from './WithCta';
import trbl from '../../utility/trbl';
import Button2 from '../Button2';
import ButtonGroup from '../ButtonGroup';
import Contrast from '../Contrast';
import Icon from '../Icon';
import Box from '../Box';
import { MediumIcons } from '../Icon/types';

/* tslint:disable */
const mediumIconKeys = Object.keys(MediumIcons).filter(key => MediumIcons[key as any].match('<svg'));
/* tslint:enable */

storiesOf('Button2', module)
    .add('Button Cta', () => {
        return (
            <Button2.Cta
                variant={select('variant', ['primary', 'secondary'], 'primary') as CtaPropsType['variant']}
                title={text('title', 'Click me')}
            />
        );
    })
    .add('With an icon2', () => {
        return (
            <Button2.Cta
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
                        <Button2
                            variant="secondary"
                            title={text('title', 'Click me')}
                            disabled={boolean('disabled', false)}
                            action={(): void => {
                                /* */
                            }}
                        />
                        <Button2
                            variant="plain"
                            title={'Click me'}
                            action={(): void => {
                                /* */
                            }}
                            compact
                        >
                            <Icon size="medium" icon="gear" />
                        </Button2>
                    </ButtonGroup>
                </Box>
            </Contrast>
        );
    });
