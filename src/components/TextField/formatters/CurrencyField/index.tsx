/// <reference path="../../../../../src/_declarations/global.d.ts" />
import TextField, { PropsType as TextFieldPropsType } from '../..';
import React, { FC, useMemo, useState, useEffect, useRef } from 'react';
import { Decimal } from 'decimal.js';

type OmittedKeys = 'onChange' | 'value' | 'prefix' | 'suffix';

type PropsType = Pick<TextFieldPropsType, Exclude<keyof TextFieldPropsType, OmittedKeys>> & {
    value: number;
    locale: string;
    currency: string;
    disableNegative?: boolean;
    minor?: boolean;
    formatter?: Intl.NumberFormat;
    onChange(value: number): void;
};

/**
 * Find the position of nth occurence of a char
 */
const nthEndPos = (char: string, chars: string, nth: number): number => {
    const foundIndex = chars.indexOf(char);

    if (foundIndex === -1) {
        return -1;
    }

    if (nth === 0) {
        return chars.length - foundIndex;
    } else {
        return nthEndPos(char, chars.substr(foundIndex + 1), nth - 1);
    }
};

/**
 * Because the amount of characters changes after a format, the cursor is
 * influenced when trying to edit the value. This function corrects the
 * displacement of the cursor.
 */
export const correctCursorPosition = (cursorPosition: number, oldValue: string, newValue: string): number => {
    /**
     * No correction needed if no formatting is applied
     */
    if (oldValue.length === newValue.length) {
        return cursorPosition;
    }

    const char = oldValue[cursorPosition];
    const nth = oldValue.substr(0, cursorPosition).match(new RegExp(char, 'g'));

    if (nth === null) {
        return cursorPosition;
    }

    /**
     * We decrement nth.length by 1 because string.match also includes the selected char
     */
    const newCursor = nthEndPos(char, newValue, nth.length);

    if (newCursor === -1) {
        return cursorPosition;
    }

    return newValue.length - newCursor;
};

const CurrencyField: FC<PropsType> = props => {
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

    /**
     * Store wether or not this is the initial render. This can be used to only format initially
     */
    const initialRender = useRef(true);
    const inputRef = useRef<HTMLInputElement>();
    const previousValue = useRef(props.value);

    const toMajor = (value: number) => {
        return value / Math.pow(10, formatter.resolvedOptions().maximumFractionDigits);
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

    /**
     * Turn a display value into a numeric value without converting to major/minor
     */
    const displayValueToNumericValue = (displayValue: string): number => {
        const stripped = filterDisplayValue(displayValue);
        const parsed = parseFloat(stripped.replace(decimalSeperator, '.'));

        return !isNaN(parsed) ? parsed : props.value;
    };

    const numericValueToDisplayValue = (numericValue: number): string => {
        return numericValue.toFixed(formatter.resolvedOptions().maximumFractionDigits).replace('.', decimalSeperator);
    };

    const formatDisplayValue = (value: string): string => {
        try {
            return formatter.formatToParts(displayValueToNumericValue(value)).reduce((acc, part) => {
                if (part.type === 'currency' || part.type === 'literal') {
                    return acc;
                }

                return `${acc}${part.value}`;
            }, '');
        } catch (error) {
            console.error(error);
            // tslint:disable-next-line: no-use-before-declare
            return displayValue;
        }
    };

    /**
     * Actual string that is entered by user
     */
    const [displayValue, setDisplayValue] = useState(
        formatDisplayValue(numericValueToDisplayValue(props.minor ? toMajor(props.value) : props.value)),
    );

    /**
     * If there is a mismatch on what this component changed itself, and what was passed into
     * the component via props.value, correct the display value
     */
    useEffect(() => {
        if (!initialRender.current && props.value !== previousValue.current) {
            setDisplayValue(numericValueToDisplayValue(props.value));
        }
    }, [props.value, props.minor]);

    useEffect(() => {
        if (!initialRender.current && props.value < 0) {
            setDisplayValue(formatDisplayValue('0'));
            props.onChange(0);
        }
    }, [props.disableNegative]);

    /**
     * Reformat the display value when locale or currency change
     */
    useEffect(() => {
        if (!initialRender.current) {
            const newValue = props.minor ? toMajor(props.value) : props.value;
            setDisplayValue(formatDisplayValue(`${newValue}`.replace('.', decimalSeperator)));
        }
    }, [props.locale, props.currency]);

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
                const newValue = props.minor ? toMinor(numeric) : numeric;

                setDisplayValue(filterDisplayValue(value));
                previousValue.current = newValue;

                if (value === '') {
                    props.onChange(0);
                } else {
                    props.onChange(
                        parseFloat(
                            parseFloat(`${newValue}`).toFixed(formatter.resolvedOptions().maximumFractionDigits),
                        ),
                    );
                }
            }}
            onBlur={() => {
                if (displayValue === '') {
                    setDisplayValue('0');
                }

                setDisplayValue(formatDisplayValue(displayValue));
            }}
            onFocus={() => {
                const unformatted = filterDisplayValue(displayValue);
                setDisplayValue(unformatted);
            }}
            onClick={() => {
                if (inputRef.current && inputRef.current.selectionStart) {
                    const newPosition = correctCursorPosition(
                        inputRef.current.selectionStart,
                        displayValue,
                        formatDisplayValue(displayValue),
                    );

                    if (newPosition !== inputRef.current.selectionStart) {
                        inputRef.current.selectionStart = newPosition;
                        inputRef.current.selectionEnd = newPosition;
                    }
                }
            }}
        />
    );
};

export default CurrencyField;
