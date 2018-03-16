import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button component', () => {
    it('should call the passed action on click', () => {
        const clickMock = jest.fn();
        const component = shallow(
            <Button
                title=""
                type="primary"
                action={clickMock}
            >
                Click me
            </Button>
        );

        component.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should no-op on click without an action', () => {
        const fn = ():void => {
                const component = shallow(
                    <Button
                    title=""
                    type="primary"
                    action={undefined}
                    >
                    Click me
                </Button>
            );

            component.simulate('click');
        };

        expect(fn).not.toThrow();
    });
});
