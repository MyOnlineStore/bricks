declare type BreadcrumbsThemeType = {
    default: {
        color: string;
    };
    link: {
        color: string;
    };
};
declare const StyledBreadcrumbs: import("styled-components").StyledComponent<"ul", import("../../types/ThemeType").default, {}, never>;
declare const StyledBreadcrumb: import("styled-components").StyledComponent<"li", import("../../types/ThemeType").default, {}, never>;
export default StyledBreadcrumbs;
export { StyledBreadcrumb, BreadcrumbsThemeType };
