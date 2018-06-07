import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import SeverityType from '../../types/SeverityType';
import _T, { default as ThemeType } from '../../types/ThemeType';
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
    };
    active: {
        common: {
            color: string;
            borderColor: string;
        };
        label: {
            color: string;
        };
    };
};

const StyledInput = styled.input`
    position: relative;
    width: 100%;
    border: none;
    background: transparent;
    font-size: inherit;
    display: block;
    margin: 1em 0 0 0;
    padding: 0;
    line-height: 1.5;
    outline: none;
`;

type FloatingLabelProps = {
    active: boolean;
};

const StyledFloatingLabel = withProps<FloatingLabelProps, HTMLLabelElement>(styled.label)`
    transition: top 0.2s, transform 0.2s, font-size 0.2s, color 0.2s;
    display: block;
    line-height: 1.5;
    position: absolute;
    transform-origin: top left;
    top: 0;
    font-size: 1em;
    user-select: none;

    ${({ active, theme }): string => {
        return active
            ? `
                color: ${theme.TextField.active.label.color};
                transform: translate3d(0, 0.3em, 0) scale(0.85);
            `
            : `
                color: ${theme.TextField.idle.common.color};
                transform: translate3d(0, 0.85em, 0) scale(1);
            `;
    }};
`;

/*
color: ${theme.TextField.active.label.color};
top: 0.3em;
margin-top: 0;
font-size: 0.85em;
*/

/*
color: ${theme.TextField.idle.common.color};
font-size: 1em;
top: 50%;
margin-top: -0.75em;
*/

type WrapperProps = {
    active: boolean;
    feedback?: {
        severity: SeverityType;
        message: string;
    };
};

const StyledWrapper = withProps<WrapperProps, HTMLDivElement>(styled.div)`
    transition: border-color 0.3s;
    border: solid 1px
        ${({ active, theme }): string =>
            active ? theme.TextField.active.common.borderColor : theme.TextField.idle.common.borderColor};
    font-size: ${({ theme }): string => theme.TextField.idle.common.fontSize};
    font-family: ${({ theme }): string => theme.TextField.idle.common.fontFamily};
    border-radius: ${({ theme }): string => theme.TextField.idle.common.borderRadius};
    display: inline-block;
    position: relative;
    padding: 0.3em 12px 0.4em 12px;
    cursor: text;
    ${({ feedback, theme }): string =>
        feedback !== undefined && feedback.severity !== 'info'
            ? `
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
                border-bottom: solid 2px ${theme.InlineNotification[feedback.severity].color};
            `
            : ''};
    * {
        cursor: text;
    }
`;

export { StyledWrapper, StyledInput, StyledFloatingLabel, TextFieldThemeType };
