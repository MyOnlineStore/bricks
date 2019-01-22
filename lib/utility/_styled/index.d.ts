/// <reference types="react" />
import * as styledComponents from 'styled-components';
import ThemeType from '../../types/ThemeType';
declare const styled: styledComponents.ThemedBaseStyledInterface<ThemeType>, css: styledComponents.BaseThemedCssFunction<ThemeType>, createGlobalStyle: <P extends object = {}>(first: TemplateStringsArray | styledComponents.CSSObject | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, ThemeType>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, ThemeType>>[]) => styledComponents.GlobalStyleComponent<P, ThemeType>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<ThemeType, ThemeType>, any>;
export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
