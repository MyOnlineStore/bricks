import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import SeverityType from '../../types/SeverityType';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type NotificationVariantType = {
    color: string;
};

type InlineNotificationThemeType = {
    common: {
        fontSize: string;
        fontFamily: string;
    };
    success: NotificationVariantType;
    error: NotificationVariantType;
    warning: NotificationVariantType;
    info: NotificationVariantType;
};

type PropsType = {
    severity: SeverityType;
};

const StyledInlineNotification = withProps<PropsType, HTMLSpanElement>(
    styled.span,
)`
    transition: color 0.3s;
    font-family: ${({ theme }): string =>
        theme.InlineNotification.common.fontFamily};
    font-size: ${({ theme }): string =>
        theme.InlineNotification.common.fontSize};
    color: ${({ theme, severity }): string => {
        return theme.InlineNotification[severity].color;
    }}
    display: inline-block;
`;

const StyledMessage = styled.span`
    vertical-align: middle;
`;

export default StyledInlineNotification;
export { StyledMessage, InlineNotificationThemeType, NotificationVariantType };
