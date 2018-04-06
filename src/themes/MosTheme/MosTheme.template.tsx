import React, { StatelessComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './MosTheme.theme';

type PropsType = {

};

const MosTheme:StatelessComponent<PropsType> = (props):JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
};

export default MosTheme;
export { PropsType };
