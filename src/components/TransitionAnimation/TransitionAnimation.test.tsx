import { mount, shallow } from 'enzyme';
import React from 'react';
import { Transition } from 'react-transition-group';
import TransitionAnimation from '.';
import fade from './animations/fade';
import zoom from './animations/zoom';

describe('TransitionAnimation', () => {
    it('should use the fade animation', () => {
        const componentIn = shallow(
            <TransitionAnimation show animation={'fade'}>
                <div>children</div>
            </TransitionAnimation>
        );

        /* tslint:disable */
        (expect(componentIn.dive()) as any).toHaveStyleRule('animation', 'fadeIn .3s both');
        /* tslint:enable */
    });

    it('should stay mounted', () => {
        const component = mount(
            <TransitionAnimation
                show={false}
                animation="zoom"
                stayMounted
            >
                <div>children</div>
            </TransitionAnimation>
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
});
