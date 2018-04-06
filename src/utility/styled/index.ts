/* tslint:disable */

import Component from 'react';
import * as styledComponents from 'styled-components';
import ThemeType from '../../themes/types/ThemeType';

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

export { css, injectGlobal, keyframes, ThemeProvider, StyledType };
export default styled;
