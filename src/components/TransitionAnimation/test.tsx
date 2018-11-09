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
import StyledAnimation from './style';

describe('TransitionAnimation', () => {
    it('should use the fade animation', () => {
        const componentIn = mount(
            <TransitionAnimation show animation={'fade'}>
                <div>child</div>
            </TransitionAnimation>,
        );

        /* tslint:disable */
        (expect(componentIn.find(StyledAnimation)) as any).toHaveStyleRule('animation', 'iOVxKt .3s both');
        /* tslint:enable */
    });

    it('should use the slide up animation', () => {
        const componentIn = mount(
            <TransitionAnimation show animation="slideUp">
                <div>child</div>
            </TransitionAnimation>,
        );

        /* tslint:disable */
        (expect(componentIn.find(StyledAnimation)) as any).toHaveStyleRule('animation', 'BwXBh .3s both');
        /* tslint:enable */
    });

    it('should use the slide down animation', () => {
        const componentIn = shallow(
            <TransitionAnimation show animation="slideDown">
                <div>child</div>
            </TransitionAnimation>,
        );

        /* tslint:disable */
        (expect(componentIn.dive()) as any).toHaveStyleRule('animation', 'bNLAFK .3s both');
        /* tslint:enable */
    });

    it('should use the slide left animation', () => {
        const componentIn = shallow(
            <TransitionAnimation show animation="slideLeft">
                <div>child</div>
            </TransitionAnimation>,
        );

        /* tslint:disable */
        (expect(componentIn.dive()) as any).toHaveStyleRule('animation', 'boXKTL .3s both');
        /* tslint:enable */
    });

    it('should use the slide right animation', () => {
        const componentIn = shallow(
            <TransitionAnimation show animation="slideRight">
                <div>child</div>
            </TransitionAnimation>,
        );

        /* tslint:disable */
        (expect(componentIn.dive()) as any).toHaveStyleRule('animation', 'fdjYoj .3s both');
        /* tslint:enable */
    });

    it('should stay mounted', () => {
        const component = mount(
            <TransitionAnimation show={false} animation="zoom" stayMounted>
                <div>child</div>
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
