import React, { SFC } from 'react';
import { StyledType } from '../../utility/styled';
import StyledPriceTag from './style';
import formatFraction from './formatters/formatFraction';
import formatCurrency from './formatters/formatCurrency';
import formatDecimalSeperator from './formatters/formatDecimalSeperator';

type PropsType = StyledType & {
    hideCurrency?: boolean;
    superScriptFraction?: boolean;
    value: string;
    freeLabel?: string;
    strikethrough?: boolean;
    fractionFormat?: 'none' | 'dash';
    locale: string;
    currency: string;
};

type PartTypeType =
    | 'currency'
    | 'decimal'
    | 'fraction'
    | 'group'
    | 'infinity'
    | 'integer'
    | 'literal'
    | 'minusSign'
    | 'nan'
    | 'plusSign'
    | 'percentSign';

type StateType = {
    decimalSeperator: string;
};

type PartType = {
    type: PartTypeType;
    value: string;
};

type NumberFormatter = Intl.NumberFormat & {
    formatToParts(value: number): Array<PartType>;
};

type StatsType = {
    isRound: boolean;
    isFree: boolean;
};

const isRound = (part: PartType): boolean => part.type === 'fraction' && parseInt(part.value, 10) === 0;

const isFree = (part: PartType): boolean => {
    return (part.type === 'integer' || part.type === 'fraction') && parseInt(part.value, 10) !== 0;
};

const parse = (value: string, decimalSeperator: string): number => {
    const stripped = value.replace(new RegExp(`[^0-9${decimalSeperator}]`, 'g'), '');
    const parsed = parseFloat(stripped.replace(decimalSeperator, '.'));

    return !isNaN(parsed) ? parseFloat(parsed.toFixed(2)) : 0;
};

const deriveStatsFromPart = (initialStats: StatsType, part: PartType): StatsType => ({
    isRound: isRound(part) ? true : initialStats.isRound,
    isFree: isFree(part) ? false : initialStats.isFree,
});

const PriceTag: SFC<PropsType> = (props): JSX.Element => {
    const formatter = new Intl.NumberFormat(props.locale, {
        style: 'currency',
        currency: props.currency,
    }) as NumberFormatter;

    const parts = formatter.formatToParts(parse(props.value, '.'));
    let currencyAlignment = 'left';
    let currency;

    const stats = parts.reduce(deriveStatsFromPart, {
        isRound: false,
        isFree: true,
    });

    const price = parts.map((part, index) => {
        switch (part.type) {
            case 'fraction':
                return formatFraction(part.value, props, stats.isRound);
            case 'currency':
                currencyAlignment = index === parts.length - 1 ? 'right' : 'left';
                currency = formatCurrency(part.value, stats.isFree, props);

                return false;
            case 'decimal':
                return formatDecimalSeperator(part.value, props, stats.isRound);
            case 'literal':
                return false;
            default:
                return part.value;
        }
    });

    return (
        <StyledPriceTag strikethrough={props.strikethrough}>
            {currencyAlignment === 'left' ? (
                <>
                    {currency} {stats.isFree && props.freeLabel !== undefined ? props.freeLabel : price}
                </>
            ) : (
                <>
                    {stats.isFree && props.freeLabel !== undefined ? props.freeLabel : price} {currency}
                </>
            )}
        </StyledPriceTag>
    );
};

export default PriceTag;
export { PropsType, PartType, StateType };
