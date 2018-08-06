import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';
import calculateRandomPercentage from '../../../utility/calculateRandomPercentage';
import getSkeletonStyles from '../style';

type PropsType = {
    baseWidth?: number;
};

const StyledTextSkeleton = withProps<PropsType>(styled.div)`
    ${({ theme }): string => getSkeletonStyles(theme)}
    color: transparent;
    display:inline-block;
    height: ${({ theme }): string => theme.Skeleton.Text.fontSize};
    margin: ${({ theme }): string => `calc(${theme.Skeleton.Text.fontSize} / 4) 0`};
    width: ${({ baseWidth }): string =>
        baseWidth !== undefined
            ? `${calculateRandomPercentage((baseWidth as number) - 5, (baseWidth as number) + 5)}%`
            : `${calculateRandomPercentage(80, 90)}%`};

    & + br {
        user-select: none;
    }
`;

export default StyledTextSkeleton;
