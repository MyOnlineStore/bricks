import React from 'react';
import FoldOut from '../FoldOut';
import StyledFoldOut from '../FoldOut/style';
import { mount } from 'enzyme';

jest.mock('react-measure', () => {
    return jest.fn().mockImplementation(
        // tslint:disable-next-line:no-any
        (props: any) => props.children({ measureRef: () => undefined, contentRect: { client: { height: 900 } } }),
    );
});

describe('FoldOut', () => {
    // I can't get the toHaveStyleRule assertions to work here with sc5. They throw "No style rules found on passed Component". Even when using sc5's own test-utils to find them.
    // This seems to be an issue with babel-plugin-styled-components, see https://github.com/styled-components/jest-styled-components/issues/290.
    // One of these may fix the issue: https://github.com/styled-components/jest-styled-components/pull/302, https://github.com/styled-components/babel-plugin-styled-components/pull/269
    // If you find this comments after one of these PRs has been merged, please verify if the issue is resolved and reinstate the tests.

    it('should have a height when open', () => {
        const component = mount(<FoldOut open />);

        // expect(component).toHaveStyleRule('height', '900');
        expect(component.find(StyledFoldOut).prop('isOpen')).toBe(true);
    });

    it('should have no height when closed', () => {
        const component = mount(<FoldOut open={false} />);

        // expect(component).toHaveStyleRule('height', '0');
        expect(component.find(StyledFoldOut).prop('isOpen')).toBe(false);
    });
});
