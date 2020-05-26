import styled from '../../../utility/styled';
import calculateRandomPercentage from '../../../utility/calculateRandomPercentage';
import getSkeletonStyles from '../style';

type PropsType = {
    baseWidth?: number;
};

const StyledTextSkeleton = styled.span<PropsType>`
    ${({ theme }) => getSkeletonStyles(theme)}
    color: transparent;
    display: inline-block;
    height: ${({ theme }): string => theme.Skeleton.Text.fontSize};
    margin: ${({ theme }): string => `calc(${theme.Skeleton.Text.fontSize} / 4) 0`};
    width: ${({ baseWidth }): string => {
        if (baseWidth !== undefined) {
            return `${calculateRandomPercentage(baseWidth - 5, baseWidth + 5)}%`;
        }

        return `${calculateRandomPercentage(80, 90)}%`;
    }};

    & + br {
        user-select: none;
    }
`;

export default StyledTextSkeleton;
