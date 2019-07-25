import { mount } from 'enzyme';
import React from 'react';
import TextualButton from '.';
import MosTheme from '../../themes/MosTheme';
import 'jest-styled-components';

describe('Button', () => {
    it('should render the title as content when no children are provided', () => {
        const component = mount(
            <MosTheme>
                <TextualButton title="foo" variant="primary" />
            </MosTheme>,
        );

        expect(component.find(TextualButton).text()).toEqual('foo');
    });
});
