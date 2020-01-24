import * as styledComponents from 'styled-components';
import ThemeType from '../../types/ThemeType';

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeType>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
