import React, { SFC } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/_styled';

type PropsType = {
    theme: ThemeType;
};

const MerchantTheme: SFC<PropsType> = (props): JSX.Element => (
    <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
);

export default MerchantTheme;
export { PropsType };
