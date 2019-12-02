/// <reference path="../../_declarations/global.d.ts" />
import React from 'react';
import { Popper } from 'react-popper';
import Tooltip from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import TransitionAnimation from '../TransitionAnimation';

describe('Tooltip', () => {
    it('should render with defaults', () => {
        const component = mountWithTheme(<Tooltip text="Hidden tooltip" />);

        const popper = component.find(Popper);

        expect(popper.prop('placement')).toEqual('bottom');
    });

    it('should render closed', () => {
        const component = mountWithTheme(<Tooltip text="Hidden tooltip" />);
        const transition = component.find(TransitionAnimation);

        expect(transition.prop('show')).toEqual(false);
    });

    it('should not break when clicked outside the closed popover', () => {
        const fn = (): void => {
            const callbackMap: any = {};

            document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

            const component = mountWithTheme(<Tooltip text="Mock content" />);

            callbackMap.touch({ target: document.createElement('div') });

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
});
