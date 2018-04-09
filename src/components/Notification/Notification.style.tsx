import { StyledComponentClass as _S } from 'styled-components';
import ThemeType from '../../themes/types/ThemeType';
import styled from '../../utility/styled';
import Notification, { PropsType } from './Notification.template';

const applyTheme = (theme:ThemeType, severity:PropsType['severity']):string => `
    background: ${theme.notification[severity].background};
    border-color: ${theme.notification[severity].borderColor};
    color: ${theme.notification[severity].color};
`;

const StyledNotification = styled(Notification)`
    font-family: ${({ theme }):string => theme.fontFamily};
    font-size: ${({ theme }):string => theme.fontSize};
    border-width: 1px;
    border-style: solid;
    ${({ severity, theme }):string => applyTheme(theme, severity)}
`;

export default StyledNotification;
