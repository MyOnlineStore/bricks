import React from 'react';
import ScrollBar from 'simplebar';
import ScrollBox from '.';
import { mountWithTheme } from '../../utility/styled';
import { StyledBottom, StyledTop } from './ScrollBox.style';

describe('ScrollBox', () => {
    it('should show a top shadow when scrolling down', () => {
        const component = mountWithTheme(
            <ScrollBox showInsetShadow maxHeight={900} />,
        );

        component.simulate('scroll');

        expect(component.find(StyledTop).length).toBe(1);
    });

    it('should show a bottom shadow when scrolling up', () => {
        /* tslint:disable */
        (ScrollBar as any).mockImplementationOnce(
            /* tslint:enable */
            (): Object => ({
                getScrollElement: jest
                    .fn()
                    .mockReturnValueOnce({
                        scrollTop: 50,
                        offsetHeight: 200,
                        addEventListener: jest.fn((event, callback) => {
                            callback();
                        }),
                    })
                    .mockReturnValueOnce({
                        scrollTop: 0,
                        offsetHeight: 200,
                        addEventListener: jest.fn((event, callback) => {
                            callback();
                        }),
                    }),
                getContentElement: jest.fn().mockReturnValue({
                    offsetHeight: 400,
                }),
            }),
        );

        const component = mountWithTheme(
            <ScrollBox showInsetShadow maxHeight={900} />,
        );

        component.simulate('scroll');

        expect(component.find(StyledBottom).length).toBe(1);
    });

    it('should hide the scrollbar when autoHideScrollBar is set', () => {
        let scrollBarOptions = {};

        /* tslint:disable */
        (ScrollBar as any).mockImplementationOnce(
            (element: HTMLElement, options: Object): Object => {
                /* tslint:enable */
                scrollBarOptions = options;

                return {
                    getScrollElement: jest.fn().mockReturnValue({
                        addEventListener: jest.fn((event, callback) => {
                            callback();
                        }),
                    }),
                    getContentElement: jest.fn().mockReturnValue({
                        offsetHeight: 400,
                    }),
                };
            },
        );

        mountWithTheme(<ScrollBox autoHideScrollBar maxHeight={900} />);

        expect(scrollBarOptions).toEqual({ autoHide: true });
    });

    it('should handle a scroll event', () => {
        const onScrollMock = jest.fn();

        /* tslint:disable */
        (ScrollBar as any).mockImplementationOnce(
            /* tslint:enable */
            (): Object => ({
                getScrollElement: jest.fn().mockReturnValue({
                    scrollTop: 0,
                    offsetHeight: 200,
                    addEventListener: jest.fn((event, callback) => {
                        callback();
                    }),
                }),
                getContentElement: jest.fn().mockReturnValue({
                    offsetHeight: 400,
                }),
            }),
        );

        mountWithTheme(
            <ScrollBox
                autoHideScrollBar
                maxHeight={900}
                onScroll={onScrollMock}
            />,
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
            /* tslint:enable */
            (): Object => ({
                getScrollElement: jest.fn().mockReturnValue({
                    scrollTop: 0,
                    offsetHeight: 200,
                    addEventListener: jest.fn(),
                    removeEventListener: removeListenerMock,
                }),
                getContentElement: jest.fn().mockReturnValue({
                    offsetHeight: 400,
                }),
            }),
        );

        const component = mountWithTheme(
            <ScrollBox autoHideScrollBar maxHeight={900} />,
        );

        component.unmount();

        expect(removeListenerMock).toHaveBeenCalled();
    });
});
