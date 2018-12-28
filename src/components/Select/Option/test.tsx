import React from 'react';
import { mountWithTheme } from '../../../utility/_styled/testing';
import Option from '.';
import toJson from 'enzyme-to-json';

describe('Option', () => {
    it('should render', () => {
        const component = mountWithTheme(
            <Option
                label="test"
                isSelected={true}
                isTargeted={false}
                onClick={(): void => {
                    return undefined;
                }}
                onMouseEnter={(): void => {
                    return undefined;
                }}
            />,
        );

        expect(toJson(component)).toMatchSnapshot();
    });
});
