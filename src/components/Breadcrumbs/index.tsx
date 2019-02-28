import React, { FunctionComponent } from 'react';
import StyledBreadcrumbs, { StyledBreadcrumb } from './style';
import Link from '../Link';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import chrevronRight from '../../assets/icons/chevron-right-small.svg';

type PropsType = {
    breadcrumbs: Array<BreadcrumbType>;
};

type BreadcrumbType = {
    url?: string;
    name: string;
};

const Breadcrumbs: FunctionComponent<PropsType> = (props): JSX.Element => {
    const renderBreadcrumb = (breadcrumb: BreadcrumbType, index: number): JSX.Element => (
        <StyledBreadcrumb key={index} aria-label="Breadcrumb">
            <Text>
                {(breadcrumb.url === undefined && breadcrumb.name) || (
                    <Link title={breadcrumb.name} href={breadcrumb.url}>
                        {breadcrumb.name}
                    </Link>
                )}
            </Text>
            {index < props.breadcrumbs.length - 1 && (
                <Box margin={[0, 9]}>
                    <Text severity="info">
                        <Icon icon={chrevronRight} size="small" />
                    </Text>
                </Box>
            )}
        </StyledBreadcrumb>
    );

    return (
        <nav aria-label="Breadcrumb">
            <StyledBreadcrumbs>{props.breadcrumbs.map(renderBreadcrumb)}</StyledBreadcrumbs>
        </nav>
    );
};

export default Breadcrumbs;
