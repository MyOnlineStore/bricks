import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';
import _R, { ReactElement } from 'react';

initStoryshots({
    configPath: './config/storybook',
    test: snapshotWithOptions({
        createNodeMock: (element: ReactElement<HTMLDivElement>): Object => ({
            offsetWidth: 900,
            offsetHeight: 900,
            focus: jest.fn(),
        }),
    }),
});
