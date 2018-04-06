import React, { StatelessComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import themeSettings from './settings';

type PropsType = {

};

const MosTheme:StatelessComponent<PropsType> = (props):JSX.Element => {
    return (
        <ThemeProvider theme={themeSettings}>
            {props.children}
        </ThemeProvider>
    );
};

export default MosTheme;
export { PropsType };
