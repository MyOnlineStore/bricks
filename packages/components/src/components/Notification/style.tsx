import SeverityType from '../../types/SeverityType';
import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

type VariantStyleType = {
    backgroundColor: string;
    color: string;
};

type NotificationThemeType = {
    common: {
        fontFamily: string;
        fontSize: string;
        borderRadius: string;
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
    display: inline-block;
    font-family: ${({ theme }): string => theme.Notification.common.fontFamily};
    font-size: ${({ theme }): string => theme.Notification.common.fontSize};
    line-height: 1.6;
    border-radius: ${({ theme }): string => theme.Notification.common.borderRadius};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${({ theme, severity }): string => `
        background-color: ${theme.Notification[severity].backgroundColor};
        color: ${theme.Notification[severity].color};
    `};
`;

const composeNotificationTheme = (themeTools: ThemeTools): NotificationThemeType => {
    const { colors, text } = themeTools.themeSettings;

    return {
        common: {
            fontFamily: text.primaryFont,
            fontSize: text.fontSize.base,
            // no common borderRadius in themeTools yet
            borderRadius: '0px',
        },
        error: {
            color: colors.severity.error,
            backgroundColor: chroma(colors.severity.error)
                .set('hsl.l', 0.93)
                .hex(),
        },
        warning: {
            color: chroma(colors.severity.warning)
                .set('hsl.l', 0.4)
                .hex(),
            backgroundColor: chroma(colors.severity.warning)
                .set('hsl.l', 0.93)
                .hex(),
        },
        success: {
            color: colors.severity.success,
            backgroundColor: chroma(colors.severity.success)
                .set('hsl.l', 0.93)
                .hex(),
        },
        info: {
            color: colors.severity.info,
            backgroundColor: chroma(colors.severity.info)
                .set('hsl.l', 0.93)
                .hex(),
        },
    };
};

export default StyledNotification;
export { NotificationThemeType, composeNotificationTheme };
