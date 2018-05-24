import { mount } from 'enzyme';
import React from 'react';
import Button from '.';
import MosTheme from '../../themes/MosTheme';

describe('Button component', () => {
    it('should call the passed action on click', () => {
        const clickMock = jest.fn();

        const component = mount(
            <MosTheme>
                <Button
                    title="button title"
                    variant="primary"
                    action={clickMock}
                />
            </MosTheme>,
        );

        component.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should render an a tag when a href is provided', () => {
        const component = mount(
            <MosTheme>
                <Button
                    title="button title"
                    variant="primary"
                    action={undefined}
                    href="http://foo.bar"
                />
            </MosTheme>,
        );

        expect(component.find('a').length).toBe(1);
        expect(component.find('a').length).toBe(1);
    });

    it('should no-op on click without an action', () => {
        const fn = (): void => {
            const component = mount(
                <MosTheme>
                    <Button
                        title="button title"
                        variant="primary"
                        action={undefined}
                    />
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

        /* tslint:disable */
        (expect(component.find(Button)) as any).toHaveStyleRule(
            'padding',
            '11px 12px',
        );
        /* tslint:enable */
    });
});
