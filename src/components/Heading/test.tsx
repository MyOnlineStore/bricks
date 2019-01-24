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

        expect(h1).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy1.fontSize);
        expect(h2).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy2.fontSize);
        expect(h3).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy3.fontSize);
        expect(h4).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy4.fontSize);
        expect(h5).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy5.fontSize);
        expect(h6).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy6.fontSize);
    });

    it('should render a Heading component with light fontWeight', () => {
        const h1Light = mountWithTheme(<Heading hierarchy={1} light />);
        const h2Light = mountWithTheme(<Heading hierarchy={2} light />);
        const h3Light = mountWithTheme(<Heading hierarchy={3} light />);
        const h4Light = mountWithTheme(<Heading hierarchy={4} light />);
        const h5Light = mountWithTheme(<Heading hierarchy={5} light />);
        const h6Light = mountWithTheme(<Heading hierarchy={6} light />);
        const defaultLight = mountWithTheme(<Heading light />);

        expect(h1Light).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy1.fontWeight.light);
        expect(h2Light).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy2.fontWeight.light);
        expect(h3Light).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy3.fontWeight.light);
        expect(h4Light).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy4.fontWeight.light);
        expect(h5Light).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy5.fontWeight.light);
        expect(h6Light).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy6.fontWeight.light);
        expect(defaultLight).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy1.fontWeight.light);
    });
});
