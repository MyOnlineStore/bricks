import toJson from 'enzyme-to-json';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { Popper, Reference, Manager } from 'react-popper';
import Popover from '.';
import Button from '../Button';
import { shallowWithTheme, mountWithTheme } from '../../utility/styled/testing';
import TransitionAnimation from '../TransitionAnimation';
import { PopoverAnchor, PopoverArrow, PopoverBackground, PopoverWindow } from './style';
import ButtonGroup from '../ButtonGroup';

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

    // it('should render on click when triggerOn is defined test-renderer', () => {
    //     const mockButton = <Button variant="primary" title="anchor" />;
    //     const togglePopover = jest.fn();

    //     const component = renderer.create(
    //         <Popover triggerOn={'click'} distance={6} renderContent={(): string => 'Mock content'}>
    //             {mockButton}
    //         </Popover>,
    //         {
    //             createNodeMock: (): Object => ({
    //                 addEventListener: togglePopover,
    //                 removeEventListener: jest.fn(),
    //             }),
    //         },
    //     );

    //     //component.find(Button).simulate('click');
    // });

    it('should render on click when triggerOn is defined', () => {
        const component = mountWithTheme(
            <Popover triggerOn={'click'} distance={6} renderContent={(): string => 'Mock content'}>
                <Button variant="primary" title="Hover over me" />
            </Popover>,
        );

        const button = component.find(Button);

        button.simulate('click');

        component.update();

        expect(button).toHaveLength(1);

        expect(component.state('isOpen')).toBe(true);
    });

    it('should render on hover when triggerOn is defined', () => {
        const component = mountWithTheme(
            <Popover triggerOn={'hover'} distance={6} renderContent={(): string => 'Mock content'}>
                <Button variant="primary" title="Hover over me" />
            </Popover>,
        );

        component.find(Button).simulate('mouseenter');

        component.update();

        expect(component.state('isOpen')).toBe(true);
    });

    it('should close when clicked outside the popover window', () => {
        const callbackMap: { [key: string]: Function } = {};

        document.addEventListener = jest.fn((event, callback) => (callbackMap[event] = callback));

        const component = mountWithTheme(
            <Popover isOpen={true} distance={6} renderContent={(): string => 'Mock content'} />,
        );

        callbackMap.mousedown({
            target: document.createElement('div'),
        });

        component.update();

        expect(component.state('isOpen')).toBe(false);
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
