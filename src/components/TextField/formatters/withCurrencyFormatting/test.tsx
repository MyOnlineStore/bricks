import React, { FC } from 'react';
import withCurrencyFormatting from './';
import TextField from '../..';
import { mountWithTheme } from '../../../../utility/_styled/testing';
import MosTheme from '../../../../themes/MosTheme';
import { mount } from 'enzyme';

describe('withCurrencyFormatting', () => {
    it('should format currency input', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const usdUS = mountWithTheme(
            <CurrencyField name="" value={19.12} locale="en-US" currency="USD" onChange={changeMock} />,
        );

        const eurNL = mountWithTheme(
            <CurrencyField name="" value={19.12} locale="nl-NL" currency="EUR" onChange={changeMock} />,
        );

        const eurDE = mountWithTheme(
            <CurrencyField name="" value={19.12} locale="de-DE" currency="EUR" onChange={changeMock} />,
        );

        expect(usdUS.find('input').prop('value')).toEqual('19.12');
        expect(usdUS.find(TextField).prop('prefix')).toEqual('$');

        expect(eurNL.find('input').prop('value')).toEqual('19,12');
        expect(eurNL.find(TextField).prop('prefix')).toEqual('€');

        expect(eurDE.find('input').prop('value')).toEqual('19,12');
        expect(eurDE.find(TextField).prop('suffix')).toEqual('€');
    });

    it('should handle a change', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const component = mountWithTheme(
            <CurrencyField name="" value={19.12} locale="en-US" currency="USD" onChange={changeMock} />,
        );

        expect(component.find('input').prop('value')).toEqual('19.12');
        expect(component.find(TextField).prop('prefix')).toEqual('$');

        component.find('input').simulate('change', {
            target: {
                value: '20.08',
            },
        });

        expect(component.find('input').prop('value')).toEqual('20.08');
        expect(component.find(TextField).prop('prefix')).toEqual('$');
    });

    it('should format on blur', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const component = mountWithTheme(
            <CurrencyField name="" value={19.12} locale="en-US" currency="USD" onChange={changeMock} />,
        );

        expect(component.find('input').prop('value')).toEqual('19.12');
        expect(component.find(TextField).prop('prefix')).toEqual('$');

        component.find('input').simulate('change', {
            target: {
                value: '19000000.121111111',
            },
        });

        component.find('input').simulate('blur');

        expect(component.find('input').prop('value')).toEqual('19,000,000.12');
        expect(component.find(TextField).prop('prefix')).toEqual('$');
        expect(changeMock).toHaveBeenCalledWith(19000000.12);
    });

    it('should handle empty value on blur', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const component = mountWithTheme(
            <CurrencyField name="" value={19.12} locale="en-US" currency="USD" onChange={changeMock} />,
        );

        expect(component.find('input').prop('value')).toEqual('19.12');
        expect(component.find(TextField).prop('prefix')).toEqual('$');

        component.find('input').simulate('change', {
            target: {
                value: '',
            },
        });

        component.find('input').simulate('blur');

        expect(component.find('input').prop('value')).toEqual('0.00');
    });

    it('should handle empty value on blur', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const component = mountWithTheme(
            <CurrencyField name="" value={19.12} locale="en-US" currency="USD" onChange={changeMock} />,
        );

        expect(component.find('input').prop('value')).toEqual('19.12');
        expect(component.find(TextField).prop('prefix')).toEqual('$');

        component.find('input').simulate('focus');

        component.find('input').simulate('change', {
            target: { value: '' },
        });

        component.find('input').simulate('blur');

        expect(component.find('input').prop('value')).toEqual('0.00');
    });

    it('should not break formatting on a double blur', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const component = mountWithTheme(
            <CurrencyField name="" value={19.12} locale="nl-NL" currency="EUR" onChange={changeMock} />,
        );

        component.find('input').simulate('change', {
            target: {
                value: '19000000,121111111',
            },
        });

        component.find('input').simulate('blur');

        component.update();

        component.find('input').simulate('blur');

        expect(component.find('input').prop('value')).toEqual('19.000.000,12');
        expect(component.find(TextField).prop('prefix')).toEqual('€');
        expect(changeMock).toHaveBeenCalledWith(19000000.12);
    });

    it('should no-op on unparseable input', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const component = mountWithTheme(
            <CurrencyField name="" value={19.12} locale="en-US" currency="USD" onChange={changeMock} />,
        );

        component.find('input').simulate('change', {
            target: {
                value: 'aaaaaaa',
            },
        });

        expect(changeMock).toHaveBeenCalledWith(19.12);
    });

    it('should handle a changed locale and currency', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const Root: FC<{ locale: string; currency: string }> = props => (
            <MosTheme>
                <CurrencyField
                    name=""
                    value={19.12}
                    locale={props.locale}
                    currency={props.currency}
                    onChange={changeMock}
                />
            </MosTheme>
        );

        const component = mount(<Root locale="en-GB" currency="USD" />);

        component.setProps({
            locale: 'nl-NL',
            currency: 'EUR',
        });

        component.find('input').simulate('blur');

        expect(component.find('input').prop('value')).toEqual('19,12');
        expect(component.find(TextField).prop('prefix')).toEqual('€');
    });

    it('should default to default formatting with a missing formatToParts', () => {
        /* tslint:disable */
        (global as any).Intl = {
            NumberFormat: (): void => undefined,
        };
        /* tslint:disable */

        const fn = () => {
            const changeMock = jest.fn();
            const CurrencyField = withCurrencyFormatting(TextField);

            const component = mountWithTheme(
                <CurrencyField name="" value={19.12} locale="nl-NL" currency="USD" onChange={changeMock} />,
            );

            component.find('input').simulate('blur');

            expect(component.find('input').prop('value')).toEqual('19.12');
        };

        expect(fn).not.toThrow();
    });

    it('should not allow negative input when disableNegative prop is true', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const component = mountWithTheme(
            <CurrencyField
                disableNegative={true}
                name=""
                value={19.12}
                locale="nl-NL"
                currency="EUR"
                onChange={changeMock}
            />,
        );

        component.find('input').simulate('change', {
            target: {
                value: '-19.12',
            },
        });

        expect(component.find('input').prop('value')).toEqual('19.12');
    });

    it('should allow negative input when disableNegative prop is false', () => {
        const changeMock = jest.fn();
        const CurrencyField = withCurrencyFormatting(TextField);

        const component = mountWithTheme(
            <CurrencyField
                disableNegative={false}
                name=""
                value={19.12}
                locale="nl-NL"
                currency="EUR"
                onChange={changeMock}
            />,
        );

        component.find('input').simulate('change', {
            target: {
                value: '-19.12',
            },
        });

        expect(component.find('input').prop('value')).toEqual('-19.12');
    });

    it('should use the value in minor units, when the "minor" prop is set', () => {
        const CurrencyField = withCurrencyFormatting(TextField);
        // Work-around because the Intl polyfil doesn't support resolvedOptions()
        CurrencyField.prototype.setFormatter = () => {
            CurrencyField.prototype.formatter = {
                resolvedOptions: () => ({
                    maximumFractionDigits: 2,
                }),
            };
        };

        const changeMock = jest.fn();

        const component = mountWithTheme(
            <CurrencyField name="" value={2554} locale="nl-NL" currency="EUR" onChange={changeMock} minor />,
        );

        expect(component.find('input').prop('value')).toEqual('25.54');

        component.find('input').simulate('change', {
            target: {
                value: '1908',
            },
        });

        expect(component.find('input').prop('value')).toEqual('1908');
        expect(changeMock).toHaveBeenCalledWith(190800);
    });
});
