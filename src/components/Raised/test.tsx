import { mountWithTheme } from '../../utility/_styled/testing';
import React from 'react';
import Raised from '.';
import MosTheme from '../../themes/MosTheme/MosTheme.theme';
import 'jest-styled-components';

describe('Raised', () => {
    it('should not have a box-shadow on level 0', () => {
        const component = mountWithTheme(<Raised level={0} />);

        expect(component).not.toHaveStyleRule('box-shadow', expect.any(String));
    });

    it('should render a box-shadow on level 1', () => {
        const component = mountWithTheme(<Raised level={1} />);

        expect(component).toHaveStyleRule('box-shadow', MosTheme.Raised.level1.boxShadow);
    });

    it('should render a bigger box-shadow on level 2', () => {
        const component = mountWithTheme(<Raised level={2} />);

        expect(component).toHaveStyleRule('box-shadow', MosTheme.Raised.level2.boxShadow);
    });
});
