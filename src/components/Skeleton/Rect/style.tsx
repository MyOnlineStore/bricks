import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../../types/ThemeType';
import styled, { withProps } from '../../../utility/styled';
import { PropsType } from '.';
import Box, { PropsType as BoxPropsType } from '../../Box';

type RectPropsType = BoxPropsType & {
    position?: PropsType['position'];
    borderRadius?: PropsType['borderRadius'];
};

const StyledRectSkeleton = withProps<RectPropsType>(styled(Box))`
    @keyframes wipe {
        0% {
            transform: translate(-100%) rotate(5deg);
        }

        100% {
            transform: translate(175%) rotate(5deg);
        }
    }

    display: inline-block;
    color: transparent;
    user-select: none;
    color: transparent;
    background-color: ${({ theme }): string => theme.Skeleton.common.backgroundColor};
    background-size: 200px 100%;
    border-radius: ${({ theme, borderRadius }): string =>
        borderRadius ? borderRadius : theme.Skeleton.common.borderRadius};
    overflow: hidden;
    ${({ position }): string => (position !== undefined ? `position: ${position}` : '')};

    &:after {
        animation: 3s infinite wipe;
        content: '';
        height: 200%;
        width: 75%;
        top: -50%;
        left: -25%;
        transform: rotate(100deg);
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.02) 50%, rgba(0, 0, 0, 0) 100%);
        position: absolute;
    }
`;
export default StyledRectSkeleton;
