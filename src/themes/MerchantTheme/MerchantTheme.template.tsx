import React, { StatelessComponent } from 'react';
import { ThemeProvider } from '../../utility/styled';
import ThemeType from '../types/ThemeType';

type PropsType = {
    theme:ThemeType;
};

const MerchantTheme:StatelessComponent<PropsType> = (props):JSX.Element => (
    <ThemeProvider theme={props.theme}>
        {props.children}
    </ThemeProvider>
);

export default MerchantTheme;
export {
    PropsType,
};
