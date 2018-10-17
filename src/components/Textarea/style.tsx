import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';

type TextareaPropsType = {
    resizeable?: boolean;
    disabled?: boolean;
    focus?: boolean;
    severity: SeverityType;
};

const StyledTextareaWrapper = withProps<TextareaPropsType>(styled.div)`
    box-sizing: border-box;
    padding: 12px;
    display: inline-block;
    width: 100%;
    border-radius: ${({ theme }): string => theme.TextField.idle.common.borderRadius};
    background: ${({ theme, disabled }): string =>
        disabled ? theme.TextField.disabled.background : theme.TextField.idle.common.background};

        border: solid 1px ${({ theme }): string => theme.TextField.idle.common.borderColor}


    &:focus-within {
        ${({ severity, theme }): string => `border: solid 1px ${theme.Text.severity[severity].color}`};

        ${({ disabled, severity, theme }): string =>
            !disabled ? `box-shadow: ${theme.TextField.severity[severity].boxShadow}` : ''};
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
