import { shallow } from 'enzyme';
import React from 'react';
import DomBehavior from './DomBehavior';

describe('Utility that provides dom behavior as a render prop', () => {
    it('handles idle state', () => {
        let behaviorState;

        const component = shallow(
            <DomBehavior>
                {(behavior):JSX.Element => {
                    behaviorState = behavior;

                    return <div />;
                }}
            </DomBehavior>,
        );

        expect(behaviorState).toEqual({
            clicked: false,
            clicking: false,
            focussing: false,
            hovering: false,
            keypress: '',
        });
    });

    it('handles a hovering state', () => {
        let behaviorState;

        const component = shallow(
            <DomBehavior>
                {(behavior):JSX.Element => {
                    behaviorState = behavior;

                    return <div />;
                }}
            </DomBehavior>,
        );

        component.simulate('mouseEnter');

        expect(behaviorState).toEqual({
            clicked: false,
            clicking: false,
            focussing: false,
            hovering: true,
            keypress: '',
        });

        component.simulate('mouseLeave');

        expect(behaviorState).toEqual({
            clicked: false,
            clicking: false,
            focussing: false,
            hovering: false,
            keypress: '',
        });
    });

    it('handles a clicking state', () => {
        let behaviorState;

        const component = shallow(
            <DomBehavior>
                {(behavior):JSX.Element => {
                    behaviorState = behavior;

                    return <div />;
                }}
            </DomBehavior>,
        );

        component.simulate('mouseDownCapture');

        expect(behaviorState).toEqual({
            clicked: true,
            clicking: true,
            focussing: false,
            hovering: false,
            keypress: '',
        });

        component.simulate('mouseUpCapture');

        expect(behaviorState).toEqual({
            clicked: true,
            clicking: false,
            focussing: false,
            hovering: false,
            keypress: '',
        });
    });

    it('handles a clicked state', () => {
        let behaviorState;

        const component = shallow(
            <DomBehavior>
                {(behavior):JSX.Element => {
                    behaviorState = behavior;

                    return <div />;
                }}
            </DomBehavior>,
        );

        component.simulate('mouseDownCapture');
        component.simulate('mouseUpCapture');

        expect(behaviorState).toEqual({
            clicked: true,
            clicking: false,
            focussing: false,
            hovering: false,
            keypress: '',
        });

        component.simulate('mouseEnter');

        expect(behaviorState).toEqual({
            clicked: false,
            clicking: false,
            focussing: false,
            hovering: true,
            keypress: '',
        });
    });

    it('handles a focus state', () => {
        let behaviorState;

        const component = shallow(
            <DomBehavior>
                {(behavior):JSX.Element => {
                    behaviorState = behavior;

                    return <div />;
                }}
            </DomBehavior>,
        );

        component.simulate('focusCapture');

        expect(behaviorState).toEqual({
            clicked: false,
            clicking: false,
            focussing: true,
            hovering: false,
            keypress: '',
        });

        component.simulate('blurCapture');

        expect(behaviorState).toEqual({
            clicked: false,
            clicking: false,
            focussing: false,
            hovering: false,
            keypress: '',
        });
    });

    it('handles a keypress', () => {
        let behaviorState;

        const component = shallow(
            <DomBehavior>
                {(behavior):JSX.Element => {
                    behaviorState = behavior;

                    return <div />;
                }}
            </DomBehavior>,
        );

        component.simulate('keyDownCapture', { key: 'Enter' });

        expect(behaviorState).toEqual({
            clicked: false,
            clicking: false,
            focussing: false,
            hovering: false,
            keypress: 'Enter',
        });

        component.simulate('keyUpCapture');

        expect(behaviorState).toEqual({
            clicked: false,
            clicking: false,
            focussing: false,
            hovering: false,
            keypress: '',
        });
    });
});
