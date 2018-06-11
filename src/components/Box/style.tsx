import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type BoxPropsType = PropsType & {
    flexWrap?: PropsType['wrap'];
    elementHeight?: PropsType['height'];
    flexDirection?: PropsType['direction'];
    flexOrder?: PropsType['order'];
};

const StyledBox = withProps<BoxPropsType, HTMLDivElement>(styled.div) `
    display: flex;
    height: ${({ elementHeight }): string =>
        elementHeight !== undefined ? `${elementHeight}` : 'auto'};
    flex-wrap: ${({ flexWrap }): string =>
        flexWrap !== undefined && flexWrap ? 'wrap' : 'no-wrap'};
    flex-direction: ${({ flexDirection }): string =>
        flexDirection !== undefined ? flexDirection : 'row'};
    justify-content: ${({ justifyContent }): string =>
        justifyContent !== undefined ? justifyContent : 'flex-start'};
    align-items: ${({ alignItems }): string =>
        alignItems !== undefined ? alignItems : 'stretch'};
    align-content: ${({ alignContent }): string =>
        alignContent !== undefined ? alignContent : 'stretch'};
    margin: ${({ margin }): string =>
        margin !== undefined
            ? `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`
            : '0'};
    flex-grow: ${({ grow }): number => (grow ? grow : 0)};
    flex-shrink: ${({ shrink }): number => (shrink ? shrink : 1)};
    flex-basis: ${({ basis }): string => (basis ? basis : 'auto')};
    order: ${({ flexOrder }): number => (flexOrder ? flexOrder : 0)};
    align-self: ${({ alignSelf }): string => (alignSelf ? alignSelf : 'auto')};
`;

export default StyledBox;
export { BoxPropsType };
