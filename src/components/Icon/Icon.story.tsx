import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '.';
import trbl from '../../utility/trbl';
import Spacer from '../Spacer';

storiesOf('Icon', module)
    .add('Small icon', () => (
        <Icon size="small" icon="heartO" />
    ))
    .add('Large icon', () => (
        <Icon size="large" icon="heart" />
    ))
    .add('With overwritten fill', () => (
        <Icon color="BlueViolet" size="large" icon="heart" />
    ))
    .add('With some text', () => (
        <div>
            <Icon size="small" icon="mos" />
            <span> With some text</span>
            <Spacer offset={trbl(12, 0, 0, 0)}>
                <Icon size="large" icon="award" />
                <span> With some other text</span>
            </Spacer>
        </div>
    ));
