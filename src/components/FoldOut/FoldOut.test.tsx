import React from 'react';
import renderer from 'react-test-renderer';
import ResizeObserver from 'resize-observer-polyfill';
import FoldOut from '../FoldOut';

const renderOptions = {
    createNodeMock: ():Object => ({
        contentRect: {
            height: 900,
        },
    }),
};

/* tslint:disable */
(global as any).console = {
    warn: (jest.fn() as Function),
};
/* tslint:enable */

jest.mock('resize-observer-polyfill', () => jest
    .fn()
    .mockImplementation((callback) => ({
        observe: jest.fn().mockImplementation((element) => {
            callback([element]);
        }),
        unobserve: jest.fn(),
    })),
);

describe('FoldOut', () => {
    it('should have a height when open', () => {
        const foldOut = renderer.create(
            <FoldOut isOpen />,
            renderOptions,
        ).toJSON();

        expect(foldOut).toMatchSnapshot();
    });

    it('should have no height when closed', () => {
        const foldOut = renderer.create(
            <FoldOut isOpen={false} />,
            renderOptions,
        ).toJSON();

        expect(foldOut).toMatchSnapshot();
    });

    it('should use the fallback and warn once ResizeObserver is not available or throws', () => {
        const spy = jest.spyOn(console, 'warn');

        (ResizeObserver as jest.Mock<ResizeObserver>).mockImplementation(() => {
            throw TypeError;
        });

        const foldOut = renderer.create(
            <FoldOut isOpen />,
            renderOptions,
        ).toJSON();

        expect(foldOut).toMatchSnapshot();
        expect(spy).toHaveBeenCalled();
    });
});
