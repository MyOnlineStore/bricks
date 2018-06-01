import { storiesOf } from '@storybook/react';
import React from 'react';
import Contrast from '.';
import trbl from '../../utility/trbl';
import Button from '../Button';
import Spacer from '../Spacer';

storiesOf('Contrast', module).add('Default', () => (
    <>
        <Contrast>
            <Spacer offsetType="inner" offset={trbl(12)}>
                <Button variant="secondary" title="Inside Contrast" />
            </Spacer>
        </Contrast>
        <Spacer offsetType="inner" offset={trbl(12)}>
            <Button variant="secondary" title="Outside of Contrast" />
        </Spacer>
    </>
));
