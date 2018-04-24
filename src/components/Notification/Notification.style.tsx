import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import Notification from './Notification.template';

type VariantStyleType = {
    background:string;
    borderColor:string;
    color:string;
    fontFamily:string;
    fontSize:string;
};

type NotificationThemeType = {
    error:VariantStyleType;
    info:VariantStyleType;
    success:VariantStyleType;
    warning:VariantStyleType;
};

const StyledNotification = styled(Notification)`
    border-width: 1px;
    border-style: solid;
    ${({ theme, severity }):string => `
        font-family: ${theme.Notification[severity].fontFamily};
        font-size: ${theme.Notification[severity].fontSize};
        background: ${theme.Notification[severity].background};
        border-color: ${theme.Notification[severity].borderColor};
        color: ${theme.Notification[severity].color};
    `}
`;

export default StyledNotification;
export {
    NotificationThemeType,
    VariantStyleType,
};
