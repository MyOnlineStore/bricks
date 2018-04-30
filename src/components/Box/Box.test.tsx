import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Box from '.';

describe('Box', () => {
    it('aligns children to the right', () => {
        const component = shallow(<Box justifyContent="flex-end" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('aligns children in the center', () => {
        const component = shallow(<Box justifyContent="center" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('aligns children to the bottom', () => {
        const component = shallow(<Box alignItems="flex-end" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('aligns children in the vertical center', () => {
        const component = shallow(<Box alignItems="center" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('can change direction', () => {
        const component = shallow(<Box direction="column" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('can have a margin', () => {
        const component = shallow(<Box margin={[24, 0, 'auto']} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('prevents wrapping of children', () => {
        const component = shallow(<Box wrap={false} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('stretches the children', () => {
        const component = shallow(<Box justifyContent="stretch" alignItems="stretch" alignContent="stretch" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('can shrink', () => {
        const component = shallow(<Box shrink={1} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('can grow', () => {
        const component = shallow(<Box grow={1} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('can have a specific size', () => {
        const component = shallow(<Box basis="calc(25% - 24px)" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('can be rearranged by order', () => {
        const component = shallow(<Box order={1} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('can align itself differently then its siblings', () => {
        const component = shallow(<Box alignSelf="flex-end" />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
