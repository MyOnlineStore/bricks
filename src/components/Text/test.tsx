import React from 'react';
import Text from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import 'jest-styled-components';
import { mosTheme } from '../../themes/MosTheme';

describe('Text', () => {
    it('should render text with different variants', () => {
        const smallText = mountWithTheme(<Text variant="small">Small text</Text>);
        const regularText = mountWithTheme(<Text variant="regular">Regular text</Text>);
        const largeText = mountWithTheme(<Text variant="large">Large text</Text>);
        const extraLargeText = mountWithTheme(<Text variant="extraLarge">extraLarge text</Text>);
        const displayText = mountWithTheme(<Text variant="display">Display text</Text>);

        expect(smallText).toHaveStyleRule('font-size', mosTheme.Text.variant.small.fontSize);
        expect(regularText).toHaveStyleRule('font-size', mosTheme.Text.variant.regular.fontSize);
        expect(largeText).toHaveStyleRule('font-size', mosTheme.Text.variant.large.fontSize);
        expect(extraLargeText).toHaveStyleRule('font-size', mosTheme.Text.variant.extraLarge.fontSize);
        expect(displayText).toHaveStyleRule('font-size', mosTheme.Text.variant.display.fontSize);
    });

    it('should render text with different severities', () => {
        const defaultText = mountWithTheme(<Text>Descriptive text</Text>);
        const errorText = mountWithTheme(<Text severity="error">Descriptive text</Text>);
        const successText = mountWithTheme(<Text severity="success">Descriptive text</Text>);
        const infoText = mountWithTheme(<Text severity="info">Descriptive text</Text>);
        const warningText = mountWithTheme(<Text severity="warning">Descriptive text</Text>);

        expect(defaultText).toHaveStyleRule('color', mosTheme.Text.default.color);
        expect(errorText).toHaveStyleRule('color', mosTheme.Text.severity.error);
        expect(successText).toHaveStyleRule('color', mosTheme.Text.severity.success);
        expect(infoText).toHaveStyleRule('color', mosTheme.Text.severity.info);
        expect(warningText).toHaveStyleRule('color', mosTheme.Text.severity.warning);
    });

    it('should render text with compact styling', () => {
        const defaultCompact = mountWithTheme(<Text compact>Descriptive text</Text>);

        const extraLargeCompact = mountWithTheme(
            <Text variant="extraLarge" compact>
                Descriptive text
            </Text>,
        );

        expect(defaultCompact).toHaveStyleRule('line-height', mosTheme.Text.variant.regular.lineHeight.compact);
        expect(extraLargeCompact).toHaveStyleRule('line-height', mosTheme.Text.variant.extraLarge.lineHeight.compact);
    });

    it('should render text with strong styling', () => {
        const component = mountWithTheme(<Text strong>Strong text</Text>);

        expect(component).toHaveStyleRule('font-weight', mosTheme.Text.strong.fontWeight);
    });
});
