import React from 'react';
import * as styledComponents from 'styled-components';
import ThemeType from '../../types/ThemeType';
declare const styled: styledComponents.ThemedBaseStyledInterface<ThemeType>, css: styledComponents.ThemedCssFunction<ThemeType>, injectGlobal: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => void, keyframes: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => string, ThemeProvider: React.ComponentClass<styledComponents.ThemeProviderProps<ThemeType>, any>;
declare type StyledType = {
    theme?: ThemeType;
    className?: string;
    innerRef?: any;
};
declare type StyledFunction<T> = styledComponents.ThemedStyledFunction<T, ThemeType>;
declare function withProps<T, U extends HTMLElement = HTMLElement>(styledFunction: StyledFunction<React.HTMLProps<U>>): StyledFunction<T & React.HTMLProps<U>>;
export { css, injectGlobal, keyframes, ThemeProvider, StyledType, StyledFunction, withProps };
export default styled;
