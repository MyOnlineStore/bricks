import React, { FunctionComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import mosTheme from '../MosTheme/MosTheme.theme';
import mosCorporateTheme from './theme';
import deepmerge from 'deepmerge';

const MosCorporateTheme: FunctionComponent<{}> = (props): JSX.Element => (
    <ThemeProvider theme={deepmerge(mosTheme, mosCorporateTheme) as ThemeType}>
        <>{props.children}</>
    </ThemeProvider>
);

export default MosCorporateTheme;
