import React from 'react';
import PriceTag from '.';
import { mountWithTheme, mountWithTheme } from '../../utility/_styled/testing';
import { mosTheme } from '../../themes/MosTheme';
import 'jest-styled-components';

describe('PriceTag', () => {
    it('should render with a hidden currency', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value={10.2} hideCurrency />);

        expect(component.text()).not.toContain('€');
    });

    it('should render a base price', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value={10.2} />);

        expect(component.text()).toEqual('€ 10,20');
    });

    it('should position currency correctly ', () => {
        const component = mountWithTheme(<PriceTag locale="de-DE" currency="EUR" value={10.2} />);

        expect(component.text()).toEqual('10,20 €');
    });

    it('should show fraction correctly ', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="JPY" value={10.2} />);

        expect(component.text()).toEqual('JP¥ 10');
    });

    it('should render a free label', () => {
        const component = mountWithTheme(<PriceTag locale="de-DE" freeLabel="free stuff" currency="EUR" value={0} />);

        expect(component.text()).toContain('free stuff');
    });

    it('should render an action price', () => {
        const priceTag = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value={10.2} strikethrough />);

        expect(priceTag).toHaveStyleRule('background', mosTheme.PriceTag.strikethroughColor, {
            modifier: '::after',
        });
    });

    it('should render with a superscript franction', () => {
        const priceTag = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value={10.2} superScriptFraction />);

        expect(priceTag).toHaveStyleRule('font-size', '.7em', { modifier: 'sup' });
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
});
