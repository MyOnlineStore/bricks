import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';
import themeDecorator from './decorators/themeDecorator';
import { green, grey, silver, bodyFont } from '../src/themes/MosTheme/MosTheme.theme';

const checkerSize = 24;

addParameters({
    options: {
        url: '#',
        name: 'Bricks',
        theme: create({
            base: 'dark',
            colorPrimary: green.darker2,
            colorSecondary: green.darker2,
            appBg: grey.base,
            appContentBg: grey.base,
            appBorderColor: grey.base,
            appBorderRadius: 4,
            fontBase: bodyFont,
            fontCode: 'monospace',
            textColor: silver.darker3,
            textInverseColor: grey.base,
            barTextColor: silver.darker3,
            barSelectedColor: green.darker2,
            barBg: grey.darker1,
            inputBg: silver.lighter1,
            inputBorder: silver.darker4,
            inputTextColor: grey.base,
            inputBorderRadius: 3,
            brandTitle: 'Bricks',
            brandUrl: 'https://myonlinestore.github.io/bricks',
            brandImage: '/logo_en_white.svg',
        }),
    },
    backgrounds: [
        { name: 'white', value: '#fff', default: true },
        {
            name: 'transparent',
            // no backticks because IE
            value: '#fff url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="' + checkerSize + '" height="' + checkerSize + '" viewBox="0 0 ' + checkerSize + ' ' + checkerSize + '"%3E%3Cg fill="%23eaebed" fill-opacity="0.4"%3E%3Cpath fill-rule="evenodd" d="M0 0h' + checkerSize / 2  + 'v' + checkerSize / 2 + 'H0V0zm' + checkerSize / 2 + ' ' + checkerSize / 2  + 'h' + checkerSize / 2  + 'v' + checkerSize / 2 + 'H' + checkerSize / 2 + 'V' + checkerSize / 2 + 'z"/%3E%3C/g%3E%3C/svg%3E\')'
        },
    ],
});

addDecorator(themeDecorator);
addDecorator(withKnobs);

const req = require.context('../src', true, /story\.(DontTest\.)?tsx?$/);

function loadStories() {
    req.keys().forEach(function(filename) {
        return req(filename);
    });
}

configure(loadStories, module);
