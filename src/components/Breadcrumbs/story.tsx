import React from 'react';
import Breadcrumbs from '.';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';

storiesOf('Breadcrumbs', module).add('Default', () => {
    const crumbs = [
        { url: 'http://www.google.com', name: 'dashboard' },
        { url: 'http://www.google.com', name: 'level 1' },
        { url: 'http://www.google.com', name: 'level 2' },
        { name: 'no url' },
    ];

    return <Breadcrumbs breadcrumbs={object('crumbs', crumbs)} />;
});
