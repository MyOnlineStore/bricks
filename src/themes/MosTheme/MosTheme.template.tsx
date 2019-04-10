import React, { FC } from 'react';
import { ThemeProvider } from '../../utility/_styled';
import theme from './MosTheme.theme';

const MosTheme: FC = (props): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <>{props.children}</>
        </ThemeProvider>
    );
};

export default MosTheme;
