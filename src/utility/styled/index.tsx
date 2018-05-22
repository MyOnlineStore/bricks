/* tslint:disable */
import React, { Component } from 'react';
import * as styledComponents from 'styled-components';
import ThemeType from '../../types/ThemeType';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import MosTheme from '../../themes/MosTheme';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeType>;

type StyledType = {
    theme?:ThemeType;
    className?:string;
};

/* tslint:disable */
const shallowWithTheme = (component:JSX.Element):ShallowWrapper => {
    const context = (shallow(<MosTheme />) as any)
        .dive()
        .instance()
        .getChildContext();

    return shallow(component, { context });
};

const mountWithTheme = (component:JSX.Element):ReactWrapper => {
    const ThemeProvider = (shallow(<MosTheme />) as any).dive();
    const context = ThemeProvider
        .instance()
        .getChildContext();
    return mount(component, { context, childContextTypes: ThemeProvider.childContextTypes });
};

/* tslint:enable */

export { css, injectGlobal, keyframes, ThemeProvider, StyledType, shallowWithTheme, mountWithTheme };
export default styled;
