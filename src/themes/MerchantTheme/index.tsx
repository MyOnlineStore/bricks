import React, { FunctionComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/_styled';
import mosTheme from '../MosTheme/MosTheme.theme';
import deepmerge from 'deepmerge';
import RecursivePartialType from '../../types/_RecursivePartialType';

type PropsType = {
    theme: RecursivePartialType<ThemeType>;
};

const customTheme = (theme: RecursivePartialType<ThemeType>): ThemeType => {
    return deepmerge(mosTheme, theme) as ThemeType;
};

const MerchantTheme: FunctionComponent<PropsType> = (props): JSX.Element => (
    <ThemeProvider theme={customTheme(props.theme)}>
        <>{props.children}</>
    </ThemeProvider>
);

export default MerchantTheme;
export { PropsType };
