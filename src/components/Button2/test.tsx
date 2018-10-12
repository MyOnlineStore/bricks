import { mount } from 'enzyme';
import React from 'react';
import Button2 from '.';
import MosTheme from '../../themes/MosTheme';
import { mountWithTheme } from '../../utility/styled/testing';

describe('Button2', () => {
    it('should render a link with children', () => {
        const component = mountWithTheme(
            <Button2 href="#" title="Foo Bar?" variant="warning">
                Foo Bar
            </Button2>,
        );
        expect(component.find('a').text()).toEqual('Foo Bar');
    });

    it('should render a flat component', () => {
        const component = mountWithTheme(
            <Button2 icon={'checkmark'} iconAlign="right" href="#" title="Foo Bar?" flat variant="primary">
                Foo Bar
            </Button2>,
        );

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('background-color', 'transparent');
        /* tslint:enable */
    });

    it('should call the passed action on click', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(<Button2 title="button2 title" variant="primary" action={clickMock} />);

        component.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should render an a tag when a href is provided', () => {
        const component = mount(
            <MosTheme>
                <Button2
                    icon={'checkmark'}
                    title="button2 title"
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
                    <Button2 icon={'checkmark'} title="button2 title" variant="primary" action={undefined} />
                </MosTheme>,
            );

            component.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should have less side padding when compact is true', () => {
        const component = mount(
            <MosTheme>
                <Button2 title="button2 title" variant="primary" compact />
            </MosTheme>,
        );

        /* tslint:disable */
        (expect(component.find(Button2)) as any).toHaveStyleRule('padding', '11px 12px');
        /* tslint:enable */
    });
});
