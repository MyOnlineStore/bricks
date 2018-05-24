/* tslint:disable */
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import React, { Component } from 'react';
import * as styledComponents from 'styled-components';
import MosTheme from '../../themes/MosTheme';
import theme from '../../themes/MosTheme/MosTheme.theme';
import ThemeType from '../../types/ThemeType';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
    ThemeType
>;

type StyledType = {
    theme?: ThemeType;
    className?: string;
    innerRef?: any;
};

const shallowWithTheme = (component: JSX.Element): ShallowWrapper => {
    const context = (shallow(<ThemeProvider theme={theme} />) as any)
        .instance()
        .getChildContext();

    return shallow(component, { context });
};

const mountWithTheme = (component: JSX.Element): ReactWrapper => {
    const context = (shallow(<ThemeProvider theme={theme} />) as any)
        .instance()
        .getChildContext();

    return mount(component, {
        context,
        childContextTypes: ThemeProvider.childContextTypes,
    });
};

export {
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
    StyledType,
    shallowWithTheme,
    mountWithTheme,
};
export default styled;
