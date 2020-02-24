import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import EmptyState, { PropsType } from '.';
import Box from '../Box';
import Button from '../Button';
import { BalloonColorIllustration } from '@myonlinestore/bricks-assets';

storiesOf('EmptyState', module)
    .add('Default', () => {
        const title = text('Title', 'There is nothing here') as PropsType['title'];
        const message = text('Message', '..A tumbleweed passes by') as PropsType['message'];

        return (
            <Box justifyContent="space-around">
                <EmptyState title={title} horizontal={boolean('Horizontal', false)} message={message} />
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
                    illustration={<BalloonColorIllustration />}
                    title={title}
                    message={message}
                    horizontal={boolean('horizontal', true)}
                >
                    <Button variant="primary" title={buttonTitle} />
                </EmptyState>
            </Box>
        );
    });
