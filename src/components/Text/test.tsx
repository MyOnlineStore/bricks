import React from 'react';
import Text from '.';
import { shallowWithTheme } from '../../utility/_styled/testing';
import 'jest-styled-components';
import { mosTheme } from '../../themes/MosTheme';

describe('Text', () => {
    it('should render text with default styling', () => {
        const component = shallowWithTheme(<Text>Default text</Text>);

        expect(component.dive()).toMatchSnapshot();
    });

    it('should render text with different variants', () => {
        const smallText = shallowWithTheme(<Text variant="small">Small text</Text>);
        const regularText = shallowWithTheme(<Text variant="regular">Regular text</Text>);
        const largeText = shallowWithTheme(<Text variant="large">Large text</Text>);
        const extraLargeText = shallowWithTheme(<Text variant="extraLarge">extraLarge text</Text>);
        const displayText = shallowWithTheme(<Text variant="display">Display text</Text>);

        expect(smallText.dive()).toHaveStyleRule('font-size', mosTheme.Text.variant.small.fontSize);
        expect(regularText.dive()).toHaveStyleRule('font-size', mosTheme.Text.variant.regular.fontSize);
        expect(largeText.dive()).toHaveStyleRule('font-size', mosTheme.Text.variant.large.fontSize);
        expect(extraLargeText.dive()).toHaveStyleRule('font-size', mosTheme.Text.variant.extraLarge.fontSize);
        expect(displayText.dive()).toHaveStyleRule('font-size', mosTheme.Text.variant.display.fontSize);
    });

    it('should render text with different severities', () => {
        const defaultText = shallowWithTheme(<Text>Descriptive text</Text>);
        const errorText = shallowWithTheme(<Text severity="error">Descriptive text</Text>);
        const successText = shallowWithTheme(<Text severity="success">Descriptive text</Text>);
        const infoText = shallowWithTheme(<Text severity="info">Descriptive text</Text>);
        const warningText = shallowWithTheme(<Text severity="warning">Descriptive text</Text>);

        expect(defaultText.dive()).toHaveStyleRule('color', mosTheme.Text.default.color);
        expect(errorText.dive()).toHaveStyleRule('color', mosTheme.Text.severity.error);
        expect(successText.dive()).toHaveStyleRule('color', mosTheme.Text.severity.success);
        expect(infoText.dive()).toHaveStyleRule('color', mosTheme.Text.severity.info);
        expect(warningText.dive()).toHaveStyleRule('color', mosTheme.Text.severity.warning);
    });

    it('should render text with compact styling', () => {
        const defaultCompact = shallowWithTheme(<Text compact>Descriptive text</Text>);
        const extraLargeCompact = shallowWithTheme(
            <Text variant="extraLarge" compact>
                Descriptive text
            </Text>,
        );

        expect(defaultCompact.dive()).toHaveStyleRule('line-height', mosTheme.Text.variant.regular.lineHeight.compact);
        expect(extraLargeCompact.dive()).toHaveStyleRule(
            'line-height',
            mosTheme.Text.variant.extraLarge.lineHeight.compact,
        );
    });

    it('should render text with strong styling', () => {
        const component = shallowWithTheme(<Text strong>Strong text</Text>);

        expect(component.dive()).toHaveStyleRule('font-weight', mosTheme.Text.strong.fontWeight);
    });

    it('should render a span when inline is set to true', () => {
        const component = shallowWithTheme(<Text inline>Descriptive text</Text>);

        expect(component.dive().find('span').length).toBe(1);
    });
});
