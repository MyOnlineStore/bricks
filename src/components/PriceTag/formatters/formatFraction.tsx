import React from 'react';
import { PropsType } from '../PriceTag.template';

const formatFraction = (
    value: string,
    { hideZeros, showDash, superScriptFraction }: PropsType,
    isRound: boolean,
): string | JSX.Element => {
    if (isRound && hideZeros !== undefined && hideZeros) {
        return '';
    }

    if (isRound && showDash !== undefined && showDash) {
        return '-';
    }

    if (superScriptFraction !== undefined && superScriptFraction) {
        return <sup key="fraction">{value}</sup>;
    }

    return value;
};

export default formatFraction;
