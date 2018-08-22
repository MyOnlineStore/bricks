import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';

type ToasterPropsType = {
    show?: boolean;
    severity: SeverityType;
    direction: 'column' | 'row';
};

type ToasterThemeType = {
    borderRadius: string;
};

const StyledToasterWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledToaster = withProps<ToasterPropsType, HTMLDivElement>(styled.div)`
    flex-direction: ${({ direction }): string => direction}
    transition: opacity 100ms, box-shadow 100ms;
    box-sizing: border-box;
    background-color: #fff;
    max-width: 792px;
    border-radius: ${({ theme }): string => theme.Toaster.borderRadius}
    display: flex;
    justify-content: space-between;
    position: fixed;
    margin: 24px 6px;
    align-items: center;
    box-shadow: 0 3px 48px rgba(0,0,0,0.3);
    border-left: ${({ severity, theme }): string => `4px solid ${theme.Text.severity[severity].color};`}
    ${({ show }): string => (show ? 'opacity: 1;' : 'opacity: 0; pointer-events: none;')};
`;

export default StyledToaster;
export { ToasterPropsType, StyledToasterWrapper, ToasterThemeType };
