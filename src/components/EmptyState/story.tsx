import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import EmptyState, { PropsType } from '.';
import Box from '../Box';
import Button from '../Button';

storiesOf('EmptyState', module)
    .add('Default', () => {
        const title = text('Title', 'No filters applied') as PropsType['title'];
        const message = text('Message', '..A tumbleweed passes by') as PropsType['message'];

        return (
            <Box justifyContent="space-around">
                <EmptyState title={title} message={message} />
            </Box>
        );
    })
    .add('With button (as children)', () => {
        const title = text('Title', 'No filters applied') as PropsType['title'];
        const message = text(
            'Message',
            'There are no filters applied yet. Use the button below to apply a filter.',
        ) as PropsType['message'];
        const buttonTitle = text('Button Title', 'Add filter');

        return (
            <Box justifyContent="space-around">
                <EmptyState title={title} message={message} stacked>
                    <Button variant="primary" title={`${buttonTitle}`} />
                </EmptyState>
            </Box>
        );
    });
