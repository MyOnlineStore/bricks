import SeverityType from '../../types/_SeverityType';
declare type VariantStyleType = {
    backgroundColor: string;
    borderColor: string;
    color: string;
};
declare type NotificationThemeType = {
    common: {
        fontFamily: string;
        fontSize: string;
    };
    error: VariantStyleType;
    info: VariantStyleType;
    success: VariantStyleType;
    warning: VariantStyleType;
};
declare type PropsType = {
    severity: SeverityType;
};
declare const StyledNotification: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, PropsType, never>;
export default StyledNotification;
export { NotificationThemeType };
