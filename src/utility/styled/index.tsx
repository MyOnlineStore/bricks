/* tslint:disable */
import React from 'react';
import * as styledComponents from 'styled-components';
import ThemeType from '../../types/ThemeType';

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

export { css, injectGlobal, keyframes, ThemeProvider, StyledType, StyledFunction, withProps };
export default styled;
