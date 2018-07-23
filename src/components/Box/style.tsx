import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type BoxPropsType = PropsType & {
    flexWrap?: PropsType['wrap'];
    elementHeight?: PropsType['height'];
    elementMaxHeight?: PropsType['height'];
    flexDirection?: PropsType['direction'];
    flexOrder?: PropsType['order'];
};

const StyledDiv = withProps<BoxPropsType, HTMLDivElement>(styled.div)`
    display: ${({ inline }): string => (inline ? 'inline-flex' : 'flex')};
    height: ${({ elementHeight }): string => (elementHeight !== undefined ? elementHeight : '')};
    max-height: ${({ elementMaxHeight }): string => (elementMaxHeight !== undefined ? elementMaxHeight : '')};
    flex-wrap: ${({ flexWrap }): string => (flexWrap !== undefined && flexWrap ? 'wrap' : '')};
    flex-direction: ${({ flexDirection }): string => (flexDirection !== undefined ? flexDirection : '')};
    justify-content: ${({ justifyContent }): string => (justifyContent !== undefined ? justifyContent : '')};
    align-items: ${({ alignItems }): string => (alignItems !== undefined ? alignItems : '')};
    align-content: ${({ alignContent }): string => (alignContent !== undefined ? alignContent : '')};
    margin: ${({ margin }): string =>
        margin !== undefined ? `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}` : ''};
    flex-grow: ${({ grow }): number => (grow ? grow : 0)};
    flex-shrink: ${({ shrink }): number => (shrink !== undefined ? shrink : 1)};
    flex-basis: ${({ basis }): string => (basis ? basis : 'auto')};
    order: ${({ flexOrder }): number => (flexOrder ? flexOrder : 0)};
    align-self: ${({ alignSelf }): string => (alignSelf ? alignSelf : '')};
`;

const StyledSpan = StyledDiv.withComponent('span');

export { StyledDiv, StyledSpan, BoxPropsType };
