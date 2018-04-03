import { select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Heading from '../Heading';

storiesOf('Heading', module)
    .add('default', () => (
        <Heading>
            This is a div element.
        </Heading>
    ))
    .add('With a hierarchy', () => {
        const hierarchy = select(
            'Hierarchy',
            [1, 2, 3, 4, 5, 6],
            1
        );

        return (
            <Heading
                hierarchy={hierarchy}
            >
                This is an h{hierarchy} element.
            </Heading>
        );
    });
