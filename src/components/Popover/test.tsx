import toJson from 'enzyme-to-json';
import React from 'react';
import { Popper, Reference } from 'react-popper';
import Popover from '.';
import { shallowWithTheme } from '../../utility/styled';
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

    it('should render with a custom offset', () => {
        const component = shallowWithTheme(
            <Popover isOpen={true} offset={6} renderContent={(): string => 'Mock content'} />,
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
