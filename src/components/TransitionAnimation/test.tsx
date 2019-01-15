import { mount, shallow } from 'enzyme';
import React from 'react';
import { Transition } from 'react-transition-group';
import TransitionAnimation from '.';
import fade from './animations/fade';
import zoom from './animations/zoom';
import slideUp from './animations/slideUp';
import slideDown from './animations/slideDown';
import slideLeft from './animations/slideLeft';
import slideRight from './animations/slideRight';
import 'jest-styled-components';

describe('TransitionAnimation', () => {
    it('should use the fade animation', () => {
        const componentIn = mount(
            <TransitionAnimation show animation={'fade'}>
                <div>children</div>
            </TransitionAnimation>,
        );

        expect(componentIn).toHaveStyleRule('animation', 'fadeIn .3s both');
    });

    it('should use the slide up animation', () => {
        const componentIn = mount(
            <TransitionAnimation show animation="slideUp">
                <div>children</div>
            </TransitionAnimation>,
        );

        expect(componentIn).toHaveStyleRule('animation', 'slideIn .3s both');
    });

    it('should use the slide down animation', () => {
        const componentIn = mount(
            <TransitionAnimation show animation="slideDown">
                <div>children</div>
            </TransitionAnimation>,
        );

        expect(componentIn).toHaveStyleRule('animation', 'slideIn .3s both');
    });

    it('should use the slide left animation', () => {
        const componentIn = mount(
            <TransitionAnimation show animation="slideLeft">
                <div>children</div>
            </TransitionAnimation>,
        );

        expect(componentIn).toHaveStyleRule('animation', 'slideIn .3s both');
    });

    it('should use the slide right animation', () => {
        const componentIn = mount(
            <TransitionAnimation show animation="slideRight">
                <div>children</div>
            </TransitionAnimation>,
        );

        expect(componentIn).toHaveStyleRule('animation', 'slideIn .3s both');
    });

    it('should stay mounted', () => {
        const component = mount(
            <TransitionAnimation show={false} animation="zoom" stayMounted>
                <div>children</div>
            </TransitionAnimation>,
        );

        expect(component.find(Transition).prop('mountOnEnter')).toBe(false);
        expect(component.find(Transition).prop('unmountOnExit')).toBe(false);
    });
});

describe('TransitionAnimation/animations', () => {
    it('should zoom in/out', () => {
        expect(zoom('entering')).toMatchSnapshot();
        expect(zoom('exiting')).toMatchSnapshot();
        expect(zoom('exited')).toMatchSnapshot();
    });

    it('should fade in/out', () => {
        expect(fade('entering')).toMatchSnapshot();
        expect(fade('exiting')).toMatchSnapshot();
        expect(fade('exited')).toMatchSnapshot();
    });

    it('should slide up', () => {
        expect(slideUp('entering')).toMatchSnapshot();
        expect(slideUp('exiting')).toMatchSnapshot();
        expect(slideUp('exited')).toMatchSnapshot();
    });

    it('should slide down', () => {
        expect(slideDown('entering')).toMatchSnapshot();
        expect(slideDown('exiting')).toMatchSnapshot();
        expect(slideDown('exited')).toMatchSnapshot();
    });

    it('should slide left', () => {
        expect(slideLeft('entering')).toMatchSnapshot();
        expect(slideLeft('exiting')).toMatchSnapshot();
        expect(slideLeft('exited')).toMatchSnapshot();
    });

    it('should slide right', () => {
        expect(slideRight('entering')).toMatchSnapshot();
        expect(slideRight('exiting')).toMatchSnapshot();
        expect(slideRight('exited')).toMatchSnapshot();
    });
});
