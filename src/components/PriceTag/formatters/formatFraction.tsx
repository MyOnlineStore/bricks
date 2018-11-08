import React from 'react';
import { PropsType } from '..';

export default (
    value: string,
    { fractionFormat, superScriptFraction }: PropsType,
    isRound: boolean,
): string | JSX.Element => {
    if (isRound && fractionFormat === 'none') return '';
    if (isRound && fractionFormat === 'dash') return '-';
    if (superScriptFraction !== undefined && superScriptFraction) {
        return <sup key="fraction">{value}</sup>;
    }

    return value;
};
