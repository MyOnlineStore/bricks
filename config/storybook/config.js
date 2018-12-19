import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './decorators/themeDecorator';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

setOptions({
    name: 'Bricks',
    url: '#',
    addonPanelInRight: true,
});

addDecorator(themeDecorator);
addDecorator(withKnobs);

const req = require.context('../../src', true, /story\.(DontTest\.)?tsx?$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
