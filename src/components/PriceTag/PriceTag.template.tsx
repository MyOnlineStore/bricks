import { StatelessComponent } from 'enzyme';
import React from 'react';
import { StyledType } from '../../utility/styled';
import formatCurrency from './formatters/formatCurrency';
import formatDecimalSeperator from './formatters/formatDecimalSeperator';
import formatFraction from './formatters/formatFraction';

type PartType =
    |'currency'
    |'decimal'
    |'fraction'
    |'group'
    |'infinity'
    |'integer'
    |'literal'
    |'minusSign'
    |'nan'
    |'plusSign'
    |'percentSign';

type PartsType = Array<{
    type:PartType;
    value:string;
}>;

type PropsType = StyledType & {
    hideCurrency?:boolean;
    superScriptFraction?:boolean;
    showDash?:boolean;
    hideZeros?:boolean;
    parts:PartsType;
};

const PriceTag:StatelessComponent<PropsType> = (props):JSX.Element => {
    const isRound = props.parts.reduce(
        (round, part):boolean => {
            return part.type === 'fraction' && parseInt(part.value, 10) === 0
                ? true
                : round;
        },
        false
    );

    const price = props.parts.map((part) => {
        switch (part.type) {
            case 'fraction': return formatFraction(part.value, props, isRound);
            case 'currency': return formatCurrency(part.value, props);
            case 'decimal': return formatDecimalSeperator(part.value, props, isRound);
            default: return part.value;
        }
    });

    return (
        <span className={props.className}>{price}</span>
    );
};

export default PriceTag;
export {
    PropsType,
    PartsType,
    PartType,
};
