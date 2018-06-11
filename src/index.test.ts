import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';
import _R, { ReactElement } from 'react';

jest.mock('simplebar', () =>
    jest.fn((element: HTMLElement, options: Object) => ({
        getScrollElement: jest.fn().mockReturnValue({
            addEventListener: jest.fn((event, callback) => {
                callback();
            }),
        }),
    })),
);

/* tslint:disable */
jest.mock('react-popper', () => {
    return {
        Manager: (props: any): JSX.Element => {
            return props.children;
        },
        Popper: (props: any): JSX.Element => {
            return props.children({
                ref: null,
                style: '',
                placement: '',
                arrowProps: { ref: null, style: '' },
            });
        },
        Reference: (props: any): JSX.Element => {
            return props.children({
                ref: null,
            });
        },
    };
});
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
    storyKindRegex: /^((?!.*?DontTest).)*$/,
});
