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
        };
        affix: {
            color: string;
            backgroundColor: string;
        };
    };
    active: {
        common: {
            color: string;
        };
        affix: {
            color: string;
        };
    };
    focus: {
        borderColor: string;
        boxShadow: string;
    };
};

const StyledInput = withProps<WrapperProps, HTMLInputElement>(styled.input)`
    width: 100%;
    border: none;
    background: transparent;
    font-size: inherit;
    display: block;
    padding: 9px;
    line-height: 1.5;
    outline: none;
    min-width: 12px;
`;

const StyledAffixWrapper = styled.div`
    display: flex;
    padding: 0 12px;
    user-select: none;
    color: ${({ theme }): string => theme.TextField.idle.affix.color};
    background-color: ${({ theme }): string => theme.TextField.idle.affix.backgroundColor};
    align-items: center;
    flex-shrink: 0;
    max-width: 40%;

    &:first-of-type {
        border-right: solid 1px ${({ theme }): string => theme.TextField.idle.common.borderColor};
    }

    &:last-of-type {
        border-left: solid 1px ${({ theme }): string => theme.TextField.idle.common.borderColor};
    }
`;

const StyledAffix = styled.span`
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

type WrapperProps = {
    active: boolean;
    focus: boolean;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
};

const StyledWrapper = withProps<WrapperProps, HTMLDivElement>(styled.div)`
    transition: border-color 100ms, box-shadow 100ms;
    border: solid 1px ${({ focus, theme }): string =>
        focus ? theme.TextField.focus.borderColor : theme.TextField.idle.common.borderColor};
    box-shadow: ${({ focus, theme }): string => (focus ? theme.TextField.focus.boxShadow : '')};
    font-size: ${({ theme }): string => theme.TextField.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.TextField.idle.common.fontFamily};
    border-radius: ${({ theme }): string => theme.TextField.idle.common.borderRadius};
    display: flex;
    position: relative;
    cursor: text;
    overflow: hidden;

    ${({ feedback, theme, focus }): string =>
        feedback !== undefined && feedback.severity !== 'info' && focus === false
            ? `border: solid 1px ${theme.Text.severity[feedback.severity].color};`
            : ''};

    * {
        cursor: text;
    }
`;

export { StyledWrapper, StyledInput, TextFieldThemeType, StyledAffix, StyledAffixWrapper };
