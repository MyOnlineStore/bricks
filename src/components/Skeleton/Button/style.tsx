import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';
import getSkeletonStyles from '../style';

type PropsType = {
    width?: number;
};

const StyledButtonSkeleton = withProps<PropsType>(styled.div)`
    ${({ theme }): string => getSkeletonStyles(theme)} color: transparent;
    display:inline-block;
    user-select: none;
    line-height: 1;
    padding: 11px 24px;
    width: ${({ width }): string => `${width}px`}
`;

export default StyledButtonSkeleton;
