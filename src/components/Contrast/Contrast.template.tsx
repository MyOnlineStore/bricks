import deepmerge from 'deepmerge';
import React, { StatelessComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { StyledType, ThemeProvider } from '../../utility/styled';
import StyledContrast from './Contrast.style';

const Contrast:StatelessComponent<StyledType> = (props):JSX.Element => {
    const contrastTheme = (theme:ThemeType):ThemeType => {
        return deepmerge(theme, theme.Contrast.overides as Partial<ThemeType>);
    };

    return (
        <StyledContrast>
            <ThemeProvider theme={contrastTheme}>
                {props.children}
            </ThemeProvider>
        </StyledContrast>
    );
};

export default Contrast;
