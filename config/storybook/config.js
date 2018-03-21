import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './decorators/themeDecorator';
import 'react-chromatic/storybook-addon';

addDecorator(themeDecorator);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context("../../src", true, /.story\.tsx?$/));
}

configure(loadStories, module);

