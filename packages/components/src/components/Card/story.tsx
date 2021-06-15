import { storiesOf } from '@storybook/react';
import React from 'react';
import Card from '.';
import Text from '../Text';

storiesOf('Card', module).add('Default', () => (
    <Card $padding={[24]}>
        <Text>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</Text>
        <Text>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</Text>
    </Card>
));
