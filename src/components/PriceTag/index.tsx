import { StatelessComponent } from 'enzyme';
import React from 'react';
import { StyledType } from '../../utility/styled';
import formatCurrency from './formatters/formatCurrency';
import formatDecimalSeperator from './formatters/formatDecimalSeperator';
import formatFraction from './formatters/formatFraction';
import StyledPriceTag from './style';

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

type PartType = {
    type: PartTypeType;
    value: string;
};

type PropsType = StyledType & {
    hideCurrency?: boolean;
    superScriptFraction?: boolean;
    showDash?: boolean;
    hideZeros?: boolean;
    parts: Array<PartType>;
    freeLabel?: string;
    displayType?: 'base' | 'action' | 'default';
};

type StatsType = {
    isRound: boolean;
    isFree: boolean;
};

const isFree = (part: PartType): boolean =>
    (part.type === 'integer' || part.type === 'fraction') && parseInt(part.value, 10) !== 0;

const isRound = (part: PartType): boolean => part.type === 'fraction' && parseInt(part.value, 10) === 0;

const deriveStatsFromPart = (initialStats: StatsType, part: PartType): StatsType => ({
    isRound: isRound(part) ? true : initialStats.isRound,
    isFree: isFree(part) ? false : initialStats.isFree,
});

const PriceTag: StatelessComponent<PropsType> = (props): JSX.Element => {
    const stats = props.parts.reduce(deriveStatsFromPart, {
        isRound: false,
        isFree: true,
    });

    const price = props.parts.map(part => {
        switch (part.type) {
            case 'fraction':
                return formatFraction(part.value, props, stats.isRound);
            case 'currency':
                return formatCurrency(part.value, props);
            case 'decimal':
                return formatDecimalSeperator(part.value, props, stats.isRound);
            default:
                return part.value;
        }
    });

    return (
        <StyledPriceTag displayType={props.displayType}>
            {stats.isFree && props.freeLabel !== undefined ? props.freeLabel : price}
        </StyledPriceTag>
    );
};

export default PriceTag;
export { PropsType, PartTypeType, PartType };
