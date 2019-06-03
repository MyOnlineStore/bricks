import React, { FunctionComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import mosTheme from '../MosTheme/MosTheme.theme';
import deepmerge from 'deepmerge';
import RecursivePartialType from '../../types/RecursivePartialType';

type PropsType = {
    theme: RecursivePartialType<ThemeType>;
};

const customTheme = (theme: RecursivePartialType<ThemeType>): ThemeType => {
    return deepmerge(mosTheme, theme) as ThemeType;
};

const ExperimentalCustomTheme: FunctionComponent<PropsType> = (props): JSX.Element => (
    <ThemeProvider theme={customTheme(props.theme)}>
        <>{props.children}</>
    </ThemeProvider>
);

export default ExperimentalCustomTheme;
export { PropsType };
