import React, { FC } from 'react';
import { StyledCard } from './style';

const Card: FC<{
    'data-testid'?: string;
}> = props => {
    return <StyledCard data-testid={props['data-testid']}>{props.children}</StyledCard>;
};

export default Card;
