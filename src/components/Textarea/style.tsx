import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';

type TextareaWrapperPropsType = {
    disabled?: boolean;
    severity: SeverityType;
};

type TextareaPropsType = {
    resizeable?: boolean;
    disabled?: boolean;
};

type TextareaThemeType = {
    idle: {
        common: {
            borderRadius: string;
            borderColor: string;
            fontSize: string;
            fontFamily: string;
            background: string;
        };
    };
    severity: {
        error: { boxShadow: string };
        success: { boxShadow: string };
        info: { boxShadow: string };
        warning: { boxShadow: string };
    };
    disabled: {
        color: string;
        background: string;
    };
};

const StyledTextareaWrapper = withProps<TextareaWrapperPropsType>(styled.div)`
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: solid 1px ${({ theme }): string => theme.Textarea.idle.common.borderColor}
    border-radius: ${({ theme }): string => theme.Textarea.idle.common.borderRadius};
    background: ${({ theme, disabled }): string =>
        disabled ? theme.Textarea.disabled.background : theme.Textarea.idle.common.background};

    &:focus-within {
        ${({ severity, theme }): string => `border: solid 1px ${theme.Text.severity[severity].color}`};
        ${({ disabled, severity, theme }): string =>
            !disabled ? `box-shadow: ${theme.Textarea.severity[severity].boxShadow}` : ''};
    }
`;

const StyledTextarea = withProps<TextareaPropsType>(styled.textarea)`
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
    line-height: 1.572;
    background: transparent;
    transition: border-color 100ms, box-shadow 100ms;
    font-size: ${({ theme }): string => theme.Textarea.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.Textarea.idle.common.fontFamily};
    ${({ theme, disabled }): string => (disabled ? `color: ${theme.Textarea.disabled.color}` : '')}
    ${({ resizeable, disabled }): string => (disabled || !resizeable ? 'resize: none' : 'resize: vertical')};
`;

export default StyledTextarea;
export { TextareaPropsType, StyledTextarea, StyledTextareaWrapper, TextareaThemeType };
