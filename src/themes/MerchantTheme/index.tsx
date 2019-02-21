import React, { FunctionComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import { default as mosTheme } from '../MosTheme/MosTheme.theme';
import deepmerge from 'deepmerge';

type PropsType = {
    theme: ThemeType;
};

const customTheme = (theme: ThemeType): ThemeType => {
    return deepmerge(mosTheme, theme);
};

const MerchantTheme: FunctionComponent<PropsType> = (props): JSX.Element => (
    <ThemeProvider theme={customTheme(props.theme)}>{props.children}</ThemeProvider>
);

export default MerchantTheme;
export { PropsType };