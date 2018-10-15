import { boolean, text, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import trbl from '../../../utility/trbl';
import BareButton from '../BareButton';
import ButtonGroup from '../../ButtonGroup';
import Contrast from '../../Contrast';
import Icon, { MediumPropsType } from '../../Icon';
import Box from '../../Box';
import { MediumIcons } from '../../Icon/types';

/* tslint:disable */
const mediumIconKeys = Object.keys(MediumIcons).filter(key => MediumIcons[key as any].match('<svg'));
/* tslint:enable */

storiesOf('BareButton', module)
    .add('With text2', () => {
        return <BareButton title={text('title', 'Click me')} disabled={boolean('disabled', false)} />;
    })
    .add('With an icon2', () => {
        return (
            <BareButton
                title={text('title', 'Press any key to continue')}
                icon={select('Icon', mediumIconKeys, 'keyboard') as MediumPropsType['icon']}
                disabled={boolean('disabled', false)}
            />
        );
    })
    .add('On a contrast area2', () => {
        return (
            <Contrast>
                <Box padding={trbl(12)}>
                    <ButtonGroup>
                        <BareButton title={text('title', 'Click me')} disabled={boolean('disabled', false)} />
                        <BareButton title={'Click me'}>
                            <Icon size="medium" icon="gear" />
                        </BareButton>
                    </ButtonGroup>
                </Box>
            </Contrast>
        );
    });
