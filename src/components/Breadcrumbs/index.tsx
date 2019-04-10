import React, { FC } from 'react';
import StyledBreadcrumbs, { StyledBreadcrumb } from './style';
import Link from '../Link';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import chrevronRight from '../../assets/icons/chevron-right-small.svg';

type PropsType = {
    breadcrumbs: Array<BreadcrumbType>;
    'data-testid'?: string;
};

type BreadcrumbType = {
    url?: string;
    name: string;
};

const Breadcrumbs: FC<PropsType> = (props): JSX.Element => (
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
                                    <Icon icon={chrevronRight} size="small" />
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
