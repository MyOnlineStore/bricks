import React, { FunctionComponent } from 'react';
import StyledBreadcrumbs, { StyledBreadcrumb } from './style';
import trbl from '../../utility/trbl';
import { Link, Box } from '../..';
import Text from '../Text';
import Icon from '../Icon';

type PropsType = {
    breadcrumbs: Array<BreadcrumbType>;
};

type BreadcrumbType = {
    url?: string;
    name: string;
};

const Breadcrumbs: FunctionComponent<PropsType> = (props): JSX.Element => {
    const renderBreadcrumb = (breadcrumb: BreadcrumbType, index: number): JSX.Element => (
        <StyledBreadcrumb key={index}>
            <Text>
                {(breadcrumb.url === undefined && breadcrumb.name) || (
                    <Link title={breadcrumb.name} href={breadcrumb.url}>
                        {breadcrumb.name}
                    </Link>
                )}
            </Text>
            {index < props.breadcrumbs.length - 1 && (
                <Box margin={trbl(0, 9)}>
                    <Text>
                        <Icon icon="chrevronRight" size="small" />
                    </Text>
                </Box>
            )}
        </StyledBreadcrumb>
    );

    return <StyledBreadcrumbs>{props.breadcrumbs.map(renderBreadcrumb)}</StyledBreadcrumbs>;
};

export default Breadcrumbs;
