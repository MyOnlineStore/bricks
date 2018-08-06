import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';
import getSkeletonStyles from '../style';

type PropsType = {
    width?: number;
};

const StyledButtonSkeleton = withProps<PropsType>(styled.div)`
    ${({ theme }): string => getSkeletonStyles(theme)}
    color: transparent;
    display: inline-block;
    line-height: 1;
    padding: 11px 24px;
    font-size: ${({ theme }): string => theme.Skeleton.Button.fontSize};
    width: ${({ width }): string => (width !== undefined ? `${width}px` : '0')}
`;

export default StyledButtonSkeleton;
