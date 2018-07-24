import deepmerge from 'deepmerge';
import React, { StatelessComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import StyledContrast from './style';

type PropsType = {
    enable?: boolean;
    theme?: ThemeType;
};

const contrastTheme = (theme: ThemeType): ThemeType => {
    return deepmerge(theme, theme.Contrast.overides as Partial<ThemeType>);
};

const Contrast: StatelessComponent<PropsType> = (props): JSX.Element => (
    <StyledContrast>
        <ContrastThemeProvider isEnabled={props.enable}>{props.children}</ContrastThemeProvider>
    </StyledContrast>
);

const ContrastThemeProvider: StatelessComponent<{ isEnabled?: boolean }> = ({ isEnabled, children }): JSX.Element => (
    <ThemeProvider theme={!isEnabled ? (theme): ThemeType => theme : contrastTheme}>{children}</ThemeProvider>
);

export default Contrast;
export { ContrastThemeProvider, PropsType };
