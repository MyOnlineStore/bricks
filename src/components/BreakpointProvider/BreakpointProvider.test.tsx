import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import BreakpointProvider, { BreakpointType } from './BreakpointProvider.template';

/* tslint:disable */
(global as any).addEventListener = jest.fn();
(global as any).removeEventListener = jest.fn();
/* tslint:enable */

const breakpoints:BreakpointType = {
    small: 0,
    medium: 300,
    large: 600,
};

describe('BreakpointProvider component', () => {
    it('executes the render prop with a default breakpoint', () => {
        const renderMock = jest.fn();

         mount(
            <BreakpointProvider breakpoints={breakpoints}>
                {renderMock}
            </BreakpointProvider>
        );

        expect(renderMock).toBeCalledWith('small');
    });

    it('executes the render prop with a large breakpoint', () => {
        const renderMock = jest.fn();

        renderer.create(
            <BreakpointProvider breakpoints={breakpoints}>
                {renderMock}
            </BreakpointProvider>,
            {
                createNodeMock: ():Object => ({
                    offsetWidth: 900,
                }
            )},
        ).toJSON();

        expect(renderMock).toBeCalledWith('large');
    });

    it('falls back on the smallest breakpoint when no 0 value is given', () => {
        const renderMock = jest.fn();

        const faultyBreakpoints:BreakpointType = {
            small: 200,
            medium: 300,
            large: 600,
        };

        mount(
            <BreakpointProvider breakpoints={faultyBreakpoints}>
                {renderMock}
            </BreakpointProvider>
        );

        expect(renderMock).toBeCalledWith('small');
    });

    it('adds and removes resize eventListeners to the window', () => {
        const renderMock = jest.fn();

        const component = mount(
            <BreakpointProvider breakpoints={breakpoints}>
                {renderMock}
            </BreakpointProvider>
        );

        component.unmount();

        /* tslint:disable */
        expect((global as any).addEventListener).toBeCalled();
        expect((global as any).removeEventListener).toBeCalled();
        /* tslint:enable */
    });
});
