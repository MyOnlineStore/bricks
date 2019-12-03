/// <reference path="../../_declarations/global.d.ts" />
import React from 'react';
import { Popper } from 'react-popper';
import Tooltip from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import TransitionAnimation from '../TransitionAnimation';

describe('Tooltip', () => {
    it('should render on the bottom as default', () => {
        const component = mountWithTheme(<Tooltip show={true} text="Hidden tooltip" />);

        const popper = component.find(Popper);
        const transition = component.find(TransitionAnimation);

        expect(popper.prop('placement')).toEqual('bottom');
        expect(transition.prop('show')).toEqual(true);
    });

    it('should not break when clicked outside the closed popover', () => {
        const fn = (): void => {
            const callbackMap: any = {};

            document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

            const component = mountWithTheme(<Tooltip text="Mock content" />);

            callbackMap.mousedown({ target: document.createElement('div') });
            callbackMap.touchEnd({ target: document.createElement('div') });

            component.update();
        };

        expect(fn).not.toThrow();
    });

    it('adds and removes eventListeners', () => {
        const component = mountWithTheme(<Tooltip text="Mock content" />);

        component.unmount();

        expect(global.addEventListener).toBeCalled();
        expect(global.removeEventListener).toBeCalled();
    });

    it('should trigger a callback when clicked outside the tooltip', () => {
        const clickMock = jest.fn();
        const callbackMap: any = {};

        document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

        const component = mountWithTheme(<Tooltip show={true} onClickOutside={clickMock} text={'Mock content'} />);

        callbackMap.mousedown({
            target: document.createElement('div'),
        });

        component.update();

        expect(clickMock).toHaveBeenCalled();
    });
});
