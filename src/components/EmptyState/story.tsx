import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import EmptyState, { EmptyStatePropsType } from '.';
import Box from '../Box';
import Button from '../Button';

storiesOf('EmptyState', module)
    .add('Default', () => {
        const title = text('Title', 'No filters applied') as EmptyStatePropsType['title'];
        const message = text('Message', '..A tumbleweed passes by') as EmptyStatePropsType['message'];

        return (
            <Box justifyContent="space-around">
                <EmptyState title={title} message={message} />
            </Box>
        );
    })
    .add('With button (as children)', () => {
        const title = text('Title', 'No filters applied') as EmptyStatePropsType['title'];
        const message = text(
            'Message',
            'There are no filters applied yet. Use the button below to apply a filter.',
        ) as EmptyStatePropsType['message'];
        const buttonTitle = text('Button Title', 'Add filter');

        return (
            <Box justifyContent="space-around">
                <EmptyState title={title} message={message}>
                    <Button variant="primary" title={`${buttonTitle}`} />
                </EmptyState>
            </Box>
        );
    });
