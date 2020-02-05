import React, { FunctionComponent, FC, useState } from 'react';
import CurrencyField from '.';
import TextField from '../..';
import { mountWithTheme } from '../../../../utility/styled/testing';
import MosTheme from '../../../../themes/MosTheme';
import { mount } from 'enzyme';

describe('CurrencyField', () => {
    describe.each`
        locale     | currency | prefix | value      | suffix
        ${'en-US'} | ${'USD'} | ${'$'} | ${'19.12'} | ${''}
        ${'nl-NL'} | ${'EUR'} | ${'€'} | ${'19,12'} | ${''}
        ${'de-DE'} | ${'EUR'} | ${''}  | ${'19,12'} | ${'€'}
        ${'en_US'} | ${'USD'} | ${'$'} | ${'19.12'} | ${''}
        ${'nl_NL'} | ${'EUR'} | ${'€'} | ${'19,12'} | ${''}
        ${'de_DE'} | ${'EUR'} | ${''}  | ${'19,12'} | ${'€'}
    `('$locale + $currency', ({ locale, currency, prefix, value, suffix }) => {
        it(`should format into: ${prefix}${value}${suffix}`, () => {
            const changeMock = jest.fn();

            const component = mountWithTheme(
                <CurrencyField name="" value={19.12} locale={locale} currency={currency} onChange={changeMock} />,
            );

            expect(component.find('input').prop('value')).toEqual(value);

            if (suffix !== '') {
                expect(component.find(TextField).prop('suffix')).toEqual(suffix);
            }

            if (prefix !== '') {
                expect(component.find(TextField).prop('prefix')).toEqual(prefix);
            }
        });
    });

    it('should handle a change', () => {
        const changeMock = jest.fn();

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

        const Root = () => {
            const [value, setValue] = useState(19.12);

            return (
                <CurrencyField
                    name=""
                    value={value}
                    locale="en-US"
                    currency="USD"
                    onChange={value => {
                        changeMock(value);
                        setValue(value);
                    }}
                />
            );
        };

        const component = mountWithTheme(<Root />);

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

    it('should not strip the fraction digits (.00) on focus', () => {
        const component = mountWithTheme(
            <CurrencyField name="" value={0} currency="EUR" locale="en-GB" onChange={jest.fn()} />,
        );

        expect(component.find('input').prop('value')).toEqual('0.00');

        component.find('input').simulate('focus');
        component.update();
        expect(component.find('input').prop('value')).toEqual('0.00');
    });

    it('should handle empty value on blur', () => {
        const changeMock = jest.fn();

        const Root = () => {
            const [value, setValue] = useState(19.12);

            return (
                <CurrencyField
                    name=""
                    value={value}
                    locale="en-US"
                    currency="USD"
                    onChange={value => {
                        changeMock(value);
                        setValue(value);
                    }}
                />
            );
        };

        const component = mountWithTheme(<Root />);

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

    it('should not break formatting on a double blur', () => {
        const changeMock = jest.fn();

        const Root = () => {
            const [value, setValue] = useState(19.12);

            return (
                <CurrencyField
                    name=""
                    value={value}
                    locale="nl-NL"
                    currency="EUR"
                    onChange={value => {
                        changeMock(value);
                        setValue(value);
                    }}
                />
            );
        };

        const component = mountWithTheme(<Root />);

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

        const Root = () => {
            const [value, setValue] = useState(19.12);

            return (
                <CurrencyField
                    name=""
                    value={value}
                    locale="en-US"
                    currency="USD"
                    onChange={value => {
                        changeMock(value);
                        setValue(value);
                    }}
                />
            );
        };

        const component = mountWithTheme(<Root />);

        component.find('input').simulate('change', {
            target: {
                value: 'aaaaaaa',
            },
        });

        expect(changeMock).toHaveBeenCalledWith(19.12);
    });

    it('should handle a changed locale and currency', () => {
        const changeMock = jest.fn();

        const Root: FunctionComponent<{ locale: string; currency: string }> = props => {
            const [value, setValue] = useState(19.12);

            return (
                <MosTheme>
                    <CurrencyField
                        name=""
                        value={value}
                        locale={props.locale}
                        currency={props.currency}
                        onChange={value => {
                            setValue(value);
                            changeMock(value);
                        }}
                    />
                </MosTheme>
            );
        };

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
        const mockFormatter = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'USD' });
        // @ts-ignore
        delete mockFormatter.formatToParts;
        //@ts-ignore
        global.console.error.mockImplementationOnce(() => {});

        const fn = () => {
            const changeMock = jest.fn();

            const Root: FC = () => {
                const [value, setValue] = useState(19.12);

                return (
                    <MosTheme>
                        <CurrencyField
                            name=""
                            value={value}
                            formatter={mockFormatter}
                            locale="nl-NL"
                            currency="USD"
                            onChange={value => {
                                setValue(value);
                                changeMock(value);
                            }}
                        />
                    </MosTheme>
                );
            };

            const component = mountWithTheme(<Root />);

            component.find('input').simulate('blur');

            expect(component.find('input').prop('value')).toEqual('19,12');
        };

        expect(fn).not.toThrow();
    });

    it('should not allow negative input when disableNegative prop is true', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <CurrencyField
                disableNegative={true}
                name=""
                value={19.12}
                locale="en-GB"
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

        const component = mountWithTheme(
            <CurrencyField
                disableNegative={false}
                name=""
                value={19.12}
                locale="en-GB"
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
        const locale = 'en-GB';
        const currency = 'EUR';

        const formatter = new Intl.NumberFormat(locale, {
            currency,
            style: 'currency',
        });
        // @ts-ignore
        formatter.resolvedOptions = () => ({
            maximumFractionDigits: 2,
        });

        const changeMock = jest.fn();

        const Root: FC = () => {
            const [value, setValue] = useState(2554);

            return (
                <CurrencyField
                    minor
                    name=""
                    value={value}
                    locale={locale}
                    currency={currency}
                    formatter={formatter}
                    onChange={value => {
                        setValue(value);
                        changeMock(value);
                    }}
                />
            );
        };

        const component = mountWithTheme(<Root />);

        expect(component.find('input').prop('value')).toEqual('25.54');

        component.find('input').simulate('change', {
            target: {
                value: '1908',
            },
        });

        expect(component.find('input').prop('value')).toEqual('1908');
        expect(changeMock).toHaveBeenCalledWith(190800);
    });

    it('should be testable with a test-id', () => {
        const component = mountWithTheme(
            <CurrencyField data-testid="foo" locale="nl-NL" currency="EUR" value={0} name="foo" onChange={jest.fn()} />,
        );

        expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
    });

    it('should apply changes when props change', () => {
        /**
         * setProps can only be called on a mounted root, because the TextField requires
         * a theme to be present, we wrap it and pass all props onto the actual TextField
         */
        const Wrapper: FC<{
            'data-testid': string;
            value: number;
            locale: string;
            currency: string;
            name: string;
            onChange(value: number): void;
        }> = props => {
            return (
                <MosTheme>
                    <CurrencyField {...props} />
                </MosTheme>
            );
        };

        const changeMock = jest.fn();

        const component = mount(
            <Wrapper data-testid="foo" name="foo" locale="en_GB" currency="EUR" value={10} onChange={changeMock} />,
        );

        component.setProps({
            value: 20,
        });

        component.update();

        expect(
            component
                .find('[data-testid="foo"]')
                .hostNodes()
                .prop('value'),
        ).toBe('20.00');
    });
});
