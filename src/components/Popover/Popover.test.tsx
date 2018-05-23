import toJson from 'enzyme-to-json';
import React from 'react';
import { Popper, Reference } from 'react-popper';
import Popover from '.';
import { shallowWithTheme } from '../../utility/styled';
import TransitionAnimation from '../TransitionAnimation';
import { PopoverArrow, PopoverBackground } from './Popover.style';

/* tslint:disable */
jest.mock('react-popper', () => {
    const React = require('react');

    return {
        Manager: (props:any):JSX.Element => {
            return props.children;
        },
        Popper: (props:any):JSX.Element => {
            return props.children({
                ref: null,
                style: '',
                placement: '',
                arrowProps: { ref: null, style: '' }
            });
        },
        Reference: (props:any):JSX.Element => {
            return props.children({
                ref: null,
            });
        },
    };
});
/* tslint:enable */

describe('Popover', () => {
    it('should render with defaults', () => {
        const component = shallowWithTheme(
            <Popover
                isOpen={true}
                renderContent={():string => 'Mock content'}
            />
        );

        const reference = component.find(Reference);
        const popper = component.find(Popper);

        expect(popper.prop('placement')).toEqual('bottom');
        expect(popper.prop('positionFixed')).toEqual(false);
        expect(toJson(popper.dive())).toMatchSnapshot();
        expect(toJson(reference.dive())).toMatchSnapshot();
    });

    it('should render closed', () => {
        const component = shallowWithTheme(
            <Popover
                isOpen={false}
                renderContent={():string => 'Mock content'}
            />
        );

        const transition = component.find(TransitionAnimation);

        expect(transition.prop('show')).toEqual(false);
    });

    it('should render with a fixed postition', () => {
        const component = shallowWithTheme(
            <Popover
                isOpen={true}
                placement="left"
                fixed={true}
                renderContent={():string => 'Mock content'}
            />
        );

        const popper = component.find(Popper);

        expect(popper.prop('positionFixed')).toEqual(true);
    });
});

describe('PopoverBackground', () => {
    it('should render with defaults', () => {
        const component = shallowWithTheme(
            <PopoverBackground />
        );

        expect(toJson(component)).toMatchSnapshot();
    });
});

describe('PopoverArrow', () => {
    it('should render at the bottom with shadow', () => {
        const component = shallowWithTheme(
            <PopoverArrow placement="bottom" shadow />
        );

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render at the top', () => {
        const component = shallowWithTheme(
            <PopoverArrow placement="top" />
        );

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render on the left', () => {
        const component = shallowWithTheme(
            <PopoverArrow placement="left" />
        );

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render on the right', () => {
        const component = shallowWithTheme(
            <PopoverArrow placement="right" />
        );

        expect(toJson(component)).toMatchSnapshot();
    });
});
