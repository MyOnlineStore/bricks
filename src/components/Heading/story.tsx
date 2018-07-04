import { boolean, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Heading, { PropsType } from '.';

storiesOf('Heading', module)
    .add('Default', () => <Heading>This is a div element.</Heading>)
    .add('With a hierarchy', () => {
        const hierarchy = select('Hierarchy', [1, 2, 3, 4, 5, 6], 1) as PropsType['hierarchy'];

        return <Heading hierarchy={hierarchy}>This is an h{hierarchy} element.</Heading>;
    })
    .add('With variation', () => {
        const subHeading = boolean('SubHeading', false);
        const hierarchy = select('Hierarchy', [1, 2, 3, 4, 5, 6], 1) as PropsType['hierarchy'];

        return (
            <Heading subHeading={subHeading} hierarchy={hierarchy}>
                This is an {!subHeading ? 'Heading' : 'SubHeading'} {hierarchy !== undefined ? `h${hierarchy}` : 'div'} element.
            </Heading>
        );
    });
