import { shallow } from 'enzyme';
import React from 'react';
import TransitionAnimation from '.';
import fade from './animations/fade';
import zoom from './animations/zoom';

describe('TransitionAnimation', () => {
    it('should use the fade animation', () => {
        const componentIn = shallow(
            <TransitionAnimation key={0} show animation={'fade'}>
                <div>children</div>
            </TransitionAnimation>
        );

        /* tslint:disable */
        (expect(componentIn.dive()) as any).toHaveStyleRule('animation', 'fadeIn .3s');
        /* tslint:enable */
    });
});

describe('TransitionAnimation/animations', () => {
    it('should zoom in/out', () => {
        expect(zoom('entering')).toMatchSnapshot();
        expect(zoom('exiting')).toMatchSnapshot();
    });

    it('should fade in/out', () => {
        expect(fade('entering')).toMatchSnapshot();
        expect(fade('exiting')).toMatchSnapshot();
    });
});
