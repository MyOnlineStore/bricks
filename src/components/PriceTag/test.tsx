import React from 'react';
import PriceTag from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import { mosTheme } from '../../themes/MosTheme';
import 'jest-styled-components';

const currencysymbols = {
    USD: '$',
    EUR: '€',
};

/**
 * Note: The spaces between the currency symbol and the number aren't actual spaces for some reason.
 * To add cases to the table, make sure to copy them from already existing cases.
 */

describe('PriceTag', () => {
    describe.each`
        locale     | currency | outcome
        ${'en-US'} | ${'USD'} | ${'$10.20'}
        ${'nl-NL'} | ${'EUR'} | ${'€ 10,20'}
        ${'de-DE'} | ${'EUR'} | ${'10,20 €'}
        ${'en_US'} | ${'USD'} | ${'$10.20'}
        ${'nl_NL'} | ${'EUR'} | ${'€ 10,20'}
        ${'de_DE'} | ${'EUR'} | ${'10,20 €'}
    `(
        '$locale + $currency',
        ({
            locale,
            currency,
            outcome,
        }: {
            locale: string;
            currency: keyof typeof currencysymbols;
            outcome: string;
        }) => {
            it(`should format into: ${outcome}`, () => {
                const component = mountWithTheme(<PriceTag locale={locale} currency={currency} value={10.2} />);

                expect(component.text()).toEqual(outcome);
            });

            it('should render with a hidden currency', () => {
                const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value={10.2} hideCurrency />);

                expect(component.text()).not.toContain(currencysymbols[currency]);
            });

            it('should render with a superscript fraction', () => {
                const priceTag = mountWithTheme(
                    <PriceTag locale={locale} currency={currency} value={10.2} superScriptFraction />,
                );

                expect(priceTag).toHaveStyleRule('font-size', '.7em', { modifier: 'sup' });
            });

            it('should render a free label', () => {
                const component = mountWithTheme(
                    <PriceTag locale={locale} freeLabel="free" currency={currency} value={0} />,
                );

                expect(component.text()).toContain('free');
            });

            it('should render an action price', () => {
                const priceTag = mountWithTheme(
                    <PriceTag locale={locale} currency={currency} value={10.2} strikethrough />,
                );

                expect(priceTag).toHaveStyleRule('background', mosTheme.PriceTag.strikethroughColor, {
                    modifier: '::after',
                });
            });
        },
    );

    it('should position currency correctly ', () => {
        const component = mountWithTheme(<PriceTag locale="de-DE" currency="EUR" value={10.2} />);

        expect(component.text()).toEqual('10,20 €');
    });

    it('should show fraction correctly ', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="JPY" value={10.2} />);

        expect(component.text()).toEqual('JP¥ 10');
    });

    it('should render with a dashed fraction', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value={10.0} fractionFormat="dash" />);

        expect(component.text()).toContain('-');
    });

    it('should render with a hidden fraction on a round value', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value={10.0} fractionFormat="none" />);

        expect(component.text()).toEqual('€ 10');
    });

    it('should render with showDash and superscript on a round value', () => {
        const component = mountWithTheme(
            <PriceTag locale="nl-NL" currency="EUR" value={0.0} fractionFormat="dash" superScriptFraction />,
        );

        expect(component.text()).toContain('0,-');
    });

    it('should render a label when the price is 0', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value={0} freeLabel="free" />).find(
            PriceTag,
        );

        expect(component.text()).toContain('free');
    });

    it('should handle minor values', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value={1020} minor />).find(PriceTag);

        expect(component.text()).toContain('€ 10,20');
    });
});
