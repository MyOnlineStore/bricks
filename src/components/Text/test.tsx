import toJson from 'enzyme-to-json';
import React from 'react';
import Text from '.';
import { shallowWithTheme } from '../../utility/styled';

describe('Text', () => {
    it('should render text with default styling', () => {
        const component = shallowWithTheme(<Text>Default text</Text>);

        expect(toJson(component.dive())).toMatchSnapshot();
    });

    it('should render text with strong styling', () => {
        const component = shallowWithTheme(<Text strong>Strong text</Text>);

        /* tslint:disable */
        (expect(toJson(component.dive())) as any).toHaveStyleRule('font-weight', '700');
        /* tslint:enable */
    });

    it('should render text with descriptive styling', () => {
        const component = shallowWithTheme(<Text descriptive>Descriptive text</Text>);

        /* tslint:disable */
        (expect(toJson(component.dive())) as any).toHaveStyleRule('color', '#a6aab3');
        /* tslint:enable */
    });

    it('should render text with compact styling', () => {
        const component = shallowWithTheme(<Text compact>Descriptive text</Text>);

        /* tslint:disable */
        (expect(toJson(component.dive())) as any).toHaveStyleRule('line-height', '1.25');
        /* tslint:enable */
    });

    it('should render a span when inline is set to true', () => {
        const component = shallowWithTheme(<Text inline>Descriptive text</Text>);

        expect(component.dive().find('span').length).toBe(1);
    });
});
