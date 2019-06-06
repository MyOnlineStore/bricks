import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Badge, { PropsType } from '.';

storiesOf('Badge', module)
    .add('Default', () => {
        return (
            <Badge
                severity={
                    select('severity', ['success', 'warning', 'error', 'info'], 'success') as PropsType['severity']
                }
            >
                {text('text', '1')}
            </Badge>
        );
    })
    .add(
        'Props table',
        withInfo({ inline: true })(() => {
            return <Badge severity="success" />;
        }),
    );
