import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ScrollBar from 'simplebar';
import ScrollBox from '.';
import MosTheme from '../../themes/MosTheme';

let scrollBarOptions = {};

jest.mock('simplebar', () =>
    jest.fn().mockImplementation((element: HTMLElement, options: Object) => {
        scrollBarOptions = options;

        return {
            getScrollElement: jest.fn().mockReturnValue({
                offsetHeight: 200,
                scrollTop: 0,
                addEventListener: jest.fn().mockImplementation((event, callback) => {
                    callback();
                }),
            }),
            getContentElement: jest.fn().mockReturnValue({
                offsetHeight: 400,
            }),
        };
    }),
);

beforeEach(() => {
    scrollBarOptions = {};
});

describe('ScrollBox', () => {
    it('should show a top shadow when scrolling down', () => {
        /* tslint:disable */
        (ScrollBar as any).mockImplementationOnce(
            (element: HTMLElement, options: Object): Object => {
                /* tslint:enable */
                scrollBarOptions = options;

                return {
                    getScrollElement: jest.fn().mockReturnValue({
                        addEventListener: jest.fn().mockImplementation((event, callback) => {
                            callback();
                        }),
                    }),
                    getContentElement: jest.fn().mockReturnValue({
                        offsetHeight: 400,
                    }),
                };
            },
        );

        const component = mount(
            <MosTheme>
                <ScrollBox showInsetShadow maxHeight={900} />
            </MosTheme>,
        );

        const shadow = component
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0);

        /* tslint:disable */
        expect(toJson(shadow)).toMatchSnapshot();
        (expect(shadow) as any).toHaveStyleRule('position', 'absolute');
        (expect(shadow) as any).toHaveStyleRule('top', '0');
        /* tslint:enable */
    });

    it('should show a bottom shadow when scrolling up', () => {
        const component = mount(
            <MosTheme>
                <ScrollBox showInsetShadow maxHeight={900} />
            </MosTheme>,
        );

        const shadow = component
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(1);

        /* tslint:disable */
        expect(toJson(shadow)).toMatchSnapshot();
        (expect(shadow) as any).toHaveStyleRule('position', 'absolute');
        (expect(shadow) as any).toHaveStyleRule('bottom', '0');
        /* tslint:enable */
    });

    it('should hide the scrollbar when autoHideScrollBar is set', () => {
        mount(
            <MosTheme>
                <ScrollBox autoHideScrollBar maxHeight={900} />
            </MosTheme>,
        );

        expect(scrollBarOptions).toEqual({ autoHide: true });
    });

    it('should handle a scroll event', () => {
        const onScrollMock = jest.fn();

        mount(
            <MosTheme>
                <ScrollBox autoHideScrollBar maxHeight={900} onScroll={onScrollMock} />
            </MosTheme>,
        );

        expect(onScrollMock).toHaveBeenCalledWith({
            scrollBottom: 200,
            scrollDirection: 'up',
            scrollTop: 0,
        });
    });

    it('should tear down any listeners on unmount', () => {
        const removeListenerMock = jest.fn();

        /* tslint:disable */
        (ScrollBar as any).mockImplementationOnce(
            (element: HTMLElement, options: Object): Object => {
                /* tslint:enable */
                return {
                    getScrollElement: jest.fn().mockReturnValue({
                        addEventListener: jest.fn().mockImplementation((event, callback) => {
                            callback();
                        }),
                        removeEventListener: removeListenerMock,
                    }),
                    getContentElement: jest.fn().mockReturnValue({
                        offsetHeight: 400,
                    }),
                };
            },
        );

        const component = mount(
            <MosTheme>
                <ScrollBox autoHideScrollBar maxHeight={900} />
            </MosTheme>,
        );

        component.unmount();

        expect(removeListenerMock).toHaveBeenCalled();
    });
});
