import React from 'react';
import { adminTheme } from '../../../src/themes';
import { ThemeProvider } from '../../../src/utility/styled';

const themeDecorator = (story:Function):JSX.Element => (
    <ThemeProvider theme={adminTheme}>{story()}</ThemeProvider>
);

export default themeDecorator;
