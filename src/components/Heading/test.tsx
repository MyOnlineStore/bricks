import toJson from 'enzyme-to-json';
import React from 'react';
import Heading from '.';
import { shallowWithTheme } from '../../utility/styled/testing';
import MosTheme from '../../themes/MosTheme/MosTheme.theme';

describe('Heading', () => {
    it('should render a Heading component with default styling', () => {
        const defaultHeading = shallowWithTheme(<Heading />);

        expect(toJson(defaultHeading.dive())).toMatchSnapshot();
    });

    it('should render a Heading component with different hierarchy styles', () => {
        const h1 = shallowWithTheme(<Heading hierarchy={1} />);
        const h2 = shallowWithTheme(<Heading hierarchy={2} />);
        const h3 = shallowWithTheme(<Heading hierarchy={3} />);
        const h4 = shallowWithTheme(<Heading hierarchy={4} />);
        const h5 = shallowWithTheme(<Heading hierarchy={5} />);
        const h6 = shallowWithTheme(<Heading hierarchy={6} />);

        /* tslint:disable */
        (expect(toJson(h1.dive())) as any).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy1.fontSize);
        (expect(toJson(h2.dive())) as any).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy2.fontSize);
        (expect(toJson(h3.dive())) as any).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy3.fontSize);
        (expect(toJson(h4.dive())) as any).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy4.fontSize);
        (expect(toJson(h5.dive())) as any).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy5.fontSize);
        (expect(toJson(h6.dive())) as any).toHaveStyleRule('font-size', MosTheme.Heading.hierarchy6.fontSize);
        /* tslint:enable */
    });

    it('should render a Heading component with different elements', () => {
        const divHeading = shallowWithTheme(<Heading element="div" />);
        const spanHeading = shallowWithTheme(<Heading element="span" />);
        const pHeading = shallowWithTheme(<Heading element="p" />);
        const h1Heading = shallowWithTheme(<Heading element="h1" />);
        const h2Heading = shallowWithTheme(<Heading element="h2" />);
        const h3Heading = shallowWithTheme(<Heading element="h3" />);
        const h4Heading = shallowWithTheme(<Heading element="h4" />);
        const h5Heading = shallowWithTheme(<Heading element="h5" />);
        const h6Heading = shallowWithTheme(<Heading element="h6" />);

        /* tslint:disable */
        expect(toJson(divHeading.dive()).type).toBe('div');
        expect(toJson(spanHeading.dive()).type).toBe('span');
        expect(toJson(pHeading.dive()).type).toBe('p');
        expect(toJson(h1Heading.dive()).type).toBe('h1');
        expect(toJson(h2Heading.dive()).type).toBe('h2');
        expect(toJson(h3Heading.dive()).type).toBe('h3');
        expect(toJson(h4Heading.dive()).type).toBe('h4');
        expect(toJson(h5Heading.dive()).type).toBe('h5');
        expect(toJson(h6Heading.dive()).type).toBe('h6');
        /* tslint:enable */
    });

    it('should render a Heading component with light fontWeight', () => {
        const h1Light = shallowWithTheme(<Heading hierarchy={1} light={true} />);
        const h2Light = shallowWithTheme(<Heading hierarchy={2} light={true} />);
        const h3Light = shallowWithTheme(<Heading hierarchy={3} light={true} />);
        const h4Light = shallowWithTheme(<Heading hierarchy={4} light={true} />);
        const h5Light = shallowWithTheme(<Heading hierarchy={5} light={true} />);
        const h6Light = shallowWithTheme(<Heading hierarchy={6} light={true} />);
    const defaultLight = shallowWithTheme(<Heading light={true} />);

        /* tslint:disable */
        (expect(toJson(h1Light.dive())) as any).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy1.fontWeight.light);
        (expect(toJson(h2Light.dive())) as any).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy2.fontWeight.light);
        (expect(toJson(h3Light.dive())) as any).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy3.fontWeight.light);
        (expect(toJson(h4Light.dive())) as any).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy4.fontWeight.light);
        (expect(toJson(h5Light.dive())) as any).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy5.fontWeight.light);
        (expect(toJson(h6Light.dive())) as any).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy6.fontWeight.light);
        (expect(toJson(defaultLight.dive())) as any).toHaveStyleRule('font-weight', MosTheme.Heading.hierarchy1.fontWeight.light);
        /* tslint:enable */
    });
});
