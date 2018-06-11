import deepmerge from 'deepmerge';
import React, { StatelessComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import StyledContrast from './style';

type PropsType = {
    enable?: boolean;
};

const Contrast: StatelessComponent<PropsType> = (props): JSX.Element => {
    const contrastTheme = (theme: ThemeType): ThemeType => {
        return deepmerge(theme, theme.Contrast.overides as Partial<ThemeType>);
    };

    return props.enable === undefined || props.enable ? (
        <StyledContrast>
            <ThemeProvider theme={contrastTheme}>
                {props.children}
            </ThemeProvider>
        </StyledContrast>
    ) : (
        <div>{props.children}</div>
    );
};

export default Contrast;
export { PropsType };
