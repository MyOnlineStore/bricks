import React, { StatelessComponent } from 'react';
import styled from 'styled-components';

type Offset = 0 | 6 | 9 | 12 | 24 | 36 | 48;

type PropsType = {
    top?:Offset;
    right?:Offset;
    bottom?:Offset;
    left?:Offset;
    offsetType?:'inner' | 'outer';
};

const Spacer:StatelessComponent<PropsType> = (props):JSX.Element => {
    const spacing = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...props,
    };

    const WithSpacing = styled.div`
        display: inline-block;
        ${spacing.offsetType === 'inner' ? 'padding' : 'margin'}:
            ${spacing.top}px ${spacing.right}px ${spacing.bottom}px ${spacing.left}px;
    `;

    return <WithSpacing>{props.children}</WithSpacing>;
};

export default Spacer;
