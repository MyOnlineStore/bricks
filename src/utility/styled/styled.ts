import Component from 'react';
import * as styledComponents from 'styled-components';
import { ThemeType } from '../../themes';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeType>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
