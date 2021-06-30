import { color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Heading, { PropsType } from '.';

storiesOf('Heading', module).add('Default', () => {
    const hierarchy = select('Hierarchy', [1, 2, 3, 4, 5], 1) as PropsType['hierarchy'];
    const as = select('As', ['h1', 'h2', 'h3', 'h4', 'h5', 'div', 'span', 'p'], 'h1') as PropsType['as'];
    const textAlign = select('Text-align', ['left', 'right', 'center', 'justify'], 'left') as PropsType['textAlign'];

    return (
        <Heading
            hierarchy={hierarchy}
            as={as}
            textAlign={textAlign}
            color={color('color', (undefined as unknown) as string)}
        >
            Happy Selling!
        </Heading>
    );
});
