import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import BoxItem from '.';

describe('BoxItem', () => {
    it('aligns children to the right', () => {
        const component = shallow(<BoxItem size="auto" horizontal="right" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('aligns children in the center', () => {
        const component = shallow(<BoxItem size="auto" horizontal="center" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('aligns children to the bottom', () => {
        const component = shallow(<BoxItem size="auto" vertical="bottom" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('aligns children in the vertical center', () => {
        const component = shallow(<BoxItem size="auto" vertical="center" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('creates a gutter around it', () => {
        const component = shallow(<BoxItem size="auto" gutter={[0, 12, 24, 'auto']} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('prevents wrapping of children', () => {
        const component = shallow(<BoxItem size="auto" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('stretches the children', () => {
        const component = shallow(<BoxItem size="auto" horizontal="stretch" vertical="stretch" />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
