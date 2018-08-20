import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './decorators/themeDecorator';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';

configureViewport();

setOptions({
    name: 'Bricks',
    url: '#',
});

addDecorator(withInfo);
addDecorator(themeDecorator);
addDecorator(withKnobs);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context('../../src', true, /story\.(DontTest\.)?tsx?$/));
}

configure(loadStories, module);
