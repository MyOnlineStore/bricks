import React from 'react';
import ButtonGroup from '.';
import Button from '../Button';
import { mountWithTheme } from '../../utility/styled/testing';

describe('ButtonGroup', () => {
    it('renders the correct amount of Buttons', () => {
        const component = mountWithTheme(
            <ButtonGroup>
                <Button title="foo" variant="primary" />
                <Button title="bar" variant="secondary" />>
            </ButtonGroup>,
        );

        expect(component.find(Button).length).toBe(2);
    });

    it('renders the correct amount of Buttons when stacked', () => {
        const component = mountWithTheme(
            <ButtonGroup direction="stacked">
                <Button title="foo" variant="primary" />
                <Button title="bar" variant="secondary" />
            </ButtonGroup>,
        );

        expect(component.find(Button).length).toBe(2);
    });

    it('should be testable with a testid', () => {
        const component = mountWithTheme(<ButtonGroup data-testid="buttongroup" />);

        expect(component.find('[data-testid="buttongroup"]').hostNodes()).toHaveLength(1);
    });

    const buttonSet = ['primary', 'secondary'];

    describe.each<['stacked' | 'rtl' | 'ltr', Array<string>]>([
        ['stacked', buttonSet],
        ['rtl', [...buttonSet].reverse()],
        ['ltr', buttonSet],
    ])('direction="%s"', (direction, buttons) => {
        it(`should render ["primary", "secondary"] in order:\n
        "${
            direction === 'stacked'
                ? buttons.join('"\n            ↓\n        "')
                : buttons.join(`" ${direction === 'rtl' ? '←' : '→'} "`)
        }"
        `, () => {
            const component = mountWithTheme(
                <ButtonGroup direction={direction}>
                    <Button title="foo" variant="primary" />
                    <Button title="bar" variant="secondary" />
                </ButtonGroup>,
            );

            buttons.forEach((variant, index) => {
                expect(
                    component
                        .find(Button)
                        .at(index)
                        .prop('variant'),
                ).toEqual(variant);
            });
        });
    });
});
