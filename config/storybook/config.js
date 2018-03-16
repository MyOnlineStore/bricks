import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './decorators/themeDecorator';

addDecorator(themeDecorator);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context("../../src", true, /.story\.tsx?$/));
}

configure(loadStories, module);

