import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import EmptyState, { EmptyStatePropsType } from '.';
import Box from '../Box';
import Button from '../Button';

storiesOf('EmptyState', module)
    .add('Default', () => {
        const title = text('Title', 'Geen filters toegevoegd') as EmptyStatePropsType['title'];
        const message = text(
            'Message',
            'Er zijn nog geen filters toegevoegd aan jouw webwinkel. Gebruik de knop hieronder om een filter toe te voegen.',
        ) as EmptyStatePropsType['message'];

        return (
            <Box justifyContent="space-around">
                <Box basis="450px">
                    <EmptyState title={title} message={message} />
                </Box>
            </Box>
        );
    })
    .add('With button (as children)', () => {
        const title = text('Title', 'Geen filters toegevoegd') as EmptyStatePropsType['title'];
        const message = text(
            'Message',
            'Er zijn nog geen filters toegevoegd aan jouw webwinkel. Gebruik de knop hieronder om een filter toe te voegen.',
        ) as EmptyStatePropsType['message'];
        const buttonTitle = text('Button Title', 'Filter toevoegen');

        return (
            <Box justifyContent="space-around">
                <Box basis="450px">
                    <EmptyState title={title} message={message}>
                        <Button variant="primary" title={`${buttonTitle}`} />
                    </EmptyState>
                </Box>
            </Box>
        );
    });
