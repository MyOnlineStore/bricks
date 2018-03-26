import { default as _R } from 'react';
import styled, { StyledComponentClass as _S } from 'styled-components';
import { ContentProps } from './FoldOut.template';

const StyledFoldOut = styled.div`
    transition: height 300ms cubic-bezier(0.5, 0, 0.1, 1);
    overflow: hidden;
    height: ${(props:ContentProps):string => `${!!props.isOpen
        ? props.contentHeight
        : 0
    }px`}
`;

export default StyledFoldOut;
