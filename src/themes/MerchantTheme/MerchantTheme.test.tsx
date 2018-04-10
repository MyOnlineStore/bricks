import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import MerchantTheme from '../MerchantTheme';
import { PropsType } from './MerchantTheme.template';

describe('MerchantTheme', () => {
    it('should render the merchant theme', () => {
        const theme = { color: 'mockValue' };
        const component = shallow(<MerchantTheme theme={theme as PropsType['theme']} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
