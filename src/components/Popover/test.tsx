/// <reference path="../../_declarations/global.d.ts" />
import React from 'react';
import { Popper } from 'react-popper';
import Popover from '.';
import { shallowWithTheme, mountWithTheme } from '../../utility/_styled/testing';
import TransitionAnimation from '../TransitionAnimation';

describe('Popover', () => {
    it('should render with defaults', () => {
        const component = shallowWithTheme(<Popover isOpen={true} renderContent={(): string => 'Mock content'} />);

        const popper = component.find(Popper);

        expect(popper.prop('placement')).toEqual('bottom');
        expect(popper.prop('positionFixed')).toEqual(false);
    });

    it('should render closed', () => {
        const component = shallowWithTheme(<Popover isOpen={false} renderContent={(): string => 'Mock content'} />);

        const transition = component.find(TransitionAnimation);

        expect(transition.prop('show')).toEqual(false);
    });

    it('should render with a fixed postition', () => {
        const component = shallowWithTheme(
            <Popover isOpen={true} placement="left" fixed={true} renderContent={(): string => 'Mock content'} />,
        );

        const popper = component.find(Popper);

        expect(popper.prop('positionFixed')).toEqual(true);
    });

    it('should render with a custom distance and offset', () => {
        const component = shallowWithTheme(
            <Popover isOpen={true} offset={20} distance={6} renderContent={(): string => 'Mock content'} />,
        );

        const popper = component.find(Popper);

        expect(popper.prop('modifiers')).toEqual({
            offset: {
                offset: '20px, 6px',
            },
            flip: {
                enabled: false,
            },
        });
    });

    it('should render with only a custom offset', () => {
        const component = shallowWithTheme(
            <Popover isOpen={true} offset={20} renderContent={(): string => 'Mock content'} />,
        );

        const popper = component.find(Popper);

        expect(popper.prop('modifiers')).toEqual({
            offset: {
                offset: '20px, 16px',
            },
            flip: {
                enabled: false,
            },
        });
    });

    it('should render with only a custom distance', () => {
        const component = shallowWithTheme(
            <Popover isOpen={true} distance={6} renderContent={(): string => 'Mock content'} />,
        );

        const popper = component.find(Popper);

        expect(popper.prop('modifiers')).toEqual({
            offset: {
                offset: '0, 6px',
            },
            flip: {
                enabled: false,
            },
        });
    });

    it('should close when clicked outside the popover window', () => {
        const clickMock = jest.fn();
        const callbackMap: { [key: string]: Function } = {};

        document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

        const component = mountWithTheme(
            <Popover
                isOpen={true}
                distance={6}
                onClickOutside={clickMock}
                renderContent={(): string => 'Mock content'}
            />,
        );

        callbackMap.mousedown({
            target: document.createElement('div'),
        });

        component.update();

        expect(clickMock).toHaveBeenCalled();
    });

    it('should not break when onClickOutside is undefined and there is clicked outside the popover window', () => {
        const callbackMap: { [key: string]: Function } = {};

        document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

        const component = mountWithTheme(
            <Popover isOpen={true} distance={6} renderContent={(): string => 'Mock content'} />,
        );

        callbackMap.mousedown({
            target: document.createElement('div'),
        });

        component.update();
    });

    it('should not break when clicked outside the closed popover', () => {
        const fn = (): void => {
            const callbackMap: { [key: string]: Function } = {};

            document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

            const component = mountWithTheme(
                <Popover isOpen={false} distance={6} renderContent={(): string => 'Mock content'} />,
            );

            callbackMap.mousedown({ target: document.createElement('div') });

            component.update();
        };

        expect(fn).not.toThrow();
    });

    it('adds and removes eventListeners', () => {
        const component = mountWithTheme(
            <Popover isOpen={true} distance={6} renderContent={(): string => 'Mock content'} />,
        );
        component.unmount();

        expect(global.addEventListener).toBeCalled();
        expect(global.removeEventListener).toBeCalled();
    });
});
