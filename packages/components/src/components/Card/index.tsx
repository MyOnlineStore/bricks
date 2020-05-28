import React, { FC } from 'react';
import { StyledCard } from './style';

const Card: FC = props => {
    return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
