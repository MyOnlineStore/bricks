import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/_styled';
import SeverityType from '../../types/_SeverityType';

type TextAreaWrapperPropsType = {
    disabled?: boolean;
    severity: SeverityType;
};

type TextAreaPropsType = {
    resizeable?: boolean;
    disabled?: boolean;
};

type TextAreaThemeType = {
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

const StyledTextAreaWrapper = withProps<TextAreaWrapperPropsType>(styled.div)`
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: solid 1px ${({ theme }): string => theme.TextArea.idle.common.borderColor}
    border-radius: ${({ theme }): string => theme.TextArea.idle.common.borderRadius};
    background: ${({ theme, disabled }): string =>
        disabled ? theme.TextArea.disabled.background : theme.TextArea.idle.common.background};

    &:focus-within {
        ${({ severity, theme }): string => `border: solid 1px ${theme.Text.severity[severity]}`};
        ${({ disabled, severity, theme }): string =>
            !disabled ? `box-shadow: ${theme.TextArea.severity[severity].boxShadow}` : ''};
    }
`;

const StyledTextArea = withProps<TextAreaPropsType>(styled.textarea)`
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
    line-height: 1.572;
    background: transparent;
    transition: border-color 100ms, box-shadow 100ms;
    font-size: ${({ theme }): string => theme.TextArea.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.TextArea.idle.common.fontFamily};
    ${({ theme, disabled }): string => (disabled ? `color: ${theme.TextArea.disabled.color}` : '')}
    ${({ resizeable, disabled }): string => (disabled || !resizeable ? 'resize: none' : 'resize: vertical')};
`;

export default StyledTextArea;
export { TextAreaPropsType, StyledTextArea, StyledTextAreaWrapper, TextAreaThemeType };
