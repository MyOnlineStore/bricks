import React from 'react';
import Link from '.';
import { mountWithTheme } from '../../utility/styled/testing';

describe('Link', () => {
    it('should render a link with children', () => {
        const component = mountWithTheme(
            <Link title="Foo Bar" href="#">
                Foo Bar
            </Link>,
        );

        expect(component.find('a').text()).toEqual('Foo Bar');
    });

    it('should call the passed action on click', () => {
        const clickMock = jest.fn();
        const component = mountWithTheme(<Link title="title" action={clickMock} />);

        component.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should no-op on click without an action', () => {
        const fn = (): void => {
            const component = mountWithTheme(<Link title="button title" action={undefined} />);

            component.simulate('click');
        };

        expect(fn).not.toThrow();
    });
});
