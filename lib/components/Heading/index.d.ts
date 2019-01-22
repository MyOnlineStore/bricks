declare type HierarchyType = 1 | 2 | 3 | 4 | 5 | 6;
declare type HeadingHierarchyThemeType = {
    fontFamily: string;
    fontSize: string;
    fontWeight: {
        light: string;
        default: string;
    };
    lineHeight: string;
    color: string;
};
declare type HeadingThemeType = {
    hierarchy1: HeadingHierarchyThemeType;
    hierarchy2: HeadingHierarchyThemeType;
    hierarchy3: HeadingHierarchyThemeType;
    hierarchy4: HeadingHierarchyThemeType;
    hierarchy5: HeadingHierarchyThemeType;
    hierarchy6: HeadingHierarchyThemeType;
    [key: string]: HeadingHierarchyThemeType;
};
declare type PropsType = {
    hierarchy?: HierarchyType;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    light?: boolean;
};
declare const Heading: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, {
    role: "heading";
} & PropsType, "role">;
export default Heading;
export { PropsType, HeadingThemeType, HeadingHierarchyThemeType, HierarchyType };
