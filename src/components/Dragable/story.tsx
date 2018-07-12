import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Dragable from '.';

storiesOf('Dragable', module).add('Default', () => {
    return <Dragable />;
});
