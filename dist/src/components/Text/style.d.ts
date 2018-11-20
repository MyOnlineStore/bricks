import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
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
declare const StyledParagraph: _S<import("../../utility/_styled").StyledType & {
    variant?: "small" | "large" | "regular" | "extraLarge" | "display" | undefined;
    severity?: "error" | "warning" | "success" | "info" | undefined;
    textAlign?: "center" | "right" | "left" | "justify" | undefined;
    compact?: boolean | undefined;
    strong?: boolean | undefined;
    inline?: boolean | undefined;
} & _R.HTMLProps<HTMLParagraphElement>, _T, import("../../utility/_styled").StyledType & {
    variant?: "small" | "large" | "regular" | "extraLarge" | "display" | undefined;
    severity?: "error" | "warning" | "success" | "info" | undefined;
    textAlign?: "center" | "right" | "left" | "justify" | undefined;
    compact?: boolean | undefined;
    strong?: boolean | undefined;
    inline?: boolean | undefined;
} & _R.HTMLProps<HTMLParagraphElement>>;
declare const StyledSpan: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, _T, _R.ClassAttributes<HTMLSpanElement> & _R.HTMLAttributes<HTMLSpanElement> & import("../../utility/_styled").StyledType & {
    variant?: "small" | "large" | "regular" | "extraLarge" | "display" | undefined;
    severity?: "error" | "warning" | "success" | "info" | undefined;
    textAlign?: "center" | "right" | "left" | "justify" | undefined;
    compact?: boolean | undefined;
    strong?: boolean | undefined;
    inline?: boolean | undefined;
} & _R.HTMLProps<HTMLParagraphElement>>;
export { StyledSpan, StyledParagraph, TextThemeType, TextVariantStyleType };
