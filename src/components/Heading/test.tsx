import React from 'react';
import Heading from '.';
import { mountWithTheme } from '../../utility/_styled/testing';
import MosTheme from '../../themes/MosTheme/MosTheme.theme';
import 'jest-styled-components';

describe('Heading', () => {
    it('should render a Heading component with different hierarchy styles', () => {
        const h1 = mountWithTheme(<Heading hierarchy={1} />);
        const h2 = mountWithTheme(<Heading hierarchy={2} />);
        const h3 = mountWithTheme(<Heading hierarchy={3} />);
        const h4 = mountWithTheme(<Heading hierarchy={4} />);
        const h5 = mountWithTheme(<Heading hierarchy={5} />);
        const h6 = mountWithTheme(<Heading hierarchy={6} />);

        expect(h1).toHaveStyleRule('font-size', MosTheme.Heading[0].fontSize);
        expect(h2).toHaveStyleRule('font-size', MosTheme.Heading[1].fontSize);
        expect(h3).toHaveStyleRule('font-size', MosTheme.Heading[2].fontSize);
        expect(h4).toHaveStyleRule('font-size', MosTheme.Heading[3].fontSize);
        expect(h5).toHaveStyleRule('font-size', MosTheme.Heading[4].fontSize);
        expect(h6).toHaveStyleRule('font-size', MosTheme.Heading[5].fontSize);
    });
});
