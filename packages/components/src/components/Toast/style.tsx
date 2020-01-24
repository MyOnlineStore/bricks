import styled from '../../utility/styled';
import SeverityType from '../../types/SeverityType';
import { LinkStyles } from '../Link/style';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';

type ToastPropsType = {
    severity: SeverityType;
};

type ToastThemeType = {
    borderRadius: string;
    backgroundColor: string;
    severity: {
        error: string;
        success: string;
        info: string;
        warning: string;
    };
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
    pointer-events: none;
`;

const StyledToast = styled.div<ToastPropsType>`
    display: flex;
    transition: opacity 100ms, box-shadow 100ms;
    box-sizing: border-box;
    max-width: 792px;
    align-items: center;
    margin-top: 36px;
    box-shadow: 0 3px 48px rgba(0, 0, 0, 0.3);
    border-radius: ${({ theme }): string => theme.Toast.borderRadius};
    background-color: ${({ theme }): string => theme.Toast.backgroundColor};
    border-left: ${({ severity, theme }): string => `4px solid ${theme.Text.variant[severity]}`};
    pointer-events: auto;

    a {
        ${LinkStyles}
    }
`;

const composeToastTheme = (themeTools: ThemeTools): ToastThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        borderRadius: themeTools.calculateRoundness(20),
        backgroundColor: colors.silver.lighter1,
        severity: {
            error: colors.severity.error,
            success: colors.severity.success,
            info: colors.severity.info,
            warning: colors.severity.warning,
        },
    };
};

export default StyledToast;
export { ToastPropsType, StyledToastWrapper, ToastThemeType, composeToastTheme };
