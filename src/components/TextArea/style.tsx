import styled from '../../utility/_styled';
import SeverityType from '../../types/_SeverityType';

type TextAreaWrapperPropsType = {
    disabled?: boolean;
    severity?: SeverityType;
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
            color: string;
            background: string;
        };
    };
    focus: {
        borderColor: string;
        boxShadow: string;
    };
    severity: {
        error: {
            borderColor: string;
            boxShadow: string;
        };
        success: {
            borderColor: string;
            boxShadow: string;
        };
        info: {
            borderColor: string;
            boxShadow: string;
        };
        warning: {
            borderColor: string;
            boxShadow: string;
        };
    };
    disabled: {
        color: string;
        background: string;
    };
};

const StyledTextAreaWrapper = styled.div<TextAreaWrapperPropsType>`
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: solid 1px ${({ theme }): string => theme.TextArea.idle.common.borderColor};
    border-radius: ${({ theme }): string => theme.TextArea.idle.common.borderRadius};
    background: ${({ theme, disabled }): string =>
        disabled ? theme.TextArea.disabled.background : theme.TextArea.idle.common.background};

    &:focus-within {
        ${({ severity, theme }): string =>
            `border: solid 1px ${
                severity ? theme.TextArea.severity[severity].borderColor : theme.TextArea.focus.borderColor
            }`};
        ${({ disabled, severity, theme }): string =>
            !disabled
                ? `box-shadow: ${
                      severity ? theme.TextArea.severity[severity].boxShadow : theme.TextArea.focus.boxShadow
                  }`
                : ''};
    }
`;

const StyledTextArea = styled.textarea<TextAreaPropsType>`
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
    line-height: 1.572;
    background: transparent;
    transition: border-color 100ms, box-shadow 100ms;
    font-size: ${({ theme }): string => theme.TextArea.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.TextArea.idle.common.fontFamily};
    color: ${({ theme }): string => theme.TextArea.idle.common.color};
    ${({ theme, disabled }): string => (disabled ? `color: ${theme.TextArea.disabled.color}` : '')}
    ${({ resizeable, disabled }): string => (disabled || !resizeable ? 'resize: none' : 'resize: vertical')};
`;

export default StyledTextArea;
export { StyledTextArea, StyledTextAreaWrapper, TextAreaThemeType };
