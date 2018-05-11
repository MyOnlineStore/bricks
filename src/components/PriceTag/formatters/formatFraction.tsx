import React from 'react';
import { PropsType } from '../PriceTag.template';

/* tslint:disable:cyclomatic-complexity */
const formatFraction = (
    value:string,
    { hideZeros, showDash, superScriptFraction }:PropsType,
    isRound:boolean,
):string|JSX.Element => {
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
/* tslint:enable:cyclomatic-complexity */

export default formatFraction;
