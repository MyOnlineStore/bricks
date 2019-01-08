import { mount } from 'enzyme';
import React from 'react';
import Button from '.';
import MosTheme from '../../themes/MosTheme';
import { mountWithTheme } from '../../utility/styled/testing';
import 'jest-styled-components';

describe('Button', () => {
    it('should render a link with children', () => {
        const component = mountWithTheme(
            <Button href="#" title="Foo Bar?" variant="warning">
                Foo Bar
            </Button>,
        );
        expect(component.find('a').text()).toEqual('Foo Bar');
    });

    it('should not call the passed action on click when loading', () => {
        const clickMock = jest.fn();
        const linkComponent = mountWithTheme(
            <Button href="#" icon={'checkmark'} loading title="Foo Bar?" action={clickMock} variant="warning">
                Foo Bar
            </Button>,
        );
        const buttonComponent = mountWithTheme(
            <Button loading icon={'checkmark'} title="Foo Bar?" action={clickMock} variant="warning">
                Foo Bar
            </Button>,
        );
        linkComponent.simulate('click');
        buttonComponent.simulate('click');
        expect(clickMock).not.toHaveBeenCalled();
    });

    it('should render a flat component', () => {
        const component = mountWithTheme(
            <Button icon={'checkmark'} iconAlign="right" href="#" title="Foo Bar?" flat variant="primary">
                Foo Bar
            </Button>,
        );

        expect(component).toHaveStyleRule('background-color', 'transparent');
    });

    it('should call the passed action on click', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(
            <Button title="button title" color="#f00" variant="primary" action={clickMock} />,
        );

        component.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should render an a tag when a href is provided', () => {
        const component = mount(
            <MosTheme>
                <Button
                    icon={'checkmark'}
                    title="button title"
                    variant="primary"
                    action={undefined}
                    href="http://foo.bar"
                />
            </MosTheme>,
        );

        expect(component.find('a').length).toBe(1);
    });

    it('should no-op on click without an action', () => {
        const fn = (): void => {
            const component = mount(
                <MosTheme>
                    <Button icon={'checkmark'} title="button title" variant="primary" action={undefined} />
                </MosTheme>,
            );

            component.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should have less side padding when compact is true', () => {
        const component = mount(
            <MosTheme>
                <Button title="button title" variant="primary" compact />
            </MosTheme>,
        );

        expect(component.find(Button)).toHaveStyleRule('padding', '11px 12px');
    });
});
