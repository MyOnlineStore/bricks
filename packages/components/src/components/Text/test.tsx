import React from 'react';
import Text from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import 'jest-styled-components';
import { mosTheme } from '../../themes/MosTheme';

describe('Text', () => {
    it('should render text with different sizes', () => {
        const smallText = mountWithTheme(<Text size="small">Small text</Text>);
        const regularText = mountWithTheme(<Text size="regular">Regular text</Text>);
        const largeText = mountWithTheme(<Text size="large">Large text</Text>);
        const extraLargeText = mountWithTheme(<Text size="extraLarge">extraLarge text</Text>);
        const displayText = mountWithTheme(<Text size="display">Display text</Text>);

        expect(smallText).toHaveStyleRule('font-size', mosTheme.Text.size.small.fontSize);
        expect(regularText).toHaveStyleRule('font-size', mosTheme.Text.size.regular.fontSize);
        expect(largeText).toHaveStyleRule('font-size', mosTheme.Text.size.large.fontSize);
        expect(extraLargeText).toHaveStyleRule('font-size', mosTheme.Text.size.extraLarge.fontSize);
        expect(displayText).toHaveStyleRule('font-size', mosTheme.Text.size.display.fontSize);
    });

    it('should render text with different variants', () => {
        const defaultText = mountWithTheme(<Text>Descriptive text</Text>);
        const errorText = mountWithTheme(<Text variant="error">Descriptive text</Text>);
        const successText = mountWithTheme(<Text variant="success">Descriptive text</Text>);
        const infoText = mountWithTheme(<Text variant="info">Descriptive text</Text>);
        const warningText = mountWithTheme(<Text variant="warning">Descriptive text</Text>);
        const descriptiveText = mountWithTheme(<Text variant="descriptive">Descriptive text</Text>);

        expect(defaultText).toHaveStyleRule('color', mosTheme.Text.default.color);
        expect(errorText).toHaveStyleRule('color', mosTheme.Text.variant.error);
        expect(successText).toHaveStyleRule('color', mosTheme.Text.variant.success);
        expect(infoText).toHaveStyleRule('color', mosTheme.Text.variant.info);
        expect(warningText).toHaveStyleRule('color', mosTheme.Text.variant.warning);
        expect(descriptiveText).toHaveStyleRule('color', mosTheme.Text.variant.descriptive);
    });

    it('should render text with compact styling', () => {
        const defaultCompact = mountWithTheme(<Text compact>Descriptive text</Text>);

        const extraLargeCompact = mountWithTheme(
            <Text size="extraLarge" compact>
                Descriptive text
            </Text>,
        );

        expect(defaultCompact).toHaveStyleRule('line-height', mosTheme.Text.size.regular.lineHeight.compact);
        expect(extraLargeCompact).toHaveStyleRule('line-height', mosTheme.Text.size.extraLarge.lineHeight.compact);
    });

    it('should render text with strong styling', () => {
        const component = mountWithTheme(<Text strong>Strong text</Text>);

        expect(component).toHaveStyleRule('font-weight', mosTheme.Text.strong.fontWeight);
    });

    it('should be testable with a data-testid', () => {
        const component = mountWithTheme(<Text data-testid="foo">some text</Text>);

        expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
    });
});
