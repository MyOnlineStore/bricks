import toJson from 'enzyme-to-json';
import React from 'react';
import Text from '.';
import { shallowWithTheme } from '../../utility/styled';

describe('Text', () => {
    it('should render text with default styling', () => {
        const component = shallowWithTheme(<Text>Default text</Text>);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render text with strong styling', () => {
        const component = shallowWithTheme(
            <Text strong={true}>Strong text</Text>,
        );

        /* tslint:disable */
        (expect(toJson(component)) as any).toHaveStyleRule(
            'font-weight',
            '700',
        );
        /* tslint:enable */
    });

    it('should render text with descriptive styling', () => {
        const component = shallowWithTheme(
            <Text descriptive={true}>Descriptive text</Text>,
        );

        /* tslint:disable */
        (expect(toJson(component)) as any).toHaveStyleRule('color', '#a6aab3');
        /* tslint:enable */
    });
});
