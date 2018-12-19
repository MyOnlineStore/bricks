import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import { StyledType } from '../../utility/styled';
declare type HeadingHierarchyThemeType = {
    color: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    textTransform: string;
};
declare type HeadingThemeType = StyledType & {
    default: {
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        textTransform: string;
    };
    hierarchy: {
        hierarchy1: HeadingHierarchyThemeType;
        hierarchy2: HeadingHierarchyThemeType;
        hierarchy3: HeadingHierarchyThemeType;
        hierarchy4: HeadingHierarchyThemeType;
        hierarchy5: HeadingHierarchyThemeType;
        hierarchy6: HeadingHierarchyThemeType;
        [key: string]: HeadingHierarchyThemeType;
    };
};
declare type PropsType = StyledType & {
    hierarchy?: 1 | 2 | 3 | 4 | 5 | 6;
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
};
declare const StyledHeading: _S<PropsType, _T, Pick<PropsType, "className" | "innerRef" | "hierarchy" | "element" | "textAlign"> & {
    theme?: _T | undefined;
}>;
export default StyledHeading;
export { PropsType, HeadingThemeType, HeadingHierarchyThemeType };
