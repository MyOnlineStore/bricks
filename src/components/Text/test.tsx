import toJson from 'enzyme-to-json';
import React from 'react';
import Text from '.';
import { shallowWithTheme } from '../../utility/styled/testing';
import MosTheme from '../../themes/MosTheme/MosTheme.theme';

describe('Text', () => {
    it('should render text with default styling', () => {
        const component = shallowWithTheme(<Text>Default text</Text>);

        expect(toJson(component.dive())).toMatchSnapshot();
    });

    it('should render text with different variants', () => {
        const smallText = shallowWithTheme(<Text variant="small">Small text</Text>);
        const regularText = shallowWithTheme(<Text variant="regular">Regular text</Text>);
        const largeText = shallowWithTheme(<Text variant="large">Large text</Text>);
        const extraLargeText = shallowWithTheme(<Text variant="extraLarge">extraLarge text</Text>);
        const displayText = shallowWithTheme(<Text variant="display">Display text</Text>);

        /* tslint:disable */
        (expect(toJson(smallText.dive())) as any).toHaveStyleRule('font-size', MosTheme.Text.variant.small.fontSize);
        (expect(toJson(regularText.dive())) as any).toHaveStyleRule('font-size', MosTheme.Text.variant.regular.fontSize);
        (expect(toJson(largeText.dive())) as any).toHaveStyleRule('font-size', MosTheme.Text.variant.large.fontSize);
        (expect(toJson(extraLargeText.dive())) as any).toHaveStyleRule('font-size', MosTheme.Text.variant.extraLarge.fontSize);
        (expect(toJson(displayText.dive())) as any).toHaveStyleRule('font-size', MosTheme.Text.variant.display.fontSize);
        /* tslint:enable */
    });

    it('should render text with different severities', () => {
        const defaultText = shallowWithTheme(<Text>Descriptive text</Text>);
        const errorText = shallowWithTheme(<Text severity="error">Descriptive text</Text>);
        const successText = shallowWithTheme(<Text severity="success">Descriptive text</Text>);
        const infoText = shallowWithTheme(<Text severity="info">Descriptive text</Text>);
        const warningText = shallowWithTheme(<Text severity="warning">Descriptive text</Text>);

        /* tslint:disable */
        (expect(toJson(defaultText.dive())) as any).toHaveStyleRule('color', MosTheme.Text.default.color);
        (expect(toJson(errorText.dive())) as any).toHaveStyleRule('color', MosTheme.Text.severity.error);
        (expect(toJson(successText.dive())) as any).toHaveStyleRule('color', MosTheme.Text.severity.success);
        (expect(toJson(infoText.dive())) as any).toHaveStyleRule('color', MosTheme.Text.severity.info);
        (expect(toJson(warningText.dive())) as any).toHaveStyleRule('color', MosTheme.Text.severity.warning);
        /* tslint:enable */
    });

    it('should render text with compact styling', () => {
        const defaultCompact = shallowWithTheme(<Text compact>Descriptive text</Text>);
        const extraLargeCompact = shallowWithTheme(<Text variant="extraLarge" compact>Descriptive text</Text>);

        /* tslint:disable */
        (expect(toJson(defaultCompact.dive())) as any).toHaveStyleRule('line-height', MosTheme.Text.variant.regular.lineHeight.compact);
        (expect(toJson(extraLargeCompact.dive())) as any).toHaveStyleRule('line-height', MosTheme.Text.variant.extraLarge.lineHeight.compact);
        /* tslint:enable */
    });

    it('should render text with strong styling', () => {
        const component = shallowWithTheme(<Text strong>Strong text</Text>);

        /* tslint:disable */
        (expect(toJson(component.dive())) as any).toHaveStyleRule('font-weight', MosTheme.Text.strong.fontWeight);
        /* tslint:enable */
    });

    it('should render a span when inline is set to true', () => {
        const component = shallowWithTheme(<Text inline>Descriptive text</Text>);

        expect(component.dive().find('span').length).toBe(1);
    });
});
