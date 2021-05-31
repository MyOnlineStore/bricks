import React, { ComponentProps } from 'react';
import CurrencyField from '.';

export default {
    title: 'CurrencyField',
    component: CurrencyField,
    argTypes: {
        value: {
            defaultValue: 100,
        },
        locale: {
            defaultValue: 'en_GB',
            control: {
                type: 'select',
                options: ['en_GB', 'nl_NL', 'de_DE', 'fr_FR'],
            },
        },
        currency: {
            defaultValue: 'EUR',
            control: {
                type: 'select',
                options: ['EUR', 'USD'],
            },
        },
    },
};

export const Default = (args: ComponentProps<typeof CurrencyField>) => {
    return <CurrencyField {...args} />;
};
