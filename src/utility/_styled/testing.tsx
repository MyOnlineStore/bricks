import React, { ReactNode } from 'react';
import * as styledComponents from 'styled-components';
import ThemeType from '../../types/ThemeType';
import { ReactWrapper, mount } from 'enzyme';
import MosTheme from '../../themes/MosTheme';

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeType>;

const mountWithTheme = (component: ReactNode): ReactWrapper => mount(<MosTheme>{component}</MosTheme>);

export { css, createGlobalStyle, keyframes, ThemeProvider, mountWithTheme };
export default styled;
