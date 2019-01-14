import React from 'react';
import Text from '.';
import { shallowWithTheme } from '../../utility/styled/testing';
import 'jest-styled-components';

describe('Text', () => {
    it('should render text with default styling', () => {
        const component = shallowWithTheme(<Text>Default text</Text>);

        expect(component.dive()).toMatchSnapshot();
    });

    it('should render text with strong styling', () => {
        const component = shallowWithTheme(<Text strong>Strong text</Text>);

        expect(component.dive()).toHaveStyleRule('font-weight', '700');
    });

    it('should render text with descriptive styling', () => {
        const component = shallowWithTheme(<Text descriptive>Descriptive text</Text>);

        expect(component.dive()).toHaveStyleRule('color', '#88979d');
    });

    it('should render text with compact styling', () => {
        const component = shallowWithTheme(<Text compact>Descriptive text</Text>);

        expect(component.dive()).toHaveStyleRule('line-height', '1.25');
    });

    it('should render a span when inline is set to true', () => {
        const component = shallowWithTheme(<Text inline>Descriptive text</Text>);

        expect(component.dive().find('span').length).toBe(1);
    });
});
