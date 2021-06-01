import React, { FC } from 'react';
import { StyledCard } from './style';

const Card: FC<{
    'data-testid'?: string;
}> = props => {
    return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;
