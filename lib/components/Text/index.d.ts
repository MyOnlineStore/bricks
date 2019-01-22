import SeverityType from '../../types/_SeverityType';
declare type TextVariantStyleType = {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: {
        default: string;
        compact: string;
    };
};
declare type TextThemeType = {
    default: {
        color: string;
    };
    variant: {
        small: TextVariantStyleType;
        regular: TextVariantStyleType;
        large: TextVariantStyleType;
        extraLarge: TextVariantStyleType;
        display: TextVariantStyleType;
    };
    strong: {
        fontWeight: string;
    };
    severity: {
        error: string;
        success: string;
        info: string;
        warning: string;
    };
};
declare type PropsType = {
    variant?: 'small' | 'regular' | 'large' | 'extraLarge' | 'display';
    severity?: SeverityType;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    compact?: boolean;
    strong?: boolean;
};
declare const Text: import("styled-components").StyledComponent<"p", import("../../types/ThemeType").default, PropsType, never>;
export default Text;
export { TextThemeType, TextVariantStyleType, PropsType };
