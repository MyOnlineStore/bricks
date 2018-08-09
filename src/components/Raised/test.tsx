import { shallowWithTheme } from '../../utility/styled/testing';
import React from 'react';
import Raised from '.';
import MosTheme from '../../themes/MosTheme/MosTheme.theme';

describe('Raised', () => {
    it('should not have a box-shadow on level 0', () => {
        const component = shallowWithTheme(<Raised level={0} />);

        /* tslint:disable */
        (expect(component) as any).not.toHaveStyleRule('box-shadow');
        /* tslint:enable */
    });

    it('should render a box-shadow on level 1', () => {
        const component = shallowWithTheme(<Raised level={1} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('box-shadow', MosTheme.Raised.level1.boxShadow);
        /* tslint:enable */
    });

    it('should render a bigger box-shadow on level 2', () => {
        const component = shallowWithTheme(<Raised level={2} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('box-shadow', MosTheme.Raised.level2.boxShadow);
        /* tslint:enable */
    });
});
