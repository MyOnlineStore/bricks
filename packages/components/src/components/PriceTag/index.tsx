/// <reference path="../../../src/_declarations/global.d.ts" />
import React, { FunctionComponent } from 'react';
import StyledPriceTag from './style';
import formatFraction from './formatters/formatFraction';
import formatCurrency from './formatters/formatCurrency';
import formatDecimalSeperator from './formatters/formatDecimalSeperator';
import { Decimal } from 'decimal.js';

type PropsType = {
    hideCurrency?: boolean;
    superScriptFraction?: boolean;
    value: number;
    freeLabel?: string;
    strikethrough?: boolean;
    fractionFormat?: 'none' | 'dash';
    locale: string;
    currency: string;
    minor?: boolean;
};

type StatsType = {
    isRound: boolean;
    isFree: boolean;
};

const isRound = (part: Intl.PartType): boolean => part.type === 'fraction' && parseInt(part.value, 10) === 0;

const isFree = (part: Intl.PartType): boolean => {
    return (part.type === 'integer' || part.type === 'fraction') && parseInt(part.value, 10) !== 0;
};

const deriveStatsFromPart = (initialStats: StatsType, part: Intl.PartType): StatsType => ({
    isRound: isRound(part) ? true : initialStats.isRound,
    isFree: isFree(part) ? false : initialStats.isFree,
});

/**
 * This component renders a span with the locale aware version of the price.
 * It also allows you to render some common design patterns for prices like
 * superscripting the fraction or hiding the decimal when they equal 0.
 */

const PriceTag: FunctionComponent<PropsType> = (props): JSX.Element => {
    const formatter = new Intl.NumberFormat(props.locale.replace('_', '-'), {
        style: 'currency',
        currency: props.currency,
    });

    const amount = props.minor
        ? new Decimal(props.value).dividedBy(Math.pow(10, formatter.resolvedOptions().maximumFractionDigits)).toNumber()
        : props.value;

    const parts = formatter.formatToParts(amount);

    const stats = parts.reduce(deriveStatsFromPart, {
        isRound: false,
        isFree: true,
    });

    const price = parts.map(part => {
        switch (part.type) {
            case 'fraction':
                return formatFraction(part.value, props, stats.isRound);
            case 'currency':
                return formatCurrency(part.value, props);
            case 'decimal':
                return formatDecimalSeperator(part.value, props, stats.isRound);
            case 'literal':
                return props.hideCurrency === true ? undefined : part.value;
            default:
                return part.value;
        }
    });

    return (
        <StyledPriceTag strikethrough={props.strikethrough}>
            {stats.isFree && props.freeLabel !== undefined ? props.freeLabel : price}
        </StyledPriceTag>
    );
};

export default PriceTag;
export { PropsType };
