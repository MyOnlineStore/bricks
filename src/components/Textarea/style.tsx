import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type TextareaPropsType = {
    resizeable?: boolean;
};

const StyledTextarea = withProps<TextareaPropsType>(styled.textarea)`
    border: 1px solid red;
`;

export default StyledTextarea;
export { TextareaPropsType };
