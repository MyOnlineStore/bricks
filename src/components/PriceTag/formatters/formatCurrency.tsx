import React from 'react';
import { StateType } from '..';

const formatCurrency = (
    hideCurrency: boolean,
    currencyAlignment: StateType['currencyAlignment'],
    currency: string,
    price: JSX.Element,
): string | JSX.Element => {
    if (!hideCurrency) {
        return currencyAlignment === 'left' ? (
            <>
                {currency} {price}
            </>
        ) : (
            <>
                {price} {currency}
            </>
        );
    }

    return price;
};

export default formatCurrency;
