import { shallowWithTheme } from '../../utility/styled';
import React from 'react';
import Raised from '.';
import MosTheme from '../../themes/MosTheme/MosTheme.theme';

describe('Raised', () => {
    it('shouldn\'t have a box-shadow', () => {
        const component = shallowWithTheme(<Raised level={0} />);

        /* tslint:disable */
        (expect(component) as any).not.toHaveStyleRule('box-shadow');
        /* tslint:enable */
    });

    it('should render a box-shadow like the MosTheme level1', () => {
        const component = shallowWithTheme(<Raised level={1} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('box-shadow', MosTheme.Raised.level1.boxShadow);
        /* tslint:enable */
    });

    it('should render a box-shadow like the MosTheme level2', () => {
        const component = shallowWithTheme(<Raised level={2} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('box-shadow', MosTheme.Raised.level2.boxShadow);
        /* tslint:enable */
    });
})
