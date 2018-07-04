import { boolean, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Heading, { PropsType } from '.';

storiesOf('Heading', module)
    .add('Default', () => <Heading>This is a div element.</Heading>)
    .add('With SubHeading', () => {
        const hierarchy = select('Hierarchy', [1, 2, 3, 4, 5, 6], 1) as PropsType['hierarchy'];
        const subHeading = boolean('SubHeading', false);

        return (
            <Heading hierarchy={hierarchy} subHeading={subHeading}>
                This is an {!subHeading ? 'Heading' : 'SubHeading'}-{hierarchy !== undefined ? `h${hierarchy}` : 'div'} element.
            </Heading>
        );
    });
