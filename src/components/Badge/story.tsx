import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Badge from '.';

storiesOf('Badge', module).add('Default', () => <Badge>{text('text', '1')}</Badge>);
