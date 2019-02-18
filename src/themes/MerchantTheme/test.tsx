import { mount, shallow } from 'enzyme';
import React from 'react';
import MerchantTheme from '../MerchantTheme';
import { Badge, Heading, ThemeType } from '../../index';
import { ThemeProvider } from '../../utility/styled/testing';
import 'jest-styled-components';

describe('MerchantTheme', () => {
    const HeadingHierarchyThemeType = {
        color: 'mockValue',
        fontFamily: 'mockValue',
        fontSize: 'mockValue',
        fontWeight: 'mockValue',
        lineHeight: 'mockValue',
        textTransform: 'mockValue',
    };

    const theme = {
        Heading: {
            default: {
                color: 'mockValue',
                fontFamily: 'mockValue',
                fontSize: 'mockValue',
                fontWeight: 'mockValue',
                lineHeight: 'mockValue',
                textTransform: 'mockValue',
            },
            hierarchy: {
                hierarchy1: HeadingHierarchyThemeType,
                hierarchy2: HeadingHierarchyThemeType,
                hierarchy3: HeadingHierarchyThemeType,
                hierarchy4: HeadingHierarchyThemeType,
                hierarchy5: HeadingHierarchyThemeType,
                hierarchy6: HeadingHierarchyThemeType,
            },
        },
    };

    // tslint:disable-next-line
    const context = (shallow(<MerchantTheme theme={theme as ThemeType} />) as any)
        .dive()
        .instance()
        .getChildContext();

    it('should render a component with merchant theme', () => {
        const component = mount(<Heading />, {
            context,
            childContextTypes: ThemeProvider.childContextTypes,
        });

        expect(() => component).not.toThrow();
        expect(component).toHaveStyleRule('color', 'mockValue');
    });

    it('should fallback on MosTheme when theme properties are undefined', () => {
        const component = mount(<Badge />, {
            context,
            childContextTypes: ThemeProvider.childContextTypes,
        });

        expect(() => component).not.toThrow();
    });
});
