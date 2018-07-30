import deepmerge from 'deepmerge';
import React, { StatelessComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import StyledContrast from './style';

type PropsType = {
    enable?: boolean;
};

const contrastTheme = (theme: ThemeType): ThemeType => {
    return deepmerge(theme, theme.Contrast.overides as Partial<ThemeType>);
};

const ContrastThemeProvider: StatelessComponent<{ enable?: boolean }> = ({ enable, children }): JSX.Element => (
    <ThemeProvider theme={!enable ? (theme): ThemeType => theme : contrastTheme}>{children}</ThemeProvider>
);

const Contrast: StatelessComponent<PropsType> = (props): JSX.Element => (
    <StyledContrast>
        <ContrastThemeProvider enable={props.enable !== false}>{props.children}</ContrastThemeProvider>
    </StyledContrast>
);

export default Contrast;
export { ContrastThemeProvider, PropsType };
