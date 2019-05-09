import styled from '../../utility/styled';
import SeverityType from '../../types/SeverityType';

type PropsType = {
    severity?: SeverityType;
};

type BadgeThemeType = {
    severity: {
        error: VariantStyleType;
        success: VariantStyleType;
        warning: VariantStyleType;
        info: VariantStyleType;
    };
};

type VariantStyleType = {
    backgroundColor: string;
    color: string;
    fontFamily: string;
};

const Badge = styled.div<PropsType>`
    display: inline-block;
    box-sizing: border-box;
    min-width: 18px;
    min-height: 18px;
    padding: 3px 6px;
    border-radius: 9px;
    ${({ theme, severity }): string => {
        const badgeSeverity = severity === undefined ? 'error' : severity;

        return `
            background: ${theme.Badge.severity[badgeSeverity].backgroundColor};
            font-family: ${theme.Badge.severity[badgeSeverity].fontFamily};
        `;
    }};
    font-size: 12px;
    line-height: 1;
    color: ${({ theme }): string => theme.Badge.severity.error.color};
    white-space: nowrap;
`;

export default Badge;
export { PropsType, BadgeThemeType };
