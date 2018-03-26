/// <reference path='./declarations/modules.d.ts' />

import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';
import { ReactElement } from 'react';

initStoryshots({
    configPath: './config/storybook',
    test: snapshotWithOptions({
        createNodeMock: (element:ReactElement<HTMLDivElement>):Object => ({
            offsetWidth: 900,
        }),
    }),
});
