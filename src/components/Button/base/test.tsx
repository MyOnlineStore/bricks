import { mount } from 'enzyme';
import React from 'react';
import Button from '.';
import MosTheme from '../../../themes/MosTheme';
import { mountWithTheme } from '../../../utility/styled/testing';
import 'jest-styled-components';

describe('Button', () => {
    it('should render a link with children', () => {
        const component = mountWithTheme(
            <Button href="#" title="Foo Bar?">
                Foo Bar
            </Button>,
        );
        expect(component.find('a').text()).toEqual('Foo Bar');
    });

    it('should render a disabled state', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(<Button disabled title="disabled" onClick={clickMock} />);

        component.simulate('click');
        expect(clickMock).not.toHaveBeenCalled();
    });

    it('should not call the passed action on click when loading', () => {
        const clickMock = jest.fn();
        const component = mountWithTheme(<Button loading title="Foo" onClick={clickMock} />);

        component.simulate('click');

        expect(clickMock).not.toHaveBeenCalled();
    });

    it('should call the passed action on click', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(<Button title="button2 title" onClick={clickMock} />);

        component.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should render an <a> tag when a href is provided', () => {
        const component = mount(
            <MosTheme>
                <Button title="button2 title" onClick={undefined} href="http://foo.bar" />
            </MosTheme>,
        );

        expect(component.find('a').length).toBe(1);
    });

    it('should no-op on click without an onClick', () => {
        const fn = (): void => {
            const component = mount(
                <MosTheme>
                    <Button title="button2 title" onClick={undefined} />
                </MosTheme>,
            );

            component.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should be testable with a test-id', () => {
        const component = mount(
            <MosTheme>
                <Button title="button title" data-testid="foo" />
            </MosTheme>,
        );

        expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
    });

    it('should pass the event to the onClick callback', () => {
        // tslint:disable-next-line:no-any
        let clickEvent: any = {};

        const clickMock = jest.fn(event => {
            clickEvent = event;
        });

        const component = mount(
            <MosTheme>
                <Button title="button title" onClick={clickMock} />
            </MosTheme>,
        );

        component.find(Button).simulate('click');

        expect(clickMock).toHaveBeenCalled();
        expect(clickEvent.target).toBeDefined();
    });
});