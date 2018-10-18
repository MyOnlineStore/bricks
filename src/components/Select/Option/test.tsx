import React from 'react';
import Option from '.';
import toJson from 'enzyme-to-json';
import { mountWithTheme } from '../../../utility/styled/testing';

describe('Option', () => {
    it('should render', () => {
        const component = mountWithTheme(
            <Option label="test" isSelected={true} isTargeted={false} onClick={undefined} onMouseEnter={undefined} />,
        );

        expect(toJson(component)).toMatchSnapshot();
    });
});
