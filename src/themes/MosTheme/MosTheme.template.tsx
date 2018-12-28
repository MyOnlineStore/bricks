import React, { FunctionComponent } from 'react';
import { ThemeProvider } from '../../utility/_styled';
import theme from './MosTheme.theme';

const MosTheme: FunctionComponent = (props): JSX.Element => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MosTheme;
