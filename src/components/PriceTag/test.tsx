import toJson from 'enzyme-to-json';
import React from 'react';
import PriceTag from '.';
import { mountWithTheme, shallowWithTheme } from '../../utility/styled/testing';
import { mosTheme } from '../../themes/MosTheme';
import StyledPriceTag from './style';

describe('PriceTag', () => {
    it('should render with a hidden currency', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value="10.20" hideCurrency />);

        expect(component.find(PriceTag).text()).not.toContain('€');
    });

    it('should render a base price', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value="10.20" />);

        expect(component.find(PriceTag).text()).toEqual('€ 10,20');
    });

    it('should position currency correctly ', () => {
        const component = mountWithTheme(<PriceTag locale="de-DE" currency="EUR" value="10.20" />);

        expect(component.find(PriceTag).text()).toEqual('10,20 €');
    });

    it('should show fraction correctly ', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="JPY" value="10.20" />);

        expect(component.find(PriceTag).text()).toEqual('JP¥ 10');
    });

    it('should render a free label', () => {
        const component = mountWithTheme(<PriceTag locale="de-DE" freeLabel="free stuff" currency="EUR" value="0" />);

        expect(component.find(PriceTag).text()).toContain('free stuff');
    });

    it('should not break when an incorrect price is provided', () => {
        const fn = (): void => {
            mountWithTheme(<PriceTag locale="de-DE" currency="EUR" value="🐛" />);
        };

        expect(fn).not.toThrow();
    });

    it('should render an action price', () => {
        const priceTag = shallowWithTheme(<PriceTag locale="nl-NL" currency="EUR" value="10,20" strikethrough />);

        expect(priceTag.find(StyledPriceTag)).toHaveStyleRule('background', mosTheme.PriceTag.strikethroughColor, {
            modifier: '::after',
        });
    });

    it('should render with a superscript franction', () => {
        const priceTag = shallowWithTheme(<PriceTag locale="nl-NL" currency="EUR" value="10,20" superScriptFraction />);

        expect(priceTag.find(StyledPriceTag)).toHaveStyleRule('font-size', '.7em', { modifier: 'sup' });
    });

    it('should render with a dashed fraction', () => {
        const component = mountWithTheme(
            <PriceTag locale="nl-NL" currency="EUR" value="10.00" fractionFormat="dash" />,
        ).find(PriceTag);

        expect(component.find(PriceTag).text()).toContain('-');
    });

    it('should render with a hidden fraction on a round value', () => {
        const component = mountWithTheme(
            <PriceTag locale="nl-NL" currency="EUR" value="10.00" fractionFormat="none" />,
        ).find(PriceTag);

        expect(component.find(PriceTag).text()).toEqual('€ 10');
    });

    it('should render with showDash and superscript on a round value', () => {
        const component = mountWithTheme(
            <PriceTag locale="nl-NL" currency="EUR" value="0,00" fractionFormat="dash" superScriptFraction />,
        ).find(PriceTag);

        expect(component.find(PriceTag).text()).toContain('0,-');
    });

    it('should render a label when the price is 0', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value="0" freeLabel="free" />).find(
            PriceTag,
        );

        expect(component.find(PriceTag).text()).toContain('free');
    });
});
