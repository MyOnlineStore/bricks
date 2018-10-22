import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import MerchantTheme from '../MerchantTheme';
import { PropsType } from './MerchantTheme.template';

describe('MerchantTheme', () => {
    it('should render the merchant theme', () => {
        const HeadingHierarchyThemeType = {
            fontFamily: 'mockValue',
            fontSize: 'mockValue',
            fontWeight: 'mockValue',
            lineHeight: 'mockValue',
            color: 'mockValue',
        };

        const theme = {
            Heading: {
                hierarchy1: HeadingHierarchyThemeType,
                hierarchy2: HeadingHierarchyThemeType,
                hierarchy3: HeadingHierarchyThemeType,
                hierarchy4: HeadingHierarchyThemeType,
                hierarchy5: HeadingHierarchyThemeType,
                hierarchy6: HeadingHierarchyThemeType,
            },
        };

        const component = shallow(<MerchantTheme theme={theme as PropsType['theme']} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
