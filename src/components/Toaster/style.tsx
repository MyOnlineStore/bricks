import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';
import SeverityType from '../../types/SeverityType';

type ToasterPropsType = {
    show?: boolean;
    severity: SeverityType;
};

const StyledToaster = withProps<ToasterPropsType, HTMLDivElement>(styled.div)`
    transition: opacity 100ms;
    box-sizing: border-box;
    background-color: #fff;
    min-width: 350px;
    margin-top: 100px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 3px 48px rgba(0,0,0,0.3);
    padding: 12px;
    position: fixed;
    margin: 24px 5px;
    align-items: center;
    border-left: ${({ severity, theme }): string => `4px solid ${theme.Text.severity[severity].color};`}
    ${({ show }): string => (show ? 'opacity: 1;' : 'opacity: 0; pointer-events: none;')};
`;

export default StyledToaster;
export { ToasterPropsType };
