import { configure, addDecorator, addParameters } from '@storybook/react';
import themeDecorator from './decorators/themeDecorator';
import { withKnobs } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { grey, silver, bodyFont, fontSize, green } from '../src/themes/MosTheme/MosTheme.theme';
import { configureViewport } from '@storybook/addon-viewport';
import { create } from '@storybook/theming';

const checkerSize = 24;

addParameters({
    options: {
        url: '#',
        name: 'Bricks',
        theme: create({
            base: 'dark',
            colorPrimary: green.darker1,
            colorSecondary: green.darker2,
        }),
    },
    backgrounds: [
        { name: 'white', value: '#fff', default: true },
        {
            name: 'transparent',
            value: `#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${checkerSize}' height='${checkerSize}' viewBox='0 0 ${checkerSize} ${checkerSize}'%3E%3Cg fill='%23eaebed' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h${checkerSize /
                2}v${checkerSize / 2}H0V0zm${checkerSize / 2} ${checkerSize / 2}h${checkerSize / 2}v${checkerSize /
                2}H${checkerSize / 2}V${checkerSize / 2}z'/%3E%3C/g%3E%3C/svg%3E")`,
        },
    ],
});

addDecorator(themeDecorator);
addDecorator(withKnobs);

const req = require.context('../src', true, /story\.(DontTest\.)?tsx?$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
