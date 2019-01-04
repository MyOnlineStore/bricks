import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './decorators/themeDecorator';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { themes } from '@storybook/components';
import { grey, silver, bodyFont, fontSize } from '../../src/themes/MosTheme/MosTheme.theme';
import { configureViewport } from '@storybook/addon-viewport';

setOptions({
    name: 'Bricks',
    url: '#',
    addonPanelInRight: true,
    theme: {
        mainBackground: grey.darker1,
        mainBorder: `1px solid ${grey.base}`,
        mainBorderColor: grey.base,
        mainBorderRadius: 3,
        inputFill: grey.base,
        mainTextColor: grey.lighter2,
        mainTextFace: bodyFont,
        mainTextSize: fontSize.base,
        dimmedTextColor: grey.lighter1,
        highlightColor: grey.lighter1,
        layoutMargin: 12,
    },
});

addDecorator(themeDecorator);
addDecorator(withKnobs);

const checkerSize = 24;

addDecorator(
    withBackgrounds([
        { name: 'white', value: '#fff', default: true },
        {
            name: 'transparent',
            value: `#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${checkerSize}' height='${checkerSize}' viewBox='0 0 ${checkerSize} ${checkerSize}'%3E%3Cg fill='%23eaebed' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h${checkerSize /
                2}v${checkerSize / 2}H0V0zm${checkerSize / 2} ${checkerSize / 2}h${checkerSize / 2}v${checkerSize /
                2}H${checkerSize / 2}V${checkerSize / 2}z'/%3E%3C/g%3E%3C/svg%3E")`,
        },
    ]),
);

const req = require.context('../../src', true, /story\.(DontTest\.)?tsx?$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
