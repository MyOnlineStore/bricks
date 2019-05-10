import React from 'react';
import FoldOut from '../FoldOut';
import 'jest-styled-components';
import { mountWithTheme } from '../../utility/styled/testing';

jest.mock('react-measure', () => {
    return jest.fn().mockImplementation(
        // tslint:disable-next-line:no-any
        (props: any) => props.children({ measureRef: () => undefined, contentRect: { bounds: { height: 900 } } }),
    );
});

describe('FoldOut', () => {
    it('should have a height when open', () => {
        const component = mountWithTheme(<FoldOut open />);

        expect(component).toHaveStyleRule('height', '900px');
    });

    it('should have no height when closed', () => {
        const component = mountWithTheme(<FoldOut open={false} />);

        expect(component).toHaveStyleRule('height', '0');
    });
});
