import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';
import { LinkStyles } from '../Link/style';

type ToastPropsType = {
    severity: SeverityType;
};

type ToastThemeType = {
    borderRadius: string;
    backgroundColor: string;
};

const StyledToastWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const StyledToast = withProps<ToastPropsType, HTMLDivElement>(styled.div)`
    display: flex;
    transition: opacity 100ms, box-shadow 100ms;
    box-sizing: border-box;
    max-width: 792px;
    align-items: center;
    margin-top: 36px;
    box-shadow: 0 3px 48px rgba(0,0,0,0.3);
    border-radius: ${({ theme }): string => theme.Toaster.borderRadius}
    background-color: ${({ theme }): string => theme.Toaster.backgroundColor}
    border-left: ${({ severity, theme }): string => `4px solid ${theme.Text.severity[severity].color};`}

    a {
       ${LinkStyles}
    }
`;

export default StyledToast;
export { ToastPropsType, StyledToastWrapper, ToastThemeType };
