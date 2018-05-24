import React, { StatelessComponent } from 'react';
import { ThemeProvider } from '../../utility/styled';
import theme from './MosTheme.theme';

const MosTheme: StatelessComponent = (props): JSX.Element => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MosTheme;
