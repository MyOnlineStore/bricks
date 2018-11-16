import toJson from 'enzyme-to-json';
import React from 'react';
import { Popper, Reference } from 'react-popper';
import Popover from '.';
import { shallowWithTheme, mountWithTheme } from '../../utility/_styled/testing';
import TransitionAnimation from '../TransitionAnimation';
import { PopoverAnchor, PopoverArrow, PopoverBackground } from './style';

describe('Popover', () => {
    it('should render with defaults', () => {
        const component = shallowWithTheme(<Popover isOpen={true} renderContent={(): string => 'Mock content'} />);

        const reference = component.find(Reference);
        const popper = component.find(Popper);

        expect(popper.prop('placement')).toEqual('bottom');
        expect(popper.prop('positionFixed')).toEqual(false);
        expect(toJson(popper.dive())).toMatchSnapshot();
        expect(toJson(reference.dive())).toMatchSnapshot();
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

        /* tslint:disable */
        expect((global as any).addEventListener).toBeCalled();
        expect((global as any).removeEventListener).toBeCalled();
        /* tslint:enable */
    });
});

describe('PopoverBackground', () => {
    it('should render with defaults', () => {
        const component = shallowWithTheme(<PopoverBackground />);

        expect(toJson(component)).toMatchSnapshot();
    });
});

describe('PopoverAnchor', () => {
    it('should render inline', () => {
        const component = shallowWithTheme(<PopoverAnchor />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render block', () => {
        const component = shallowWithTheme(<PopoverAnchor stretch={true} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});

describe('PopoverArrow', () => {
    it('should render at the bottom with shadow', () => {
        const component = shallowWithTheme(<PopoverArrow placement="bottom" shadow />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render at the top', () => {
        const component = shallowWithTheme(<PopoverArrow placement="top" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render on the left', () => {
        const component = shallowWithTheme(<PopoverArrow placement="left" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render on the right', () => {
        const component = shallowWithTheme(<PopoverArrow placement="right" />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
