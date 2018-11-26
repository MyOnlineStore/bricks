import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Seperated from '.';

describe('Separated', () => {
    it('should add seperation to the first item when before is set', () => {
        const component = mountWithTheme(
            <Seperated before>
                <span data-test="A" />
                <span data-test="B" />
                <span data-test="C" />
            </Seperated>,
        );

        // tslint:disable-next-line:no-any
        (expect(component.find('[data-test="A"]').parent()) as any).toHaveStyleRule('margin-top', '12px');
    });

    it('should add seperation to the last item when after is set', () => {
        const component = mountWithTheme(
            <Seperated after>
                <span data-test="A" />
                <span data-test="B" />
                <span data-test="C" />
            </Seperated>,
        );

        // tslint:disable-next-line:no-any
        (expect(component.find('[data-test="C"]').parent()) as any).toHaveStyleRule('margin-bottom', '12px');
    });

    it('should add seperation to the first/last item when after is set', () => {
        const component = mountWithTheme(
            <Seperated after>
                <span data-test="A" />
            </Seperated>,
        );

        // tslint:disable-next-line:no-any
        (expect(component.find('[data-test="A"]').parent()) as any).toHaveStyleRule('margin-bottom', '12px');
    });
});
