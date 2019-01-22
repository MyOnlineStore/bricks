import SeverityType from '../../types/_SeverityType';
import BaseType from '../../types/_BaseType';
declare type PropsType = BaseType & {
    severity?: SeverityType;
};
declare type BadgeThemeType = {
    default: {
        color: string;
    };
    severity: {
        error: VariantStyleType;
        success: VariantStyleType;
        warning: VariantStyleType;
        info: VariantStyleType;
    };
};
declare type VariantStyleType = {
    backgroundColor: string;
    color: string;
    fontFamily: string;
};
declare const Badge: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, PropsType, never>;
export default Badge;
export { PropsType, BadgeThemeType };
