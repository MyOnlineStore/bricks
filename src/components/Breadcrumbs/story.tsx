import React from 'react';
import Breadcrumbs from '.';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Breadcrumbs', module).add(
    'Default & Props',
    withInfo({ inline: true })(() => {
        const crumbs = [
            { url: '#', name: 'dashboard' },
            { url: '#', name: 'level 1' },
            { url: '#', name: 'level 2' },
            { name: 'no url' },
        ];

        return <Breadcrumbs breadcrumbs={object('crumbs', crumbs)} />;
    }),
);
