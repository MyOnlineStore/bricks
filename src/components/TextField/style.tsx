import SeverityType from '../../types/_SeverityType';
import styled from '../../utility/_styled';

type TextFieldThemeType = {
    idle: {
        common: {
            borderRadius: string;
            borderColor: string;
            fontSize: string;
            fontFamily: string;
            color: string;
            background: string;
        };
        affix: {
            color: string;
            background: string;
        };
    };
    focus: {
        borderColor: string;
        boxShadow: string;
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

type AffixPropsType = {
    disabled?: boolean;
};

type WrapperPropsType = {
    focus: boolean;
    disabled?: boolean;
    severity?: SeverityType;
};

type InputPropsType = {
    disabled?: boolean;
};

const StyledInput = styled.input<InputPropsType>`
    width: 100%;
    border: none;
    margin: 0;
    background: ${({ theme, disabled }): string =>
        disabled ? theme.TextField.disabled.background : theme.TextField.idle.common.background};
    font-size: inherit;
    padding: 6px 12px;
    line-height: 1.572;
    outline: none;
    min-width: 12px;

    ${({ theme, disabled }): string =>
        disabled
            ? `
            color: ${theme.TextField.disabled.color};
            -moz-appearance: textfield;

            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
        }`
            : ''}
`;

const StyledAffixWrapper = styled.div<AffixPropsType>`
    display: flex;
    padding: 0 12px;
    user-select: none;
    background-color: ${({ theme }): string => theme.TextField.idle.affix.background};
    align-items: center;
    flex-shrink: 0;
    max-width: 40%;
    color: ${({ theme }): string => theme.TextField.idle.affix.color};

    &:first-child {
        border-right: solid 1px ${({ theme }): string => theme.TextField.idle.common.borderColor};
    }

    &:last-child {
        border-left: solid 1px ${({ theme }): string => theme.TextField.idle.common.borderColor};
    }
}
`;

const StyledAffix = styled.span`
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const StyledWrapper = styled.div<WrapperPropsType>`
    transition: border-color 100ms, box-shadow 100ms;
    font-size: ${({ theme }): string => theme.TextField.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.TextField.idle.common.fontFamily};
    border-radius: ${({ theme }): string => theme.TextField.idle.common.borderRadius};
    display: flex;
    cursor: text;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;

    ${({ focus, disabled, severity, theme }): string =>
        focus && !disabled
            ? `
            border: solid 1px ${severity ? theme.Text.severity[severity] : theme.TextField.focus.borderColor};
            box-shadow: ${severity ? theme.TextField.severity[severity].boxShadow : theme.TextField.focus.boxShadow};
            `
            : `border: solid 1px ${theme.TextField.idle.common.borderColor}`};

    * {
        cursor: text;
    }

}
`;

export { StyledWrapper, StyledInput, TextFieldThemeType, StyledAffix, StyledAffixWrapper };
