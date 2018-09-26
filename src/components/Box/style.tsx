import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import { PropsType } from '.';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type BoxPropsType = PropsType & {
    flexWrap?: PropsType['wrap'];
    elementHeight?: PropsType['height'];
    elementWidth?: PropsType['width'];
    elementMaxHeight?: PropsType['height'];
    elementMinHeight?: PropsType['minHeight'];
    elementMaxWidth?: PropsType['maxWidth'];
    elementMinWidth?: PropsType['minWidth'];
    flexDirection?: PropsType['direction'];
    flexOrder?: PropsType['order'];
};

const StyledDiv = withProps<BoxPropsType, HTMLDivElement>(styled.div)`
    box-sizing: border-box;
    display: ${({ inline }): string => (inline ? 'inline-flex' : 'flex')};
    height: ${({ elementHeight }): string => (elementHeight !== undefined ? elementHeight : '')};
    width: ${({ elementWidth }): string => (elementWidth !== undefined ? elementWidth : '')};
    max-height: ${({ elementMaxHeight }): string => (elementMaxHeight !== undefined ? elementMaxHeight : '')};
    min-height: ${({ elementMinHeight }): string => (elementMinHeight !== undefined ? elementMinHeight : '')};
    max-width: ${({ elementMaxWidth }): string => (elementMaxWidth !== undefined ? elementMaxWidth : '')};
    min-width: ${({ elementMinWidth }): string => (elementMinWidth !== undefined ? elementMinWidth : '')};
    flex-wrap: ${({ flexWrap }): string => (flexWrap !== undefined && flexWrap ? 'wrap' : '')};
    flex-direction: ${({ flexDirection }): string => (flexDirection !== undefined ? flexDirection : '')};
    justify-content: ${({ justifyContent }): string => (justifyContent !== undefined ? justifyContent : '')};
    align-items: ${({ alignItems }): string => (alignItems !== undefined ? alignItems : '')};
    align-content: ${({ alignContent }): string => (alignContent !== undefined ? alignContent : '')};
    margin: ${({ margin }): string =>
        margin !== undefined ? `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}` : ''};
    padding: ${({ padding }): string =>
        padding !== undefined ? `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}` : ''};
    flex-grow: ${({ grow }): number => (grow ? grow : 0)};
    flex-shrink: ${({ shrink }): number => (shrink !== undefined ? shrink : 1)};
    flex-basis: ${({ basis }): string => (basis ? basis : 'auto')};
    order: ${({ flexOrder }): number => (flexOrder ? flexOrder : 0)};
    align-self: ${({ alignSelf }): string => (alignSelf ? alignSelf : '')};
    position: ${({ position }): string => position !== undefined ? position : ''};
    top: ${({ top }): string => top !== undefined ? top : ''};
    right: ${({ right }): string => right !== undefined ? right : ''};
    bottom: ${({ bottom }): string => bottom !== undefined ? bottom : ''};
    left: ${({ left }): string => left !== undefined ? left : ''};
`;

const StyledSpan = StyledDiv.withComponent('span');

export { StyledDiv, StyledSpan, BoxPropsType };
