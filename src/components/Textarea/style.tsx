import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type TextareaPropsType = {
    resizeable?: boolean;
    disabled?: boolean;
    focus?: boolean;
};

const StyledTextareaWrapper = withProps<TextareaPropsType>(styled.div)`
    box-sizing: border-box;
    padding: 12px;
    display: inline-block;
    width: 100%;
    border-radius: ${({ theme }): string => theme.TextField.idle.common.borderRadius};
    border: solid 1px ${({ theme }): string => theme.TextField.idle.common.borderColor};
    background: ${({ theme, disabled }): string =>
        disabled ? theme.TextField.disabled.background : theme.TextField.idle.common.background};

    &:focus-within {
        border: solid 1px ${({ theme, disabled }): string =>
            !disabled ? theme.TextField.focus.borderColor : theme.TextField.idle.common.borderColor};
            box-shadow: ${({ theme, disabled }): string => (!disabled ? theme.TextField.focus.boxShadow : '')};
    }
`;

const StyledTextarea = withProps<TextareaPropsType>(styled.textarea)`
    width: 100%;
    border: none;
    background: transparent
    font-size: inherit;
    ${({ resizeable, disabled }): string => (disabled || !resizeable ? 'resize: none' : 'resize: vertical')};
    line-height: 1.572;
    outline: none;
    ${({ theme, disabled }): string => (disabled ? `color: ${theme.TextField.disabled.color}` : '')}
    font-size: ${({ theme }): string => theme.TextField.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.TextField.idle.common.fontFamily};
    display: flex;
    position: relative;
    transition: border-color 100ms, box-shadow 100ms;
    padding: 0;
`;

export default StyledTextarea;
export { TextareaPropsType, StyledTextarea, StyledTextareaWrapper };
