import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import SeverityType from '../../types/_SeverityType';
declare type TextVariantStyleType = {
    fontSize: string;
};
declare type SeverityStyleType = {
    color: string;
};
declare type TextThemeType = {
    default: {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
    };
    descriptive: {
        color: string;
    };
    strong: {
        fontWeight: string;
    };
    severity: {
        success: SeverityStyleType;
        warning: SeverityStyleType;
        error: SeverityStyleType;
        info: SeverityStyleType;
    };
    small: TextVariantStyleType;
    base: TextVariantStyleType;
    large: TextVariantStyleType;
};
declare type TextPropsType = {
    compact?: boolean;
    descriptive?: boolean;
    strong?: boolean;
    variant?: 'small' | 'base' | 'large';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    severity?: SeverityType | '';
};
declare const StyledParagraph: _S<TextPropsType & _R.HTMLProps<HTMLParagraphElement>, _T, TextPropsType & _R.HTMLProps<HTMLParagraphElement>>;
declare const StyledSpan: _S<_R.DetailedHTMLProps<_R.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, _T, _R.ClassAttributes<HTMLSpanElement> & _R.HTMLAttributes<HTMLSpanElement> & TextPropsType & _R.HTMLProps<HTMLParagraphElement>>;
export { StyledSpan, StyledParagraph, TextThemeType, TextVariantStyleType, SeverityStyleType };
