import deepmerge from 'deepmerge';
import React, { Component, forwardRef, StatelessComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import StyledContrast, { withContrastStyles } from './style';

type PropsType = {
    enable?: boolean;
    theme?: ThemeType;
};

const contrastTheme = (theme: ThemeType): ThemeType => {
    return deepmerge(theme, theme.Contrast.overides as Partial<ThemeType>);
};

const Contrast: StatelessComponent<PropsType> = (props): JSX.Element => {
    return props.enable === undefined || props.enable ? (
        <StyledContrast>
            <ThemeProvider theme={contrastTheme}>{props.children}</ThemeProvider>
        </StyledContrast>
    ) : (
        <div>{props.children}</div>
    );
};

const withContrast = (WrappedComponent: any): any => {
    class ComponentWithContrast extends Component<any, any> {
        public render(): JSX.Element {
            const ComponentWithContrast = withContrastStyles(WrappedComponent);
            const { contrastEnabled, ...filteredProps } = this.props;

            return contrastEnabled ? (
                <ThemeProvider ref={this.props.forwardedRef} theme={contrastTheme}>
                    <ComponentWithContrast {...filteredProps} />
                </ThemeProvider>
            ) : (
                <Component ref={this.props.forwardedRef} {...filteredProps} />
            );
        }
    }

    return forwardRef((props: any, ref: any): any => <ComponentWithContrast {...props} forwardedRef={ref} />);
};

export default Contrast;
export { PropsType, withContrast };
