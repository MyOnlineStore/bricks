import deepmerge from 'deepmerge';
import React, { Component } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import StyledContrast from './style';
import { withTheme } from 'styled-components';

type PropsType = {
    enable?: boolean;
    theme?: ThemeType;
};

class Contrast extends Component<PropsType> {
    public contrastTheme: ThemeType;

    public constructor(props: PropsType) {
        super(props);
        const theme = props.theme as ThemeType;

        this.contrastTheme = deepmerge(theme, theme.Contrast.overides as Partial<ThemeType>);
    }

    public render(): JSX.Element {
        return this.props.enable === undefined || this.props.enable ? (
            <StyledContrast>
                <ThemeProvider theme={this.contrastTheme}>{this.props.children}</ThemeProvider>
            </StyledContrast>
        ) : (
            <div>{this.props.children}</div>
        );
    }
}

export default withTheme(Contrast);
export { PropsType };
