import { mount } from 'enzyme';
import React from 'react';
import ScrollBar from 'simplebar';
import ScrollBox from '.';
import MosTheme from '../../themes/MosTheme';
import { mountWithTheme } from '../../utility/styled';
import { StyledBottom, StyledTop } from './style';

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
        (ScrollBar as any).mockImplementationOnce((element: HTMLElement, options: Object): Object => {
            /* tslint:enable */
            scrollBarOptions = options;

            return {
                getScrollElement: jest.fn().mockReturnValue({
                    scrollTop: 0,
                    offsetHeight: 300,
                    addEventListener: jest.fn().mockImplementation((event, callback) => {
                        callback();
                    }),
                }),
                getContentElement: jest.fn().mockReturnValue({
                    offsetHeight: 400,
                }),
            };
        });

        const component = mount(
            <MosTheme>
                <ScrollBox showInsetShadow />
            </MosTheme>,
        );

        component.simulate('scroll');

        const shadow = component.find(StyledTop);

        /* tslint:disable */
        (expect(shadow) as any).toHaveStyleRule('opacity', '1');
        /* tslint:enable */
    });

    it('should show a bottom shadow when scrolling up', () => {
        /* tslint:disable */
        (ScrollBar as any)
            .mockImplementationOnce((element: HTMLElement, options: Object): Object => {
                /* tslint:enable */
                scrollBarOptions = options;

                return {
                    getScrollElement: jest.fn().mockReturnValue({
                        scrollTop: 0,
                        offsetHeight: 300,
                        addEventListener: jest.fn().mockImplementation((event, callback) => {
                            callback();
                        }),
                    }),
                    getContentElement: jest.fn().mockReturnValue({
                        offsetHeight: 400,
                    }),
                };
            })
            .mockImplementationOnce((element: HTMLElement, options: Object): Object => {
                /* tslint:enable */
                scrollBarOptions = options;

                return {
                    getScrollElement: jest.fn().mockReturnValue({
                        scrollTop: -100,
                        offsetHeight: 300,
                        addEventListener: jest.fn().mockImplementation((event, callback) => {
                            callback();
                        }),
                    }),
                    getContentElement: jest.fn().mockReturnValue({
                        offsetHeight: 400,
                    }),
                };
            });

        const component = mountWithTheme(<ScrollBox showInsetShadow />);

        component.simulate('scroll');
        component.update();

        const shadow = component.find(StyledBottom);

        /* tslint:disable */
        (expect(shadow) as any).toHaveStyleRule('opacity', '1');
        /* tslint:enable */
    });

    it('should hide the scrollbar when autoHideScrollBar is set', () => {
        mount(
            <MosTheme>
                <ScrollBox autoHideScrollBar />
            </MosTheme>,
        );

        expect(scrollBarOptions).toEqual({ autoHide: true });
    });

    it('should handle a scroll event', () => {
        const onScrollMock = jest.fn();

        mount(
            <MosTheme>
                <ScrollBox autoHideScrollBar onScroll={onScrollMock} />
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
        (ScrollBar as any).mockImplementationOnce((element: HTMLElement, options: Object): Object => {
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
        });

        const component = mount(
            <MosTheme>
                <ScrollBox autoHideScrollBar />
            </MosTheme>,
        );

        component.unmount();

        expect(removeListenerMock).toHaveBeenCalled();
    });
});
