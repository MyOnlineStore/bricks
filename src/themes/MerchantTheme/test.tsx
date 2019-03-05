import { mount, shallow } from 'enzyme';
import React from 'react';
import MerchantTheme from '../MerchantTheme';
import Badge from '../../components/Badge';
import Heading from '../../components/Heading';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/_styled/testing';
import 'jest-styled-components';
import RecursivePartialType from '../../types/_RecursivePartialType';

describe('MerchantTheme', () => {
    const heading = {
        color: 'mockValue',
        fontFamily: 'mockValue',
        fontSize: 'mockValue',
        fontWeight: 'mockValue',
        lineHeight: 'mockValue',
        textTransform: 'mockValue',
    };

    const theme: RecursivePartialType<ThemeType> = {
        Heading: [heading, heading, heading, heading, heading, heading],
    };

    // tslint:disable-next-line
    const context = (shallow(<MerchantTheme theme={theme} />) as any)
        .dive()
        .instance()
        .getChildContext();

    it('should render a component with merchant theme', () => {
        const fn = () => {
            return mount(<Heading />, {
                context,
                childContextTypes: ThemeProvider.childContextTypes,
            });
        };

        expect(fn).not.toThrow();
        expect(fn()).toHaveStyleRule('color', 'mockValue');
    });

    it('should fallback on MosTheme when theme properties are undefined', () => {
        expect(() => {
            mount(<Badge />, {
                context,
                childContextTypes: ThemeProvider.childContextTypes,
            });
        }).not.toThrow();
    });
});
