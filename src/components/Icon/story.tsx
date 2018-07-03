import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '.';
import trbl from '../../utility/trbl';
import Spacer from '../Spacer';

storiesOf('Icon', module)
    .add('Small icon', () => <Icon size="small" icon="checkmark" />)
    .add('Medium icon', () => <Icon size="medium" icon="heartO" />)
    .add('Large icon', () => <Icon size="large" icon="mos" />)
    .add('With overwritten fill', () => <Icon color="BlueViolet" size="large" icon="heart" />)
    .add('With some text', () => (
        <div>
            <Icon size="small" icon="checkmark" />
            <span> With some text</span>
            <Spacer offset={trbl(12, 0, 0, 0)}>
                <Icon size="medium" icon="lightbulb" />
                <span> With some other text</span>
                <Spacer offset={trbl(18, 0, 0, 0)}>
                    <Icon size="large" icon="mos" />
                    <span> With some other other text</span>
                </Spacer>
            </Spacer>
        </div>
    ));
