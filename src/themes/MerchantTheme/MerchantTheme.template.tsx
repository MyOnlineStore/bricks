import React, { FunctionComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';

type PropsType = {
    theme: ThemeType;
};

const MerchantTheme: FunctionComponent<PropsType> = (props): JSX.Element => (
    <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
);

export default MerchantTheme;
export { PropsType };
