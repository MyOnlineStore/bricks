import deepmerge from 'deepmerge';
import React, { StatelessComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import StyledContrast from './style';

type PropsType = {
    enabled?: boolean;
};

const contrastTheme = (theme: ThemeType): ThemeType => {
    return deepmerge(theme, theme.Contrast.overides as Partial<ThemeType>);
};

const ContrastThemeProvider: StatelessComponent<{ enabled?: boolean }> = ({ enabled, children }): JSX.Element => (
    <ThemeProvider theme={!enabled ? (theme): ThemeType => theme : contrastTheme}>{children}</ThemeProvider>
);

const Contrast: StatelessComponent<PropsType> = (props): JSX.Element => (
    <StyledContrast>
        <ContrastThemeProvider enabled={props.enabled !== false}>{props.children}</ContrastThemeProvider>
    </StyledContrast>
);

export default Contrast;
export { ContrastThemeProvider, PropsType };
