import { select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import SubHeading from '../SubHeading';

storiesOf('SubHeading', module)
    .add('default', () => (
        <SubHeading>
            This is a div element.
        </SubHeading>
    ))
    .add('With a hierarchy', () => {
        const hierarchy = select(
            'Hierarchy',
            [1, 2, 3, 4, 5, 6],
            2,
        );

        return (
            <SubHeading
                hierarchy={hierarchy}
            >
                This is an h{hierarchy} element.
            </SubHeading>
        );
    });
