import { text, boolean, number, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import EmptyState, { PropsType } from '.';
import Box from '../Box';
import Button from '../Button';
import { HierarchyType } from '../Heading';

storiesOf('EmptyState', module)
    .add('Default', () => {
        const title = text('Title', 'There is nothing here') as PropsType['title'];
        const message = text('Message', '..A tumbleweed passes by') as PropsType['message'];

        return (
            <Box justifyContent="space-around">
                <EmptyState
                    title={title}
                    horizontal={boolean('Horizontal', false)}
                    hierarchy={select('Hierarchy', [1, 2, 3, 4, 5, 6], 1) as HierarchyType}
                    message={message}
                />
            </Box>
        );
    })
    .add('With button (as children)', () => {
        const title = text('Title', 'All done!') as PropsType['title'];
        const message = text('Message', 'Enjoy the rest of your day.') as PropsType['message'];
        const buttonTitle = text('Button title', 'Continue');

        return (
            <Box justifyContent="space-around">
                <EmptyState
                    illustration="balloon"
                    title={title}
                    message={message}
                    horizontal={boolean('horizontal', true)}
                    hierarchy={select('Hierarchy', [1, 2, 3, 4, 5, 6], 1) as HierarchyType}
                >
                    <Button variant="primary" title={`${buttonTitle}`} />
                </EmptyState>
            </Box>
        );
    });
