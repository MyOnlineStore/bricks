import React from 'react';
import Breadcrumbs from '.';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

storiesOf('Breadcrumbs', module).add('Default', () => {
    const crumbs = [
        { url: '#', name: 'dashboard' },
        { url: '#', name: 'level 1' },
        { url: '#', name: 'level 2' },
        { name: 'no url' },
    ];

    return <Breadcrumbs breadcrumbs={object('crumbs', crumbs)} />;
});
