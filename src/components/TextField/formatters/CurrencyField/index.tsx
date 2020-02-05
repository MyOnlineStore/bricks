/// <reference path="../../../../../src/_declarations/global.d.ts" />
import TextField, { PropsType as TextFieldPropsType } from '../..';
import React, { FC, useMemo, useState, useEffect, useRef } from 'react';
import { Decimal } from 'decimal.js';

type OmittedKeys = 'onChange' | 'value';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: number;
    locale: string;
    currency: string;
    disableNegative?: boolean;
    minor?: boolean;
    formatter?: Intl.NumberFormat;
    onChange(value: number): void;
};

const CurrencyField: FC<PropsType> = props => {
    const inputRef = useRef<HTMLInputElement>();
    const previousValue = useRef(props.value);

    /**
     * Update the formatter every time the currency or locale changes.
     */
    const { formatter, decimalSeperator, currencyAlignment, currencySymbol } = useMemo(() => {
        const formatter = !props.formatter
            ? new Intl.NumberFormat(props.locale.replace('_', '-'), {
                  style: 'currency',
                  currency: props.currency,
              })
            : props.formatter;

        let decimalSeperator = '.';
        let currencyAlignment = 'left';
        let currencySymbol = '';

        try {
            /**
             * format an arbitrary number to get the resolved decimal seperator
             * and currency allignment.
             */
            const parts = formatter.formatToParts(123.45);

            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];

                switch (part.type) {
                    case 'currency': {
                        currencySymbol = part.value;
                        currencyAlignment = i === parts.length - 1 ? 'right' : 'left';
                        break;
                    }
                    case 'decimal': {
                        decimalSeperator = part.value;
                        break;
                    }
                    default:
                }
            }
        } catch (error) {
            console.error(error);
        }

        return { formatter, decimalSeperator, currencyAlignment, currencySymbol };
    }, [props.currency, props.locale]);

    const toMajor = (value: number) => {
        return props.minor ? value / Math.pow(10, formatter.resolvedOptions().maximumFractionDigits) : value;
    };

    const toMinor = (value: number) => {
        return new Decimal(value).times(Math.pow(10, formatter.resolvedOptions().maximumFractionDigits)).toNumber();
    };

    /**
     * Strip out any non-legal characters
     */
    const filterDisplayValue = (displayValue: string) => {
        const negatedValues = props.disableNegative ? `[^0-9${decimalSeperator}]` : `[^\-0-9${decimalSeperator}]`;
        const stripped = displayValue.replace(new RegExp(negatedValues, 'g'), '');

        return stripped;
    };

    const displayValueToNumericValue = (displayValue: string): number => {
        const stripped = filterDisplayValue(displayValue);
        const parsed = parseFloat(stripped.replace(decimalSeperator, '.'));
        const newValue = !isNaN(parsed)
            ? parseFloat(parsed.toFixed(formatter.resolvedOptions().maximumFractionDigits))
            : props.value;

        if (props.minor) {
            return toMinor(newValue);
        }

        return newValue;
    };

    const numericValueToDisplayValue = (numericValue: number): string => {
        const value = props.minor
            ? `${toMajor(numericValue).toFixed(formatter.resolvedOptions().maximumFractionDigits)}`
            : numericValue.toFixed(formatter.resolvedOptions().maximumFractionDigits);

        return filterDisplayValue(value);
    };
    const formatNumericValue = (value: number): string => {
        try {
            return formatter.formatToParts(toMajor(value)).reduce((acc, part) => {
                if (part.type === 'currency' || part.type === 'literal') {
                    return acc;
                }

                return `${acc}${part.value}`;
            }, '');
        } catch (error) {
            // tslint:disable-next-line: no-use-before-declare
            return displayValue;
        }
    };

    /**
     * Because the amount of characters changes after a format, the cursor is
     * influenced when trying to edit the value. This function corrects the
     * displacement of the cursor.
     */
    const correctCursorPosition = (newValue: string, oldValue: string) => {
        if (inputRef.current && inputRef.current.selectionStart) {
            const selectedChar = oldValue[inputRef.current.selectionStart];
            const sub = oldValue.substr(0, inputRef.current.selectionStart - 1);
            const matches = sub.match(new RegExp(selectedChar, 'g'));
            let preceding = 0;

            if (matches) {
                preceding = matches.length;
            }

            let found = 0;
            let newLocation = 0;

            for (let i = 0; i < newValue.length; i++) {
                if (newValue[i] === selectedChar) {
                    if (found === preceding) {
                        newLocation = i;
                        break;
                    }

                    found++;
                }
            }

            if (newLocation > 0) {
                inputRef.current.selectionStart = newLocation + 1;
                inputRef.current.selectionEnd = newLocation + 1;
            } else {
                inputRef.current.selectionStart = newValue.length;
                inputRef.current.selectionEnd = newValue.length;
            }
        }
    };

    /**
     * Actual string that is entered by user
     */
    const [displayValue, setDisplayValue] = useState(formatNumericValue(props.value));

    /**
     * Store wether or not this is the initial render. This can be used to only format initially
     */
    const initialRender = useRef(true);

    useEffect(() => {
        /**
         * If there is a mismatch on what this component changed itself, and what was passed into
         * the component via props.value, correct the display value
         */

        if (!initialRender.current && props.value !== previousValue.current) {
            setDisplayValue(numericValueToDisplayValue(props.value));
        }
    }, [props.value]);

    useEffect(() => {
        if (!initialRender.current) {
            setDisplayValue(formatNumericValue(0));
            props.onChange(0);
        }
    }, [props.disableNegative]);

    useEffect(() => {
        initialRender.current = false;
    }, []);

    return (
        <TextField
            {...props}
            extractRef={ref => {
                inputRef.current = ref;
            }}
            value={displayValue}
            prefix={currencyAlignment === 'left' ? currencySymbol : undefined}
            suffix={currencyAlignment === 'right' ? currencySymbol : undefined}
            onChange={value => {
                const numeric = displayValueToNumericValue(value);
                setDisplayValue(filterDisplayValue(value));
                previousValue.current = numeric;

                if (value === '') {
                    props.onChange(0);
                } else {
                    props.onChange(numeric);
                }
            }}
            onBlur={() => {
                if (displayValue === '') {
                    setDisplayValue(formatNumericValue(0));
                }

                setDisplayValue(formatNumericValue(props.value));
            }}
            onFocus={() => {
                const unformatted = numericValueToDisplayValue(props.value);
                setDisplayValue(unformatted);
            }}
            onClick={() => {
                correctCursorPosition(displayValue, formatNumericValue(props.value));
            }}
        />
    );
};

export default CurrencyField;
