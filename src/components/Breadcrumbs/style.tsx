import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';

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
