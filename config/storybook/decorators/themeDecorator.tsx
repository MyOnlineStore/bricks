import React from 'react';
import MosTheme from '../../../src/themes/MosTheme';

const themeDecorator = (story:Function):JSX.Element => (
    <MosTheme>{story()}</MosTheme>
);

export default themeDecorator;
