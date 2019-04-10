import deepmerge from 'deepmerge';
import React, { FC } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/_styled';
import StyledContrast from './style';

type PropsType = {
    enable?: boolean;
};

const contrastTheme = (theme: ThemeType): ThemeType => {
    return deepmerge(theme, theme.Contrast.overides as Partial<ThemeType>);
};

const ContrastThemeProvider: FC<PropsType> = ({ enable, children }): JSX.Element => (
    <ThemeProvider theme={!enable ? (theme): ThemeType => theme : contrastTheme}>
        <>{children}</>
    </ThemeProvider>
);

const Contrast: FC<PropsType> = (props): JSX.Element => (
    <StyledContrast>
        <ContrastThemeProvider enable={props.enable !== false}>{props.children}</ContrastThemeProvider>
    </StyledContrast>
);

export default Contrast;
export { ContrastThemeProvider, PropsType };
