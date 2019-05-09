import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Seperated from '.';
import 'jest-styled-components';

describe('Separated', () => {
    it('should add seperation to the first item when before is set', () => {
        const component = mountWithTheme(
            <Seperated before>
                <span data-test="A" />
                <span data-test="B" />
                <span data-test="C" />
            </Seperated>,
        );

        expect(component.find('[data-test="A"]').parent()).toHaveStyleRule('margin-top', '12px');
    });

    it('should add seperation to the last item when after is set', () => {
        const component = mountWithTheme(
            <Seperated after>
                <span data-test="A" />
                <span data-test="B" />
                <span data-test="C" />
            </Seperated>,
        );

        expect(component.find('[data-test="C"]').parent()).toHaveStyleRule('margin-bottom', '12px');
    });

    it('should add seperation to the first/last item when after is set', () => {
        const component = mountWithTheme(
            <Seperated after>
                <span data-test="A" />
            </Seperated>,
        );

        expect(component.find('[data-test="A"]').parent()).toHaveStyleRule('margin-bottom', '12px');
    });
});
