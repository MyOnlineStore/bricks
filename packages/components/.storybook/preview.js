import themeDecorator from '../src/__fixtures__/themeDecorator';
import { addDecorator } from '@storybook/react';

addDecorator(themeDecorator);

export const parameters = {
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                value: '#fff',
            },
            {
                name: 'dark',
                value: '#000',
            },
        ],
    },
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'MyOnlineStore',
        toolbar: {
            icon: 'paintbrush',
            items: ['MyOnlineStore', 'MyOnlineStore (Corporate)', 'Game Store', 'Concept Store'],
        },
    },
};
