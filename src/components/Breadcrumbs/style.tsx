import styled from '../../utility/_styled';

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

export default StyledBreadcrumbs;
export { StyledBreadcrumb, BreadcrumbsThemeType };
