import themeDecorator from '../src/__fixtures__/themeDecorator';
import { addDecorator } from '@storybook/react';

addDecorator(themeDecorator);

export const parameters = {
    controls: {
        expanded: true,
    },
};
