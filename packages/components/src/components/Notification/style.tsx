import SeverityType from '../../types/SeverityType';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';
import chroma from 'chroma-js';

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

const composeNotificationTheme = (themeTools: ThemeTools): NotificationThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        common: {
            fontFamily: text.primaryFont,
            fontSize: text.fontSize.base,
        },
        error: {
            color: colors.severity.error,
            backgroundColor: chroma(colors.severity.error)
                .set('hsl.l', 0.93)
                .hex(),
            borderColor: colors.severity.error,
        },
        warning: {
            color: chroma(colors.severity.warning)
                .set('hsl.l', 0.4)
                .hex(),
            backgroundColor: chroma(colors.severity.warning)
                .set('hsl.l', 0.93)
                .hex(),
            borderColor: chroma(colors.severity.warning)
                .set('hsl.l', 0.4)
                .hex(),
        },
        success: {
            color: colors.severity.success,
            backgroundColor: chroma(colors.severity.success)
                .set('hsl.l', 0.93)
                .hex(),
            borderColor: colors.severity.success,
        },
        info: {
            color: colors.severity.info,
            backgroundColor: chroma(colors.severity.info)
                .set('hsl.l', 0.93)
                .hex(),
            borderColor: colors.severity.info,
        },
    };
};

export default StyledNotification;
export { NotificationThemeType, composeNotificationTheme };
