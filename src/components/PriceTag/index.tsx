/// <reference path="../../../src/_declarations/global.d.ts" />
import React, { FC } from 'react';
import StyledPriceTag from './style';
import formatFraction from './formatters/formatFraction';
import formatCurrency from './formatters/formatCurrency';
import formatDecimalSeperator from './formatters/formatDecimalSeperator';

type PropsType = {
    hideCurrency?: boolean;
    superScriptFraction?: boolean;
    value: number;
    freeLabel?: string;
    strikethrough?: boolean;
    fractionFormat?: 'none' | 'dash';
    locale: string;
    currency: string;
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

const PriceTag: FC<PropsType> = (props): JSX.Element => {
    const formatter = new Intl.NumberFormat(props.locale, {
        style: 'currency',
        currency: props.currency,
    });

    const parts = formatter.formatToParts(props.value);
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
                return props.hideCurrency && props.hideCurrency === true ? undefined : part.value;
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
