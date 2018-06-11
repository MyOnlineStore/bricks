import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import SeverityType from '../../types/SeverityType';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type VariantStyleType = {
    backgroundColor: string;
    borderColor: string;
    color: string;
};

type NotificationThemeType = {
    common: {
        fontFamily: string;
        fontSize: string;
    };
    error: VariantStyleType;
    info: VariantStyleType;
    success: VariantStyleType;
    warning: VariantStyleType;
};

type NotificationPropsType = {
    severity: SeverityType;
};

const StyledNotification = withProps<NotificationPropsType, HTMLDivElement>(styled.div)`
    border-width: 1px;
    border-style: solid;
    font-family: ${({ theme }): string => theme.Notification.common.fontFamily};
    font-size: ${({ theme }): string => theme.Notification.common.fontSize};

    ${({ theme, severity }): string => `
        background-color: ${theme.Notification[severity].backgroundColor};
        border-color: ${theme.Notification[severity].borderColor};
        color: ${theme.Notification[severity].color};
    `};
`;

export default StyledNotification;
export { NotificationThemeType, VariantStyleType };
