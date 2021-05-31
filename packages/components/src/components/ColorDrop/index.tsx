import React, { FC } from 'react';
import { StyledColorDrop } from './style';

const ColorDrop: FC<{
    color: string;
    'data-testid'?: string;
}> = props => {
    return <StyledColorDrop data-testid={props['data-testid']} color={props.color} />;
};

export default ColorDrop;
