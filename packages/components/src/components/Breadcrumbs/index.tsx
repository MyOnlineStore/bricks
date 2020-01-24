import React, { FunctionComponent } from 'react';
import StyledBreadcrumbs, { StyledBreadcrumb } from './style';
import Link from '../Link';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import { ChevronRightIcon } from '@myonlinestore/bricks-assets';

type PropsType = {
    breadcrumbs: Array<BreadcrumbType>;
    'data-testid'?: string;
};

type BreadcrumbType = {
    url?: string;
    name: string;
};

const Breadcrumbs: FunctionComponent<PropsType> = (props): JSX.Element => (
    <nav aria-label="Breadcrumb">
        <StyledBreadcrumbs data-testid={props['data-testid']}>
            {props.breadcrumbs.map(
                (breadcrumb, index): JSX.Element => (
                    <StyledBreadcrumb
                        key={index}
                        data-testid={props['data-testid'] ? `${props['data-testid']}-crumb-${index}` : undefined}
                    >
                        <Text>
                            {(breadcrumb.url === undefined && <span aria-current="page">{breadcrumb.name}</span>) || (
                                <Link title={breadcrumb.name} href={breadcrumb.url}>
                                    {breadcrumb.name}
                                </Link>
                            )}
                        </Text>
                        {index < props.breadcrumbs.length - 1 && (
                            <Box margin={[0, 9]}>
                                <Text severity="info">
                                    <Icon icon={ChevronRightIcon} size="small" />
                                </Text>
                            </Box>
                        )}
                    </StyledBreadcrumb>
                ),
            )}
        </StyledBreadcrumbs>
    </nav>
);

export default Breadcrumbs;
