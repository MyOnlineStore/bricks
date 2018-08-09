/* tslint:disable */
import React from 'react';
import * as styledComponents from 'styled-components';
import ThemeType from '../../types/ThemeType';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import theme from '../../themes/MosTheme/MosTheme.theme';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeType>;

type StyledType = {
    theme?: ThemeType;
    className?: string;
    innerRef?: any;
};

type StyledFunction<T> = styledComponents.ThemedStyledFunction<T, ThemeType>;

function withProps<T, U extends HTMLElement = HTMLElement>(
    styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
    return styledFunction;
}

/* tslint:disable */
const shallowWithTheme = (component: JSX.Element): ShallowWrapper => {
    const context = (shallow(<ThemeProvider theme={theme} />) as any).instance().getChildContext();

    return shallow(component, { context });
};

const mountWithTheme = (component: JSX.Element): ReactWrapper => {
    const context = (shallow(<ThemeProvider theme={theme} />) as any).instance().getChildContext();

    return mount(component, {
        context,
        childContextTypes: ThemeProvider.childContextTypes,
    });
};

/* tslint:enable */

export {
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
    StyledType,
    StyledFunction,
    shallowWithTheme,
    mountWithTheme,
    withProps,
};
export default styled;
