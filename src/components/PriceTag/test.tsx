import toJson from 'enzyme-to-json';
import React from 'react';
import PriceTag from '.';
import { mountWithTheme } from '../../utility/styled/testing';

describe('PriceTag', () => {
    it('should render with a hidden currency', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value="10,20" hideCurrency />).find(
            PriceTag,
        );

        expect(component.text()).not.toContain('€');
    });

    it('should render a base price', () => {
        const component = mountWithTheme(<PriceTag locale="de-DE" currency="EUR" value="10,20" />);

        component.setProps({ value: '10,45' });
        component.update();

        expect(component.text()).toContain('10,45');
    });

    it('should not break when an incorrect price is provided', () => {
        const component = mountWithTheme(<PriceTag locale="de-DE" currency="EUR" value="🐛" />).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render an action price', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value="10,20" strikethrough />).find(
            PriceTag,
        );

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with a hidden currency and superscript franction', () => {
        const component = mountWithTheme(
            <PriceTag locale="nl-NL" currency="EUR" value="10,20" superScriptFraction hideCurrency />,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with a dashed fraction', () => {
        const component = mountWithTheme(
            <PriceTag locale="nl-NL" currency="EUR" value="10.00" fractionFormat="dash" />,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with a hidden fraction on a round value', () => {
        const component = mountWithTheme(
            <PriceTag locale="nl-NL" currency="EUR" value="10.00" fractionFormat="none" />,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with a fraction in superscript', () => {
        const component = mountWithTheme(
            <PriceTag locale="nl-NL" currency="EUR" value="10,20" superScriptFraction />,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render with showDash and superscript on a round value', () => {
        const component = mountWithTheme(
            <PriceTag locale="nl-NL" currency="EUR" value="0,00" fractionFormat="dash" superScriptFraction />,
        ).find(PriceTag);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render a label with the price is 0', () => {
        const component = mountWithTheme(<PriceTag locale="nl-NL" currency="EUR" value="0" freeLabel="free" />).find(
            PriceTag,
        );

        expect(toJson(component)).toMatchSnapshot();
    });
});
