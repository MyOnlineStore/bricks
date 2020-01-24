import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';

type BreadcrumbsThemeType = {
    default: {
        color: string;
    };
    link: {
        color: string;
    };
};

const StyledBreadcrumbs = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
`;

const StyledBreadcrumb = styled.li`
    white-space: nowrap;
    display: flex;
    color: ${({ theme }): string => theme.Breadcrumbs.default.color};

    a {
        color: ${({ theme }): string => theme.Breadcrumbs.link.color};
    }
`;

const composeBreadcrumbsTheme = (themeTools: ThemeTools): BreadcrumbsThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        default: {
            color: themeTools.calculateContrastTextColor(colors.background),
        },
        link: {
            color: themeTools.calculateContrastTextColor(colors.background),
        },
    };
};

export default StyledBreadcrumbs;
export { StyledBreadcrumb, BreadcrumbsThemeType, composeBreadcrumbsTheme };
