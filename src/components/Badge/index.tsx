import React, { SFC } from 'react';
import StyledBadge from './style';

const Badge: SFC = (props): JSX.Element => {
    return <StyledBadge>{props.children}</StyledBadge>;
};

export default Badge;
