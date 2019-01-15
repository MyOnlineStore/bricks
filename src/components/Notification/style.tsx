import SeverityType from '../../types/_SeverityType';
import styled from '../../utility/_styled';

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

type PropsType = {
    severity: SeverityType;
};

const StyledNotification = styled.div<PropsType>`
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
export { NotificationThemeType };
