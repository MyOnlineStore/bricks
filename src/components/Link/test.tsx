import React from 'react';
import Link from '.';
import { mountWithTheme } from '../../utility/_styled/testing';

describe('Link', () => {
    it('should render a link with children', () => {
        const component = mountWithTheme(
            <Link title="Foo Bar" href="#">
                Foo Bar
            </Link>,
        );

        expect(component.find('a').text()).toEqual('Foo Bar');
    });

    it('should call the passed onClick on click', () => {
        const clickMock = jest.fn();
        const component = mountWithTheme(<Link title="title" onClick={clickMock} />);

        component.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should no-op on click without an onClick', () => {
        const fn = (): void => {
            const component = mountWithTheme(<Link title="button title" onClick={undefined} />);

            component.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should be testable with a test-id', () => {
        const clickMock = jest.fn();
        const component = mountWithTheme(<Link title="title" onClick={clickMock} data-testid="foo" />);

        expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
    });
});
