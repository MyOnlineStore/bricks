import SeverityType from '../../types/_SeverityType';
declare type ToasterPropsType = {
    severity: SeverityType;
};
declare type ToasterThemeType = {
    borderRadius: string;
    backgroundColor: string;
    severity: {
        error: string;
        success: string;
        info: string;
        warning: string;
    };
};
declare const StyledToasterWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {}, never>;
declare const StyledToaster: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, ToasterPropsType, never>;
export default StyledToaster;
export { ToasterPropsType, StyledToasterWrapper, ToasterThemeType };
