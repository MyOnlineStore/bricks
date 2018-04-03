import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Box from '.';

describe('Box', () => {
    it('aligns children to the right', () => {
        const component = shallow(<Box horizontal="right" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('aligns children in the center', () => {
        const component = shallow(<Box horizontal="center" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('aligns children to the bottom', () => {
        const component = shallow(<Box vertical="bottom" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('aligns children in the vertical center', () => {
        const component = shallow(<Box vertical="center" />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('can have a bleed to compensate for the margin of children', () => {
        const component = shallow(<Box bleed={[24, 0, 'auto']} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('prevents wrapping of children', () => {
        const component = shallow(<Box wrap={false} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('stretches the children', () => {
        const component = shallow(<Box horizontal="stretch" vertical="stretch" />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
