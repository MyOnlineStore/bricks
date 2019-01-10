import { select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Heading, { PropsType } from '.';

storiesOf('Heading', module).add('Default', () => {
    const hierarchy = select('Hierarchy', [1, 2, 3, 4, 5, 6], 1) as PropsType['hierarchy'];
    const element = select(
        'Element',
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'p'],
        'h1',
    ) as PropsType['element'];
    const textAlign = select('Text-align', ['left', 'right', 'center', 'justify'], 'left') as PropsType['textAlign'];
    const light = boolean('light', false) as PropsType['light'];

    return (
        <Heading hierarchy={hierarchy} element={element} textAlign={textAlign} light={light}>
            This is an {element !== undefined ? `${element}` : 'div'} element, with{' '}
            {hierarchy !== undefined ? `h${hierarchy}` : 'h1'} styling.
        </Heading>
    );
});
