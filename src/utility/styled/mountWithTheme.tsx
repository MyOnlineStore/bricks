import { mount, ReactWrapper, shallow } from 'enzyme';
import React from 'react';
import MosTheme from '../../themes/MosTheme';

/* tslint:disable */
const mountWithTheme = (component:JSX.Element):ReactWrapper => {
    const ThemeProvider = (shallow(<MosTheme />) as any).dive();

    const context = ThemeProvider
        .instance()
        .getChildContext();

    return mount(component, { context, childContextTypes: ThemeProvider.childContextTypes });
};
/* tslint:enable */

export default mountWithTheme;
