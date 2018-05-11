import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Text from '.';
import MosTheme from '../../themes/MosTheme';

describe('Text',  () => {
    it('should render text with default styling', () => {
        const component = shallow(
            <MosTheme>
                <Text>Default text</Text>
            </MosTheme>
        ).dive();

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render text with strong styling', () => {
        const component = shallow(
            <MosTheme>
                <Text strong={true}>Strong text</Text>
            </MosTheme>
        ).dive();

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render text with descriptive styling', () => {
        const component = shallow(
            <MosTheme>
                <Text descriptive={true}>Descriptive text</Text>
            </MosTheme>
        ).dive();

        expect(toJson(component)).toMatchSnapshot();
    });
});
