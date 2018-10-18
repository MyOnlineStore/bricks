import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import SeverityType from '../../types/SeverityType';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

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

type AffixProps = {
    disabled?: boolean;
};

type WrapperProps = {
    focus: boolean;
    disabled?: boolean;
    severity: SeverityType;
};

type InputProps = {
    disabled?: boolean;
};

const StyledInput = withProps<InputProps, HTMLInputElement>(styled.input)`
    width: 100%;
    border: none;
    background: ${({ theme, disabled }): string =>
        disabled ? theme.TextField.disabled.background : theme.TextField.idle.common.background};
    font-size: inherit;
    padding: 6px 12px;
    line-height: 1.572;
    outline: none;
    ${({ theme, disabled }): string => (disabled ? `color: ${theme.TextField.disabled.color}` : '')}
`;

const StyledAffixWrapper = withProps<AffixProps, HTMLDivElement>(styled.div)`
    display: flex;
    padding: 0 12px;
    user-select: none;
    background-color: ${({ theme }): string => theme.TextField.idle.affix.background};
    align-items: center;
    flex-shrink: 0;
    max-width: 40%;
    color: ${({ theme, disabled }): string =>
        disabled ? theme.TextField.disabled.color : theme.TextField.idle.affix.color}

    &:first-child {
        border-right: solid 1px ${({ theme }): string => theme.TextField.idle.common.borderColor};
    }

    &:last-child {
        border-left: solid 1px ${({ theme }): string => theme.TextField.idle.common.borderColor};
    }
`;

const StyledAffix = styled.span`
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const StyledWrapper = withProps<WrapperProps, HTMLDivElement>(styled.div)`
    transition: border-color 100ms, box-shadow 100ms;
    font-size: ${({ theme }): string => theme.TextField.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.TextField.idle.common.fontFamily};
    border-radius: ${({ theme }): string => theme.TextField.idle.common.borderRadius};
    display: flex;
    cursor: text;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;

    ${({ focus, severity, theme }): string =>
        focus
            ? `border: solid 1px ${theme.Text.severity[severity].color}`
            : `border: solid 1px ${theme.TextField.idle.common.borderColor}`};

    ${({ focus, disabled, severity, theme }): string =>
        focus && !disabled ? `box-shadow: ${theme.TextField.severity[severity].boxShadow}` : ''};

    * {
        cursor: text;
    }
`;

export { StyledWrapper, StyledInput, TextFieldThemeType, StyledAffix, StyledAffixWrapper };
