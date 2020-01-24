import React, { FunctionComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import mosTheme from '../MosTheme/MosTheme.theme';
import deepmerge from 'deepmerge';
import RecursivePartialType from '../../types/RecursivePartialType';

type PropsType = {
    theme: RecursivePartialType<ThemeType>;
};

const mergeThemes = (theme: RecursivePartialType<ThemeType>): ThemeType => {
    return deepmerge(mosTheme, theme) as ThemeType;
};

const CustomTheme: FunctionComponent<PropsType> = (props): JSX.Element => (
    <ThemeProvider theme={mergeThemes(props.theme)}>
        <>{props.children}</>
    </ThemeProvider>
);

export default CustomTheme;
export { PropsType };
