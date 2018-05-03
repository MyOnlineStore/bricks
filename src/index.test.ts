/// <reference path='./declarations/modules.d.ts' />

import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';
import { ReactElement } from 'react';

jest.mock('simplebar', () => jest.fn().mockImplementation((element:HTMLElement, options:Object) => ({
    getScrollElement: jest.fn().mockReturnValue({
        addEventListener: jest.fn().mockImplementation((event, callback) => {
            callback();
        }),
    })
})));

initStoryshots({
    configPath: './config/storybook',
    test: snapshotWithOptions({
        createNodeMock: (element:ReactElement<HTMLDivElement>):Object => ({
            offsetWidth: 900,
            offsetHeight: 900,
        }),
        storyKindRegex:/^((?!.*?DontTest).)*$/
    }),
});
