import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';
import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

// Workaround for https://github.com/facebook/react/issues/11565#issuecomment-368877149
/* tslint:disable */
(ReactDOM as any).createPortal = (node: any): any => React.createElement('MockPortal', null, node);
/* tslint:enable */

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
