import React from 'react';
import { PropsType } from '..';

const formatFraction = (
    value: string,
    { fractionFormat, superScriptFraction }: PropsType,
    isRound: boolean,
): string | JSX.Element => {
    if (isRound && fractionFormat === 'none') return '';
    if (isRound && fractionFormat === 'dash') return '-';
    if (superScriptFraction !== undefined) {
        return <sup key="fraction">{value}</sup>;
    }

    return value;
};

export default formatFraction;
